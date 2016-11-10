[TOC]


## Summary

Avoid the central collection of personal data by shifting some amount
of the processing of personal data to the user-trusted environments
(e.g. their own devices). Allow users to control the exact data that
shares with service providers
## Problem

The engineering process is biased to develop system-centric
architectures where the data is collected and processed in single
central entities, forcing users to trust them and share potentially
sensible personal data
## Context

This pattern may be used whenever the collection of personal data with
one specific and legitimate purpose still pose a relevant level of
threat to the users' privacy
## Goals

Avoid the need for trust in service providers and the collection of
personal data
## Motivating Example

The smart grid is a domain with a clear example: having smart meters
delivering hourly customers' energy consumption to the energy provider
poses a serious threat to the customers' privacy. If the only purpose
of collecting these data is to bill the customer, why cannot this
calculation be done by the customer based on pre-established tariffs?

Similar examples in other domains are "pay as your drive" insurance
policies where the insurance price is calculated based on the drivers
behaviour or electronic toll pricing
## Solution

The solution is to shift the trust relationship, meaning that instead
of having the customer trust the service provide to protect its
personal data, the service provider now haves to trust the customers'
processing.

In the smart meter example, the smart meter would receive the monthly
tariff and calculate the customer's bill which will be then sent to
the energy provider where it will be processed. The main benefit is
that at no moment the personal data has left the users trusted
environment.
## Constraints And Consequences

Depending on the type of processing (e.g calculate the bill for the
monthly energy consumption or the age from the birth date) the service
provider will require some guarantees from the processor (the end
user). This may involve the usage of Trusted Plaftorm Modules or
cryptographic algoritms (e.g. ABC4Trust)
## Known Uses

Smart meter, Privacy-enhanced attribute based credentials, pay as your
drive insurances, electronic toll pricing