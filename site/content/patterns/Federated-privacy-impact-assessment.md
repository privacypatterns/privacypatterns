[TOC]


## Summary

The impact of personal information in a federation is more than the
impact in the federated
## Problem

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
## Context

Identity Management scenarios (that is, when the roles of the Identity
Provider and the Service Provider are separated).
## Goals

Deal with privacy risks associated from the federation of different
parties in an Identity Management solution.
## Motivating Example

An Identity Provider issues pseudonyms to authenticate users at
third-party Service Providers, which can in turn check the
authenticity of these pseudonyms at the Identity Provider, without
getting to know the real user identity. However, the Identity Provider
knows all the services requested by the users, which discloses
personal information to the Identity Provider and allows it to profile
the users.
## Solution

A Privacy Impact Assessment is conducted by all the members of the
federation, both individually and in conjunction, so as to define
shared privacy policies, prove they are met, and demonstrate the
suitability of the architecture, in the benefit of all the members.
## Constraints And Consequences

The consequences depend on the results of the privacy-impact analysis.
## Known Uses

The New Federated Privacy Impact Assessment (F-PIA). Building Privacy
and Trust-enabled Federation. Information and Privacy Commissioner of
Ontario & Liberty Alliance Project, January 2009