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

All of the patterns and principle definitions live in the [patterns repository](https://github.com/privacypatterns/patterns). To make any changes or additions to the patterns on privacypatterns.org, you must modify the files there.

Prereqs: You will need to be signed in to Github. If you need a Github account, [sign up for one here.](https://github.com/signup/free)

* You can use github to fork and edit Patterns and Principles and create a PR on this repo. 

* OR you could use the visual editing steps below:

1. Go to the list of [Patterns](https://github.com/privacypatterns/patterns/tree/master/patterns) or [Principles](https://github.com/privacypatterns/patterns/tree/master/principles)

2. To create a new Pattern or Principle click "Create new file".

3. To edit Pattern or Principle, click on the name of the file you would like to edit.  Click the "Edit Page" button at the top right the page (note: pages must be Markdown format).

4. Make your modifications.

5. When you are done, write a short message explaining the changes you made and why. Then select "Create new branch..." and click "Propose new change"

Development Instructions
----------------------

1. To setup locally. This will clone [patterns](https://github.com/privacypatterns/patterns) and render the latest files locally.

        make build

3. To test changes

    Edit files in `./patterns`. You can cd `./patterns` and use `git` commands to update the [patterns](https://github.com/privacypatterns/patterns) repo.

        make static

    The resulting files are located in ./site/deploy.

2. To view the changes on the site locally. This requires a [docker installation](https://docs.docker.com/engine/installation/)

        make run

Updating privacypatterns.org
----------------------------

For now the process for this is maintained by [@mohit](https://github.com/mohit). Please create a PR with your changes and the site will be deployed after the review.
