[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

This pattern hides the actions taken by a user by adding fake actions
that are indistinguishable from real.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is applicable when it is not possible to avoid executing,
delaying or obfuscating the content of an action.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

When users interact with ICT systems their actions reveal a lot of
information about themselves. An option would be for users to not
perform such actions to protect their privacy. However, this is not
possible since users cannot completely avoid executing these actions
because they need to perform them to achieve a goal (e.g., search for
a word on the Internet, send an email, search for a location).

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Since the action must be accurately performed, an option to provide
privacy is to simultaneously perform other actions in such a way that
the adversary cannot distinguish real and fake (often called dummy)
actions.

<!--goals-->
To hinder the adversary’s ability to infer the user behavior, as well
as her preferences.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
This pattern entails the need for extra resources to perform the dummy
actions, both at the side of the user that must repeat the action, and
at the server side that must process several actions. Sometimes it may
degrade the quality of service since the service provider cannot
personalize services. It has been demonstrated that generating dummies
that are perfectly indistinguishable from real actions (in terms of
content, timing, size, etc...) is very difficult.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice wants to search for an abortion clinic on Google, but she does
not want to reveal her intentions of abort to an adversary that may be
eavesdropping this search (e.g., ISP provider, system administrator of
her workplace, etc).

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

The use of this pattern has been proposed to protect privacy in
location based services (the user reveals several locations to the
service provider so that her real location is hidden), anonymous
communications (the user sends fake messages to fake recipients to
hide her profile), web searches (the user searches for fake terms to
hide her real preferences).

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