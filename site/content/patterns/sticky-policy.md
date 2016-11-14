[TOC]


## Summary

Machine-readable policies are sticked to data to define allowed usage
and obligations as it travels across multiple parties, enabling users
to improve control over their personal information.
## Problem

Data may be accessed or handled by multiple parties that share data
with an organisation in ways that may not be approved by the data
subject.
## Context

Multiple parties are aware of and act according to a certain policy
when privacy-sensitive data is passed along the multiple successive
parties storing, processing and sharing that data.
## Goals

The goal of the pattern is to enable users to allow users to control
access to their personal information.
## Motivating Example

When data is shared by an organisation they can use privacy preserving
policy to enforce respecting user privacy by third party organisations
that use, process and store such data. For example, a hospital may
share data with third party organisations requiring adhering to
specific privacy policies associated with the data.
## Solution

Service providers use an obligation management system. Obligation
management handles information lifecycle management based on
individual preferences and organisational policies. The obligation
management system manipulates data over time, ensuring data
minimisation, deletion and notiﬁcations to data subjects.
## Constraints And Consequences

Beneﬁts: Policies can be propagated throughout the cloud to trusted
organisations, strong enforcement of the policies, traceability.
Liabilities: Scalability: policies increase size of data. Practicality
may not be compatible with existing systems. It may be diﬃcult to
update the policy after sharing of the data and existence of multiple
copies of data. It requires ensuring data is handled according to
policy e.g. using auditing.
## Known Uses

Examples of policy speciﬁcation languages include EPAL, OASIS XACML
and W3C P3P. Tracing of services can use Identiﬁer-Based Encryption
and trusted technologies. An alternative approach using Merkle hash
tree has been proposed by Pöhls (2008). A Platform for Enterprise
Privacy Practices (E-P3P) (2003) distinguishes the enterprise-speciﬁc
deployment policy from the privacy policy and facilitates the
privacy-enabled management and exchange of customer data. References:
Pearson, S., Sander, T. and Sharma, R., Privacy Management for Global
Organisations, Data Privacy Management and Autonomous Spontaneous
Security, LNCS 5939, Springer, pp. 9-17., 2009 Phöls, H.G., Veriﬁable
and Revocable Expression of Consent to Processing of Aggregated
Personal Data. ICICS, pp.279-293, 2008 Karjoth, G., Schunter, M., &
Waidner, M., Platform for enterprise privacy practices:
Privacy-enabled management of customer data. In Privacy Enhancing
Technologies, pp. 69-84, Springer Berlin Heidelberg, 2003