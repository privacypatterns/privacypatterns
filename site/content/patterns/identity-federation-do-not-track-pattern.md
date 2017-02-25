[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

All information has been extracted from
http://blog.beejones.net/the-identity-federation-do-not-track-pattern

The Do Not Track Pattern makes sure that neither the Identity Provider
nor the Identity Broker can learn the relationship between the user
and the Service Providers the user us.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is focused on identity federation models

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

When an identity system provides identifying information about a user
and passes this to a third party service, different parties can do
correlation and derive additional information.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Include an orchestrator component, that must act in behalf and be
controlled by the user. The orchestrator makes sure that the identity
broker can’t correlate the original request from the service provider
with the assertions that are returned from the identity provider. The
correlation can only be done within the orchestrator but that’s no
issue because this acts on behalf of the user, possibly on the device
of the user.

<!--goals-->
Avoid the correlation of end user and service provider data

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
In practice, the orchestrator could run in the browser of the user as
a javascript program or as an App on his device

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--##Examples-->
<!--Motivational example to see how the pattern is applied.-->



###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Identity federations and ecosystems

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