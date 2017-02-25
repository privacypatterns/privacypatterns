[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

The pattern allows obligations relating to data sharing, storing and
processing to be transferred and managed when the data is shared
between multiple parties.

##Context
<!-- The situations in which the pattern may apply.-->

The developer aims to make sure that multiple parties are aware of and
comply with required user/organisational policies as personal and
sensitive data are successively shared between a series of parties who
store or process that data.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Data may be accessed or handled by multiple parties that share data
with an organisation in ways that may not be approved by the data
subject.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Service providers use an obligation management system. Obligation
management handles information lifecycle management based on
individual preferences and organisational policies. The obligation
management system manipulates data over time, ensuring data
minimization, deletion and notifications to data subjects.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Benefits: privacy preferences and policies are communicated and adhered
to among organisations sharing data. Liabilities: additional effort to
set obligations.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

A service provider subcontracts services, but requires that the data
to be deleted after a certain time and that the service provider
requires to be notified if there is further subcontracting.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Pretschner et al (2009) provide a framework for evaluating whether a
supplier is meeting customer data protection obligations in
distributed systems. Researchers at IBM propose Enterprise Privacy
Authorization Language (EPAL) (2004) to govern data handling practices
according to fine-grained access control. Casassa Mont (2004) discusses
various important aspects and technical approaches to deal with
privacy obligations. Pretschner, A., Schtz, F., Schaefer, C., and
Walter, T.: Policy Evolution in Distributed Usage Control. Electron.
Notes Theor. Comput. Sci. 244, 2009 IBM, The Enterprise Privacy
Authorization Language (EPAL), EPAL specification,
http://www.zurich.ibm.com/security/enterprise-privacy/epal/, 2004
Mont, M. C., Dealing with Privacy Obligations, Important Aspects and
Technical Approaches, TrustBus, 2004

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