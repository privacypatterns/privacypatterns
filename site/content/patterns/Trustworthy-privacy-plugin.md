[TOC]


## Summary

Aggregate usage records at the user side in a trustworthy manner.
## Problem

The provision of a service may require repeated, detailed measurements of a service attribute linked to a data subject to e.g. properly bill them for the service usage. However, these measurements may reveal further information (e.g. personal habits, etc.) when repeated over time.
## Context

A service provider gets continuous measurements of a service attribute linked to a service individual. Applicable service tariffs may vary over time.
## Goals

A service provider can get a trustworthy measurement of service usage along a period to issue a bill for the service usage; however, the detailed consumption for finer intervals cannot be obtained.
## Motivating Example

An electric utility operates a smart grid network with smart meters that provide measurements of the instantaneous power consumption of each user. Depending on the power demand, dynamic tariffs are applied. The utility employs that information to bill each client periodically, according to his aggregated consumption over the billing period and the respective tariffs at each moment. However, this information can also be exploited to infer sensitive user information (e.g. at what time he or she leaves and comes back to home, etc.)
## Solution

Host a Privacy Plugin at a consumer-trusted device, in between the metering and the billing systems. and the service provider in charge of billing for the service usage. This privacy plugin, under the consumer’s control, computes the aggregated invoice and sends it to the service provider (or to its billing subsystem), which does not need any fine-grained consumption records anymore. Cryptographic techniques (homomorphic commitments, zero-knowledge proofs of knowledge, digital signatures) are used to ensure trustworthiness of the generated invoices without requiring tamper-proof hardware.
## Constraints And Consequences

The service provider does not need anymore to access detailed consumption data in order to issue reliable bills.
## Known Uses

- Alfredo Rial and George Danezis. 2011. Privacy-preserving smart metering. In Proceedings of the 10th annual ACM workshop on Privacy in the electronic society (WPES '11). ACM, New York, NY, USA, 49-60.
- Rial, A., & Danezis, G. (2011, October). Privacy-preserving smart metering. In Proceedings of the 10th annual ACM workshop on Privacy in the electronic society (pp. 49-60). ACM.