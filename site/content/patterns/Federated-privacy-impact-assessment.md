[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

The impact of personal information in a federation is more than the
impact in the federated

##Context
<!-- The situations in which the pattern may apply.-->

Identity Management scenarios (that is, when the roles of the Identity
Provider and the Service Provider are separated).

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Identity Management solutions were introduced to decouple the
functions related to authentication, authorization, and management of
user attributes, on the one hand, and service provision on the other
hand. Federated Identity Management allows storing a data subject's
identity across different systems. All together, these form a
Federation that involves complex data flows.

Federated Management solutions can be used to improve privacy (e.g. by
allowing service providers to offer their services without knowing the
identity of their users). However, the complexity of data flows and
the possibility of collusion between different parties entail new
risks and threats regarding personal data.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

A Privacy Impact Assessment is conducted by all the members of the
federation, both individually and in conjunction, so as to define
shared privacy policies, prove they are met, and demonstrate the
suitability of the architecture, in the benefit of all the members.

<!--goals-->
Deal with privacy risks associated from the federation of different
parties in an Identity Management solution.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
The consequences depend on the results of the privacy-impact analysis.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

An Identity Provider issues pseudonyms to authenticate users at
third-party Service Providers, which can in turn check the
authenticity of these pseudonyms at the Identity Provider, without
getting to know the real user identity. However, the Identity Provider
knows all the services requested by the users, which discloses
personal information to the Identity Provider and allows it to profile
the users.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

The New Federated Privacy Impact Assessment (F-PIA). Building Privacy
and Trust-enabled Federation. Information and Privacy Commissioner of
Ontario & Liberty Alliance Project, January 2009

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