SHELL := /bin/bash
.PHONY: build docker static

build: ./site/content/patterns
static: ./site/deploy

docker:
	@docker build .

./patterns:
	@echo "Updating content from wiki"
	@[ -d $@ ] || git clone https://github.com/privacypatterns/$@.git
	@cd $@ && git checkout master && git pull

./site/content/patterns: ./patterns
	@echo "Generating static files"
	@python markdown_to_hyde.py -s ./patterns -d ./site/content/

./hyde/hyde.py:
	@echo "Getting hyde"
	@git submodule init
	@git submodule update
	@pip install hyde/.

./site/deploy: ./hyde/hyde.py $(shell find ./site/content/patterns)
	@python ./hyde/hyde.py -g -s ./site
