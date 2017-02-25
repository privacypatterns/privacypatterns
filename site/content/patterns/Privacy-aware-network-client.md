[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

A privacy policy which is hard to understand is in an automated way
converted into a more easy to read format.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is limited to the web browsing domain.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Many websites have privacy policies which are hard to understand for
the general audience.

Many people enter websites with different intentions like shopping,
research, etc. At the same time those responsible collect, use and
release information about a user by explaining it through statements
called privacy policies. These privacy policies are not easy to read
and to understand.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

The problem can be solved by designing and implementing a privacy
proxy that can parse and interpret policies. Afterwards it translates
the policies into a human-readable format to present them in a
user-friendly way.

<!--goals-->
Expand the awareness of the user towards privacy policies of a
website.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
The user's awareness of the privacy policy rises so that more informed
decisions can be made. The proxy is able to automatically detect
changes of the privacy policy. A separate secure connection is needed
for the proxy for every access to an area which is secured by a
privacy policy. Policy constraints need to allocate local storage
in the client. An attack on this could lead the user to decisions
which he would otherwise not do. If there are any breaches of
privacy it can be blamed on the client if he did use a
privacy-aware client for a particular access.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice uses several web services but is not aware of the their privacy
policies. Even when she reads the policies, she is still not aware of
the actual implications of the legal description. In the absence of
other solutions, she does not read the policies and does not
understand the ramifications.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

JRC P3P Proxy Version 2.0 is a P3P user agent acting like an
intermediary. Depending on the specified privacy preferences of a
user, it controls the access to web servers. Another known P3P user
agent is AT&T Privacy Bird. Privacy Bird is a tool warning users if
privacy policies of visited websites are not matching with their
individual privacy preferences.

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