[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Attribute Based Credentials (ABC) are a form of authentication mechanism that allows to flexibly and selectively authenticate different attributes about an entity without revealing additional information about the entity (zero-knowledge property).

##Context
<!-- The situations in which the pattern may apply.-->

ABC can be used in a variety of systems including Internet and smart cards.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Authentication of attributes classically requires full and unique authentication of an entity. For example, attributes (like age) could be put into a certificate together with name of the user, email address, public key, and other data about that entity. To corroborate an attribute (for example, that the user is an adult) the certificate has to be presented and all information have to be revealed. This is not considered a privacy-preserving solution.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

There are multiple schemes to realize ABCs and implementations are also available. They typically all include a managing entity that entitles issuers to issue credentials to entities that could then act as provers of certain facts about the credentials towards verifiers.

A formal model can be found here.

<!--goals-->
To allow a user to selectively prove specific attributes like age > 18 to a verifying party without revealing any additional information.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
ABC schemes require substantial compute power or optimization, so implementation may not be straightforward. Some projects like IRMA developed at Radboud University Nijmegen have shown that even resource restricted devices like smartcards can implement ABCs.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

You want to issue an ID card that holds a users birthdate bd and can be used to prove that the card holder is old enough to view age-restricted movies in a cinema. Depending on the rating of the movie (minimum age x), the card holder can run a proof that:

"today - bd > x"

Multiple uses of the card at the same cinema should not be linkable.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

The most popular implementations include:

- IBM's IDEMIX developed as part of the PRIME/PRIMELIFE project.
- Microsoft's U-Prove.
- Radboud University Nijmegen's IRMA project.

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