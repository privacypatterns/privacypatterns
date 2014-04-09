[TOC]

##Intent##
Enable encryption, with user-managed encryption keys, to protect the confidentiality of personal information that may be transferred or stored by an untrusted 3rd party.

Supports [user control](User-control), [cloud computing](Cloud Computing) and [mobile](Mobile).

##Context##
User wants to store or transfer their personal data through an online service and they want to protect their privacy, and specifically the confidentiality of their personal information. Risks of unauthorized access may include the online service provider itself, or third parties such as its partners for example for backup, or government surveillance depending on the geographies the data is stored in or transferred through. 

##Problem##
How can a user store or transfer their personal information through an online service while ensuring their privacy and specifically preventing unauthorized access to their personal information?

##Solution##
Encryption of the personal information of the user prior to storing it with, or transferring it through an online service. In this solution the user shall generate a strong encryption key and manage it themselves, specifically keeping it private and unknown to the untrusted online service or 3rd parties.

###Examples###

* [Spider Oak](https://spideroak.com/): online backup, sync, sharing enabling user managed personal information in zero knowledge privacy environment.
* [Least Authority](https://leastauthority.com/): secure offsite backup system with client side encryption.
* [LastPass](https://lastpass.com/): encrypted credentials and personal information database with user managed encryption keys.

[Some](http://zeroknowledgeprivacy.org/) have used the term "zero-knowledge" to describe this pattern; however, "zero-knowledge proof" is a cryptographic term with a [distinct meaning](https://en.wikipedia.org/wiki/Zero-knowledge_proof).

##Forces/Concerns##

Requiring the user to do encryption key management may annoy or confuse them and they may revert to either no encryption, or encryption with the online service provider managing the encryption key (affording no protection from the specific online service provider managing the key), picking an encryption key that is weak, reused, written down and so forth. 

Some metadata may need to remain unencrypted to support the online service provider or 3rd party functions, for example file names for cloud storage, or routing information for transfer applications, exposing the metadata to risks of unauthorized access, server side indexing for searching, or de-duplication. 

If the service provider has written the client side software that does the client side encryption with a user-managed encryption key, there can be additional concerns regarding whether the client software is secure or tampered with in ways that can compromise privacy.