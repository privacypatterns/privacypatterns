SHELL := /bin/bash
.PHONY: build wiki-clone docker static

build: ./site/content/patterns
static: ./site/deploy

docker:
	@docker build .

./privacypatterns.wiki: wiki-clone
	@echo "Updating content from wiki"
	@[ -d $@ ] || git clone https://github.com/privacypatterns/$@.git
	@cd $@ && git checkout master && git pull

./site/content/patterns: ./privacypatterns.wiki
	@echo "Generating static files"
	@python markdown_to_hyde.py -s ./privacypatterns.wiki -d ./site/content/

./hyde/hyde.py:
	@echo "Getting hyde"
	@git submodule init
	@git submodule update
	@pip install hyde/.

./site/deploy: ./hyde/hyde.py $(shell find ./site/content/patterns)
	@python ./hyde/hyde.py -g -s ./site
