[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Use encryption in such a way that the service provider cannot decrypt the user's information because the user manages the keys.

<!--intent-->
Enable encryption, with user-managed encryption keys, to protect the confidentiality of personal information that may be transferred or stored by an untrusted 3rd party.

Supports [user control](User-control), [cloud computing](Cloud Computing) and [mobile](Mobile).

##Context
<!-- The situations in which the pattern may apply.-->

User wants to store or transfer their personal data through an online service and they want to protect their privacy, and specifically the confidentiality of their personal information. Risks of unauthorized access may include the online service provider itself, or third parties such as its partners for example for backup, or government surveillance depending on the geographies the data is stored in or transferred through. 

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How can a user store or transfer their personal information through an online service while ensuring their privacy and specifically preventing unauthorized access to their personal information?

<!--forces/concerns-->
Requiring the user to do encryption key management may annoy or confuse them and they may revert to either no encryption, or encryption with the online service provider managing the encryption key (affording no protection from the specific online service provider managing the key), picking an encryption key that is weak, reused, written down and so forth. 

Some metadata may need to remain unencrypted to support the online service provider or 3rd party functions, for example file names for cloud storage, or routing information for transfer applications, exposing the metadata to risks of unauthorized access, server side indexing for searching, or de-duplication. 

If the service provider has written the client side software that does the client side encryption with a user-managed encryption key, there can be additional concerns regarding whether the client software is secure or tampered with in ways that can compromise privacy.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Encryption of the personal information of the user prior to storing it with, or transferring it through an online service. In this solution the user shall generate a strong encryption key and manage it themselves, specifically keeping it private and unknown to the untrusted online service or 3rd parties.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



<!--##Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

* [Spider Oak](https://spideroak.com/): online backup, sync, sharing enabling user managed personal information in zero knowledge privacy environment.
* [Least Authority](https://leastauthority.com/): secure off-site backup system with client side encryption.
* [LastPass](https://lastpass.com/): encrypted credentials and personal information database with user managed encryption keys.

[Some](http://zeroknowledgeprivacy.org/) have used the term "zero-knowledge" to describe this pattern; however, "zero-knowledge proof" is a cryptographic term with a [distinct meaning](https://en.wikipedia.org/wiki/Zero-knowledge_proof).

<!--###[Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



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