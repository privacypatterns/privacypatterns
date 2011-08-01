#!/usr/bin/env python
# -*- coding: utf-8 -*-

import glob
import optparse
import os
import re
import shutil
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
    contents = string.replace(contents, 'media/images/', '/media/images/')
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

def CopyImages(source_dir, dest_dir):
    # patterns and media dirs are siblings in privacypatterns.wiki
    source_dir = os.path.dirname(source_dir) + "/media/images"
    # from site/content/patterns, go up two directories to find media dir
    dest_dir = os.path.dirname(os.path.dirname(dest_dir)) + "/media/images"
    for filename in glob.glob(os.path.join(source_dir, "*.*")):
        basename = os.path.basename(filename)
        shutil.copyfile(filename, os.path.join(dest_dir, basename))
        print "Successfully copied image: %s" % filename
    
            
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
    parser.add_option("-i", "--copy_images",
                        default = True,
                        dest = "copy_images",
                        help = "Whether or not to copy images.  Relative paths to image directories only work for default options.")

    (options, args) = parser.parse_args()

    if len(args):
        parser.error("Unexpected arguments encountered.")

    options.source_dir = os.path.abspath(options.source_dir) 
    options.dest_dir = os.path.abspath(options.dest_dir)

    ProcessFiles(options.source_dir, options.dest_dir)

    if options.copy_images:
        CopyImages(options.source_dir, options.dest_dir)
    

if __name__ == "__main__":
    main()
