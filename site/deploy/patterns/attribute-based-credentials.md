[TOC]

## Summary

Attribute Based Credentials (ABC) are a form of authentication mechanism that allows to flexibly and selectively authenticate different attributes about an entity without revealing additional information about the entity (zero-knowledge property).
## Problem

Authentication of attributes classically requires full and unique authentication of an entity. For example, attributes (like age) could be put into a certificate together with name of the user, email address, public key, and other data about that entity. To corroborate an attribute (for example, that the user is an adult) the certificate has to be presented and all information have to be revealed. This is not considered a privacy-preserving solution.
Context 1

ABC can be used in a variety of systems including Internet and smart cards.
## Goals

To allow a user to selectively prove specific attributes like age > 18 to a verifying party without revealing any additional information.
## Motivating Example

You want to issue an ID card that holds a users birthdate bd and can be used to prove that the card holder is old enough to view age-restricted movies in a cinema. Depending on the rating of the movie (minimum age x), the card holder can run a proof that:

"today - bd > x"

Multiple uses of the card at the same cinema should not be linkable.
## Solution

There are multiple schemes to realize ABCs and implementations are also available. They typically all include a managing entity that entitles issuers to issue credentials to entities that could then act as provers of certain facts about the credentials towards verifiers.

A formal model can be found here.
## Constraints And Consequences

ABC schemes require substantial compute power or optimization, so implementation may not be straightforward. Some projects like IRMA developed at Radboud University Nijmegen have shown that even resource restricted devices like smartcards can implement ABCs.
## Known Uses

The most popular implementations include:

- IBM's IDEMIX developed as part of the PRIME/PRIMELIFE project.
- Microsoft's U-Prove.
- Radboud University Nijmegen's IRMA project.