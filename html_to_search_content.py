#!/usr/bin/env python
# -*- coding: utf-8 -*-

import glob
import optparse
import os
import re
import shutil
from bs4 import BeautifulSoup
import json

def HtmlFilename(basename):
    return basename.split('.')[0] + '.html'

def CreateSearchContentFile(source_dir, dest_dir):
    import sys
    reload(sys)
    sys.setdefaultencoding('utf8')

    print "Generating Search content file"
    search_content_file = os.path.join(dest_dir, "tipuesearch_content.js")
    patterns_source = os.path.join(source_dir, 'patterns')
    deploy_path = os.path.abspath('./site/deploy/patterns/')

    search_file = "var tipuesearch = { \"pages\": ["
    is_first_object = True

    for filename in glob.glob(os.path.join(patterns_source, '*.md')):
        html_name = HtmlFilename(os.path.basename(filename))
        html_path = os.path.join(deploy_path, html_name)

        f = open(html_path, 'r')
        content = f.read()
        soup = BeautifulSoup(content, "html.parser")

        title = soup.h1.string.strip()
        url = "/patterns/%s" % os.path.basename(html_name).split('.')[0]
        text = ""
        tags = ""

        for par in soup.find_all('p'):
            par_text = par.string
            if par_text:
                text += par_text

        search_object = ","

        if is_first_object:
            is_first_object = False
            search_object = ""

        search_object += json.dumps({'title': title, 'tags': tags, 'url': url, 'text': text})

        search_file += search_object

    search_file += "]}"
    f = open(search_content_file, 'w')
    f.write(search_file)
    f.close()

    print "Successfully generated file: %s" % search_content_file
    
            
def main():
    parser = optparse.OptionParser(usage="%prog [-f] [-q]", version="%prog 0.5.3")
    parser.add_option("-s", "--source",
                        default = "site/deploy",
                        dest = "source_dir",
                        help = "Path of the generated html files, where the patterns live.")
    parser.add_option("-d", "--destination",
                        default = "site/media/js/tipuesearch",
                        dest = "dest_dir",
                        help = "Path of the tipuesearch directory, into which tipuesearch_content.js file will be copied.")

    (options, args) = parser.parse_args()

    if len(args):
        parser.error("Unexpected arguments encountered.")

    options.source_dir = os.path.abspath(options.source_dir) 
    options.dest_dir = os.path.abspath(options.dest_dir)

    CreateSearchContentFile(options.source_dir, options.dest_dir)
    

if __name__ == "__main__":
    main()
