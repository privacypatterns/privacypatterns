[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

In a social networking site a user gets direct visual cues which
privacy settings apply on which shared elements.

##Context
<!-- The situations in which the pattern may apply.-->

The pattern can be used in applications where users share and publish
personal data and contents, but can control their visibility using
privacy settings. This includes but is not limited to social
networking sites.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Privacy settings and the actual effect of these settings on shared
content and data is often not obvious for the user. Not having the
active settings constantly in mind might lead to non-optimal privacy
experiences when the perceived privacy settings differ from the actual
settings.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

The results of privacy settings such as visibility are divided into
different levels. A distinct color is assigned to each of these
levels. Every time the user is performing an action where privacy
settings come into play, the color is used as an indication of the
privacy settings currently in effect. The choice of colors should take
into account prevalent color meanings, like usage of the color red for
warning situations. If privacy settings cannot be grouped into
distinct levels, a gradient between different colors could also be
used.

<!--goals-->
Users receive direct visual cues on the consequences of their privacy
settings currently in effect. In order to be more clear about their
privacy settings.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Users will directly see the outcome of their privacy settings. The
danger of unwanted actions is decreased, as users will permanently
receive visual cues. On the other hand a reduction of complex settings
to a few colors may lead to an oversimplification which would render
the whole pattern useless. Visual cues must be integrated into the
site design but must still be placed prominently enough to be
noticeable. Cultural aspects for the different meanings of colors
should be taken into account. The same color may not be recognized as
a warning label in different cultures.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice uses a social network and shares personal stories only with her
friends while she shares mundane content publicly. Hence she always
has to change the privacy settings of her posts in order to adjust the
visibility of the posts. One day she forgets to change the setting and
does not realize that she actually shared a precarious story with her
boss.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

A color coding similar to traffic lights is implemented in many modern
web browsers for HTTPS connections. A green background indicates a
valid certificate while a red background and a warning label shows
that there are problems when validating a certificate. [Facebook
Privacy Watcher](http://www.daniel-puscher.de/fpw/) enhances the
Facebook website by color-coding shared content and indicating its
visibility. Posts with green background are public, yellow indicates
visibility for friends only and red content is only visible to the
user. Blue background is used for custom audiences such as groups.

<!--##See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



<!--###[Related Patterns]-->
<!-- Supporting and conflicting patterns-->



<!--###[Sources]-->
<!-- References to the original source of the pattern.-->



<!--##General Comments-->
<!-- Separate discussion on the pattern.-->



<!--##Tags-->
<!-- User definable descriptors for additional correlation.-->