The Privacy Patterns Project
----------------------------

Privacy represents a broad variety of concerns — subjective, contextual, hard-to-define — that real people have about the flows of personal information. Location-based services provide a key example: a growing field that uses potentially sensitive data, where adoption has been held back by privacy concerns.

Translating these concerns (as well as corporate and legal liability) into technical artifacts — a process known generally as "privacy-by-design" — has proven difficult. How can we best convert lawyer speak into engineering speak? How can problems be elegantly anticipated early in the development process?

Drawing inspiration from Christopher Alexander and the success of software design patterns in improving communication about tried-and-true practices, we hope privacy patterns will:

 * standardize language for privacy-preserving technologies
 * document common solutions to privacy problems
 * help LBS designers identify and address privacy concerns

We're currently compiling a first draft of some patterns to get things started, but our goal is for this to be a living document constructed by the community of engineers, designers, lawyers and regulators involved in this topic.


Instructions
------------

1. To sync the contents of the Hyde submodule in your local copy of the repository:

        git submodule init

        git submodule update

3. To create HTML templates from Gollum wiki markdown files:

        python markdown_to_hyde.py -s [path/to/wiki/patterns] -d [path/to/site/contents/patterns]

    Default configuration assumes that the privacypatterns.wiki repository is a sibling to the privacypatterns repo, in which the markdown_to_hyde.py script lives.

2. To generate the static HTML files using Hyde:

        python hyde.py -g -s path/to/site

    The resulting files are located in path/to/site/deploy.

4. To deploy to the live site (must be merged with the repo on the privacypatterns.org server first, which is what the "pull" command does. There is no need to generate the site before pushing to the server, the server will regenerate it):

        git remote add deploy git@privacypatterns.org:~/privacypatternsweb.git
        
        git pull deploy master

        git push deploy master

Contributing via GitHub
-----------------------

All of the patterns and principle definitions live in the [Wiki section](https://github.com/m0hit/privacypatterns/wiki) of the code repository. To make any changes or additions to the content of privacypatterns.org, you must modify the files in the Wiki.

Prereqs: You will need a Github account. [Sign up for one here.](https://github.com/signup/free)

1. Fork the repository on GitHub: [https://github.com/m0hit/privacypatterns/fork](https://github.com/m0hit/privacypatterns/fork)

2. Click on the Wiki link after cloning. Initially, it will appear empty. Github must fork the Wiki repo from the main branch, which may take a minute to create. Github will email you when it's done. After it's cloned click on the "Wiki" link again.

3. Click on the "Patterns" or "Principles" link on the root wiki page (depending on what you want to change). Then click on the name of the pattern or principle you want to edit.

4. Click the "Edit" button at the top of the page.

5. Make your changes, then click Save (and enter a message documenting what you changed and why).

6. Submit a pull request. If you require assistance, [read this Github help page.](http://help.github.com/send-pull-requests/)