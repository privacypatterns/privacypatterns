[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

This pattern avoids the tracking of visitors of websites via cookies.
It does this by deleting them at regular intervals or by disabling
cookies completely.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is applicable when personal identifiable information is
tracked through software tools, protocols or mechanisms such as
cookies and the like.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

With every single interaction in the web you leave footmarks and clues
about yourself. Cookies for example enable webservers to gather
information about web users which therefore affects their privacy and
anonymity. Web service providers trace user behavior, which can lead
to user profiling. Also providers can sell the gathered data about
users visiting their pages to other companies.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Restricting usage of cookies on the client side by deleting cookies on
a regular basis e.g. at every start-up of the operating system or
enabling them case-by-case by deciding if the visited website is
trustworthy or not and by accepting a cookie only for the current
session. At the highest level of privacy protection cookies are
disabled, but as a consequence web services are restricted. Another
solution could be that cookies are exchanged between clients, so that
sophisticated user profiles emerge.

<!--goals-->
Restricting a website to not be able to track any of the user's
personal identifiable informations.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
With cookies disabled there is no access to sites that require enabled
cookies for logging in. Other tracking mechanisms for user
fingerprinting may still work even when cookies are disabled.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice wants to buy shoes and she wants to shop online. She heads to an
online shop and searches for shoes but can’t decide which ones she
wants, so she buys neither of them. The next day she finds a couple of
emails in her inbox, giving her suggestions for other shoes and
alerting her that the viewed shoes are now on sale.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Junkbuster is an old proxy filtering between web server and browser to
block ads and cookies, but it is no longer maintained. A program named
CookieCooker (http://www.cookiecooker.de/) provides protection for
monitored user behaviour and interests by exchanging cookies with
other users or using a random selection of identities. Unfortunately
this project also seems to be not maintained anymore. There is also
the Firefox Add-on Self-Destructing Cookies which deletes cookies of
tabs as soon as they are closed.

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