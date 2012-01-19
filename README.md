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

4. To deploy to the live site (must be merged with the privacypatterns.org repo first, which is what the second command does):

        git remote add deploy git@privacypatterns.org:~/privacypatternsweb.git
        
        git pull deploy master

        git push deploy master

Contributing
------------

1. Clone the repository on GitHub.

2. Click on the Wiki link after cloning (This may take a minute for GitHub to create. They'll email you when it's done).

3. Click patterns. Then click on the pattern you want to edit.

4. Click the Edit button.

5. Make your changes. Click Save.

6. Submit a pull request.


        