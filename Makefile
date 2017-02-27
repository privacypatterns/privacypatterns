SHELL := /bin/bash
SOURCE_PATTERNS_REPO:=https://github.com/privacypatterns/patterns
PATTERNS_REPO ?= $(SOURCE_PATTERNS_REPO)
PP_PORT ?= 8080

.PHONY: build docker static sync
build: ./site/content/patterns
static: ./site/deploy

docker: ./site/deploy ./site/deploy/changes
	@docker build . -t tmp/privacypatterns:local

sync: ./patterns
	@echo "Updating content from $(SOURCE_PATTERNS_REPO)"
	@cd ./patterns && git checkout master && git pull

./patterns:
	@echo "Cloning content from $(SOURCE_PATTERNS_REPO)"
	@[ -d ./patterns ] || git clone $(SOURCE_PATTERNS_REPO)

./site/content/patterns: ./patterns ./site/content/patterns/index.html ./site/layout/*
	@echo "Generating static files"
	@python markdown_to_hyde.py -s ./patterns -d ./site/content/

./hyde/hyde.py:
	@echo "Getting hyde"
	@git submodule init
	@git submodule update
	@pip install hyde/.

./site/deploy: ./hyde/hyde.py $(shell find ./site/content/patterns)
	@python ./hyde/hyde.py -g -s ./site

./site/deploy/changes: ./site/deploy
	@git log --pretty=short -n3 > $@
	@echo "===================" >> $@

run: docker
	@echo "Running privacypatterns on port $(PP_PORT)"
	@docker run -it -p $(PP_PORT):80 tmp/privacypatterns:local
