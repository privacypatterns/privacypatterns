[TOC]


## Summary

Add some noise to service operation measurements, but make it cancel itself in the long-term
## Problem

The provision of a service may require repeated, detailed measurements of a service attribute linked to a data subject to e.g. properly bill them for the service usage, or adapt the service according to the demand load. However, these measurements may reveal further information (e.g. personal habits, etc.) when repeated over time.
## Context

A service provider gets continuous measurements of a service attribute linked to a service individual.
## Goals

A service provider can get reliable measurements of service attributes to fulfil its operating requirements; however, no additional personal information can be inferred from the aggregation of several measurements coming from the same user.
## Motivating Example

An electric utility operates a smart grid network with smart meters that provide measurements of the instantaneous power consumption of each user. The utility employs that information to both adapt the power distribution in a dynamic fashion, according to user demand at each moment, and bill the each client periodically, according to his aggregated consumption over the billing period. However, this information can also be exploited to infer sensitive user information (e.g. at what time he or she leaves and comes back to home, etc.)
## Solution

A noise value is added to the true, measured value before it is transmitted to the service provider, so as to obfuscate it. The noise abides by a previously known distribution, so that the best estimation for the result of adding several measurements can be computed, while an adversary would not be able to infer the real value of any individual measurement. Note that the noise needs not be either additive or Gaussian. In fact, these may not be useful for privacy-oriented obfuscation. Scaling noise and additive Laplacian noise have proved more useful for privacy preservation.
## Constraints And Consequences

The pattern applies to any scenario where the use of a resource over time is being monitored (e.g. smart grid, cloud computing). The device providing the measurement must be trustworthy, in order to ensure that it abides by the established noise pattern.

Some information is lost due to the noise added. This loss of information may prevent the information from being exploited for other purposes. This is partly an intended consequence (e.g. avoid discovering user habits), but it may also preclude other legitimate uses.

In order for information to be useful after noise addition, the number of data points over which measurements are aggregated (i.e. the size of the aggregated user base) needs to be high; otherwise, either the confidence interval would be too broad or differential privacy could not be effectively achieved.
## Known Uses

- Bohli, J.-M.; Sorge, C.; Ugus, O., "A Privacy Model for Smart Metering," Communications Workshops (ICC), 2010 IEEE International Conference on , vol., no., pp.1,5, 23-27 May 2010
- Xuebin Ren; Xinyu Yang; Jie Lin; Qingyu Yang; Wei Yu, "On Scaling Perturbation Based Privacy-Preserving Schemes in Smart Metering Systems," Computer Communications and Networks (ICCCN), 2013 22nd International Conference on , vol., no., pp.1,7, July 30 2013-Aug. 2 2013
- Mivule, K. (2013). Utilizing noise addition for data privacy, an overview. arXiv preprint arXiv:1309.3958.