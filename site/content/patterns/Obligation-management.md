[TOC]


## Summary

The pattern allows obligations relating to data sharing, storing and
processing to be transferred and managed when the data is shared
between multiple parties.
## Problem

Data may be accessed or handled by multiple parties that share data
with an organisation in ways that may not be approved by the data
subject.
## Context

The developer aims to make sure that multiple parties are aware of and
comply with required user/organisational policies as personal and
sensitive data are successively shared between a series of parties who
store or process that data.
## Motivating Example

A service provider subcontracts services, but requires that the data
to be deleted after a certain time and that the service provider
requires to be notiﬁed if there is further subcontracting.
## Solution

Service providers use an obligation management system. Obligation
management handles information lifecycle management based on
individual preferences and organisational policies. The obligation
management system manipulates data over time, ensuring data
minimisation, deletion and notiﬁcations to data subjects.
## Constraints And Consequences

Beneﬁts: privacy preferences and policies are communicated and adhered
to among organisations sharing data. Liabilities: additional effort to
set obligations.
## Known Uses

Pretschner et al (2009) provide a framework for evaluating whether a
supplier is meeting customer data protection obligations in
distributed systems. Researchers at IBM propose Enterprise Privacy
Authorization Language (EPAL) (2004) to govern data handling practices
according to ﬁne-grained access control. Casassa Mont (2004) discusses
various important aspects and technical approaches to deal with
privacy obligations. Pretschner, A., Schtz, F., Schaefer, C., and
Walter, T.: Policy Evolution in Distributed Usage Control. Electron.
Notes Theor. Comput. Sci. 244, 2009 IBM, The Enterprise Privacy
Authorization Language (EPAL), EPAL speciﬁcation,
http://www.zurich.ibm.com/security/enterprise-privacy/epal/, 2004
Mont, M. C., Dealing with Privacy Obligations, Important Aspects and
Technical Approaches, TrustBus, 2004