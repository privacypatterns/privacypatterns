[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Subjects keep control on their personal data that are stored on a
personal device.

##Context
<!-- The situations in which the pattern may apply.-->

The pattern is applicable to any data produced by the data subject (or
originally under his control) as opposed to data about him produced by
third parties.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Data subjects actually lose control over their data when they are
stored on a server operated by a third party.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

A solution consists in combining a central server and secure personal
tokens. Personal tokens, which can take the form of USB keys, embed a
database system, a local web server and a certificate for their
authentication by the central server. Data subjects can decide on the
status of their data and, depending on their level of sensitivity,
choose to record them exclusively on their personal token or to have
them replicated on the central server. Replication on the central
server is useful to enhance sustainability and to allow designated
third parties (e.g. health professionals) to get access to the data.

<!--goals-->
Enhance the control of the subjects on their personal data.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Data subjects need to be equipped with a personal data store.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Patients want to keep control over their health data but also to grant
specific access to some health professionals.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

It has even been deployed for certain types of services, in
particular, in the health sector.

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