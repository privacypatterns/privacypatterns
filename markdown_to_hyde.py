#!/usr/bin/env python
# -*- coding: utf-8 -*-

import glob
import optparse
import os
import re
import string

HYDE_RE = re.compile(r'({%hyde.+?%})(.+)', re.DOTALL)

TEMPLATE = string.Template("""{% extends "_post.html" %}

$hyde_tag

{% block article %}

{% include 'patterns/$filename' %}

{% endblock %}""")


def HtmlFilename(basename):
    return basename.split('.')[0] + '.html'


def ProcessMarkdown(filename):
    """Takes the name of a markdown file and returns a tuple consisting of two
    strings, the initial Hyde tag and the remaining contents of the file."""
    f = open(filename, 'r')
    contents = f.read().strip()
    result = HYDE_RE.match(contents)
    if result and result.groups():
        return (result.group(1), result.group(2).strip())
    else:
        print "No hyde tag found in file: %s" % filename
        return (None, None)


def ProcessFiles(source_dir, dest_dir):
    for filename in glob.glob(os.path.join(source_dir, '*.md')):
        basename = os.path.basename(filename)
        hyde_tag, contents = ProcessMarkdown(filename)
        if hyde_tag and contents:
            hyde_file = open(os.path.join(dest_dir, HtmlFilename(basename)), 'w')
            hyde_file.write(
                TEMPLATE.safe_substitute(hyde_tag=hyde_tag, filename=basename))
            hyde_file.close()

            md_file = open(os.path.join(dest_dir, basename), 'w')
            md_file.write(contents)
            md_file.close()
            print "Successfully processed file: %s" % filename

            
def main():
    parser = optparse.OptionParser(usage="%prog [-f] [-q]", version="%prog 0.5.3")
    parser.add_option("-s", "--source",
                        default = "../privacypatterns.wiki/patterns",
                        dest = "source_dir",
                        help = "Path of the source folder containing markdown files.")
    parser.add_option("-d", "--destination",
                        default = "site/content/patterns",
                        dest = "dest_dir",
                        help = "Path of the destination folder in which to create html templates.")

    (options, args) = parser.parse_args()

    if len(args):
        parser.error("Unexpected arguments encountered.")

    options.source_dir = os.path.abspath(options.source_dir) 
    options.dest_dir = os.path.abspath(options.dest_dir)

    ProcessFiles(options.source_dir, options.dest_dir)
    

if __name__ == "__main__":
    main()
