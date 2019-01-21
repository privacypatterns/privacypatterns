import os
here = lambda *x: os.path.join(os.path.abspath(os.path.dirname(__file__)), *x)

MD_EXTENSIONS = ['footnotes','toc(anchorlink=True, title=Contents)']

#Directories
LAYOUT_DIR = here('layout')
CONTENT_DIR = here('content')
MEDIA_DIR = here('media')
DEPLOY_DIR = here('deploy')
TMP_DIR = here('deploy_tmp')

BACKUPS_DIR = here('backups')
BACKUP = False

SITE_ROOT = "/"
SITE_WWW_URL = "privacypatterns.org"
SITE_NAME = "Privacy Patterns"
SITE_AUTHOR = "Nick Doty and Mohit Gupta"

#URL Configuration
GENERATE_ABSOLUTE_FS_URLS = False

# Clean urls causes Hyde to generate urls without extensions. Examples:
# http://example.com/section/page.html becomes
# http://example.com/section/page/, and the listing for that section becomes
# http://example.com/section/
# The built-in CherryPy webserver is capable of serving pages with clean urls
# without any additional configuration, but Apache will need to use Mod_Rewrite
# to map the clean urls to the actual html files.  The HtaccessGenerator site
# post processor is capable of automatically generating the necessary
# RewriteRules for use with Apache.
GENERATE_CLEAN_URLS = True

# A list of filenames (without extensions) that will be considered listing
# pages for their enclosing folders.
# LISTING_PAGE_NAMES = ['index']
LISTING_PAGE_NAMES = ['listing', 'index', 'default']

# Determines whether or not to append a trailing slash to generated urls when
# clean urls are enabled.
APPEND_SLASH = False

# {folder : extension : (processors)}
# The processors are run in the given order and are chained.
# Only a lone * is supported as an indicator for folders. Path
# should be specified. No wildcard card support yet.

# Starting under the media folder. For example, if you have media/css under
# your site root,you should specify just css. If you have media/css/ie you
# should specify css/ie for the folder name. css/* is not supported (yet).

# Extensions do not support wildcards.

MEDIA_PROCESSORS = {
    '*':{
        '.css':('hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.CSSmin',),
        '.ccss':('hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.CleverCSS',
                'hydeengine.media_processors.CSSmin',),
        '.sass':('hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.SASS',
                'hydeengine.media_processors.CSSmin',),
        '.less':('hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.LessCSS',
                'hydeengine.media_processors.CSSmin',),
        '.styl':('hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.Stylus',
                'hydeengine.media_processors.CSSmin',),
        '.hss':(
                'hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.HSS',
                'hydeengine.media_processors.CSSmin',),
        '.js':(
                'hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.JSmin',),
        '.coffee':(
                'hydeengine.media_processors.TemplateProcessor',
                'hydeengine.media_processors.CoffeeScript',
                'hydeengine.media_processors.JSmin',)
    }
}

CONTENT_PROCESSORS = {
    'prerendered/': {
        '*.*' :
            ('hydeengine.content_processors.PassthroughProcessor',)
            }
}

SITE_PRE_PROCESSORS = {
    'patterns': {
        'hydeengine.site_pre_processors.CategoriesManager': {
            'node':'patterns',
            'template': '_category.html',
            'archiving': True,
            'listing_template': 'skeleton/_listing.html',
            'output_folder': 'categories',
            'meta': {
                'minimize': {
                    'type': "strategy",
                    'tactics': {
                        "select","exclude","strip","destroy",
                    },
                },
                "select":{'type':"tactic", 'color': "#D5E8D4",},
                "exclude":{'type':"tactic", 'color': "#E4FFD4",},
                "strip":{'type':"tactic", 'color': "#E3FFAB",},
                "destroy":{'type':"tactic", 'color': "#C8FFBD",},

                'abstract': {
                    'type': "strategy",
                    'tactics': {
                        "summarize","group",
                    },
                },
                "group":{'type':"tactic", 'color': "#C9F0E0",},
                "summarize":{'type':"tactic", 'color': "#B8FFEA",},

                'separate': {
                    'type': "strategy",
                    'tactics': {
                        "distribute","isolate",
                    },
                },
                "isolate":{'type':"tactic", 'color': "#E6FFE9",},
                "distribute":{'type':"tactic", 'color': "#BDFFC6",},

                'hide': {
                    'type': "strategy",
                    'tactics': {
                        "restrict","mix","obfuscate","dissociate",
                    },
                },
                "restrict":{'type':"tactic", 'color': "#FFF0D6",},
                "dissociate":{'type':"tactic", 'color': "#FFD5CC",},
                "obfuscate":{'type':"tactic", 'color': "#FFD89E",},
                "mix":{'type':"tactic", 'color': "#FFD1DC",},

                'inform': {
                    'type': "strategy",
                    'tactics': {
                        "provide","notify","explain",
                    },
                },
                "provide":{'type':"tactic", 'color': "#D1EDFF",},
                "notify":{'type':"tactic", 'color': "#EDF5FF",},
                "explain":{'type':"tactic", 'color': "#C7DBFF",},

                'control': {
                    'type': "strategy",
                    'tactics': {
                        "consent","choose","update","retract",
                    },
                },
                "consent":{'type':"tactic", 'color': "#FDFFF5",},
                "choose":{'type':"tactic", 'color': "#FFFFFF",},
                "update":{'type':"tactic", 'color': "#FFFFCC",},
                "retract":{'type':"tactic", 'color': "#FFFBEB",},

                'enforce': {
                    'type': "strategy",
                    'tactics': {
                        "create","maintain","uphold",
                    },
                },
                "create":{'type':"tactic", 'color': "#FDF5FF",},
                "maintain":{'type':"tactic", 'color': "#F6E8FF",},
                "uphold":{'type':"tactic", 'color': "#E4D2F5",},

                'demonstrate': {
                    'type': "strategy",
                    'tactics': {
                        "audit","log","report",
                    },
                },
                "audit":{'type':"tactic", 'color': "#B3F2FF",},
                "log":{'type':"tactic", 'color': "#CAF0EC",},
                "report":{'type':"tactic", 'color': "#D9FFFB",},

            },
        }
    }
}

SITE_POST_PROCESSORS = {
    # 'media/js': {
    #        'hydeengine.site_post_processors.FolderFlattener' : {
    #                'remove_processed_folders': True,
    #                'pattern':"*.js"
    #        }
    #    }
}

CONTEXT = {
    'GENERATE_CLEAN_URLS': GENERATE_CLEAN_URLS
}

FILTER = {
    'include': (".htaccess",),
    'exclude': (".*","*~")
}


#Processor Configuration

#
#  Set this to the output of `which growlnotify`. If `which`  returns emtpy,
#  install growlnotify from the Extras package that comes with the Growl disk image.
#
#
GROWL = None

# path for YUICompressor, or None if you don't
# want to compress JS/CSS. Project homepage:
# http://developer.yahoo.com/yui/compressor/
#YUI_COMPRESSOR = "./lib/yuicompressor-2.4.2.jar"
YUI_COMPRESSOR = None

# path for Closure Compiler, or None if you don't
# want to compress JS/CSS. Project homepage:
# http://closure-compiler.googlecode.com/
#CLOSURE_COMPILER = "./lib/compiler.jar"
CLOSURE_COMPRILER = None

# path for HSS, which is a preprocessor for CSS-like files (*.hss)
# project page at http://ncannasse.fr/projects/hss
#HSS_PATH = "./lib/hss-1.0-osx"
HSS_PATH = None # if you don't want to use HSS

#Django settings

TEMPLATE_DIRS = (LAYOUT_DIR, CONTENT_DIR, TMP_DIR, MEDIA_DIR)

INSTALLED_APPS = (
    'hydeengine',
    'django.contrib.webdesign',
)
