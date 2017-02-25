[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Hide the identity by using a pseudonym and ensure a pseudonymous
identity that can not be linked with a real identity during online
interactions.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern can be used for systems in which users are identified by
public identities.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Many kinds of sensitive informations are released through web
interactions, email, data sharing or location-based systems, which can
contain the name of a user or header information in packets. Another
problem could be to interact anonymously in a forum. However too much
interaction in a forum with an anonymous identity can be dangerous in
the sense that the relation between original identity and a
pseudonymous identity can be exposed.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Initiate a random pseudonym, that can not be related to the original,
so that the identity is hidden. Furthermore a pseudonym depends on
concealment, so the pseudonym allocation needs protection.

<!--goals-->
Hide the identity of the participants.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
The real identity of a user is hidden. In certain scenarios there is a
need for additional space to store the pseudonym-identity mapping.
Extensive Usage of the same pseudonym can weaken it.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Assuming some students are writing an exam and they have to fill out a
form about their identity, where there is an optional field for a
chosen pseudonym. This way the result can be released under the chosen
pseudonyms and the identity of each student is hidden. But by being
observant, some students might be able to figure out which identity
belongs to which pseudonym and so the confidentiality of the identity
is compromised.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Anonymizer are well-known tools for anonymous web interactions. They
work for example by using a proxy between a request sender and a
recipient to strip header information like HTTP_USER_AGENT in packet
headers because they contain metadata about packet senders. The
Mixmaster is an anonymous remailer that hides the sender and recipient
identity by stripping its name and assigning a pseudonym. Some data
sharing systems with a privacy-preserving focus make use of pseudonyms
so that identifying information such as names and social security
numbers are hidden. For example various electronic healthcare systems
are using pseudonyms for the storage of e-health records.

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