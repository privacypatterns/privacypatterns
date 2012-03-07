The Privacy Patterns Project
----------------------------

Privacy represents a broad variety of concerns — subjective, contextual, hard-to-define — that real people have about the flows of personal information. Location-based services provide a key example: a growing field that uses potentially sensitive data, where adoption has been held back by privacy concerns.

Translating these concerns (as well as corporate and legal liability) into technical artifacts — a process known generally as "privacy-by-design" — has proven difficult. How can we best convert lawyer speak into engineering speak? How can problems be elegantly anticipated early in the development process?

Drawing inspiration from Christopher Alexander and the success of software design patterns in improving communication about tried-and-true practices, we hope privacy patterns will:

 * standardize language for privacy-preserving technologies
 * document common solutions to privacy problems
 * help LBS designers identify and address privacy concerns

We're currently compiling a first draft of some patterns to get things started, but our goal is for this to be a living document constructed by the community of engineers, designers, lawyers and regulators involved in this topic.

Contribution Instructions
-------------------------

All of the patterns and principle definitions live in the [Wiki section](https://github.com/m0hit/privacypatterns/wiki) of the code repository. To make any changes or additions to the content of privacypatterns.org, you must modify the files in the Wiki.

Prereqs: You will need to be signed in to Github. If you need a Github account, [sign up for one here.](https://github.com/signup/free)

1. Go to the list of [Patterns](https://github.com/m0hit/privacypatterns/wiki/Patterns) or [Principles](https://github.com/m0hit/privacypatterns/wiki/Principles), which live in the [privacypatterns Wiki](https://github.com/m0hit/privacypatterns/wiki).

2. Click the name of the Pattern or Principle you would like to edit.

3. Click the "Edit Page" button at the top of the page.

4. Make your modifications.

5. When you are done, write a short message explaining the changes you made and why. Then, click "Save".

Developer Instructions
----------------------

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
