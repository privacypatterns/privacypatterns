[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Aggregate usage records at the user side in a trustworthy manner.

##Context
<!-- The situations in which the pattern may apply.-->

A service provider gets continuous measurements of a service attribute linked to a service individual. Applicable service tariffs may vary over time.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The provision of a service may require repeated, detailed measurements of a service attribute linked to a data subject to e.g. properly bill them for the service usage. However, these measurements may reveal further information (e.g. personal habits, etc.) when repeated over time.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Host a Privacy Plugin at a consumer-trusted device, in between the metering and the billing systems. and the service provider in charge of billing for the service usage. This privacy plugin, under the consumer’s control, computes the aggregated invoice and sends it to the service provider (or to its billing subsystem), which does not need any fine-grained consumption records anymore. Cryptographic techniques (homomorphic commitments, zero-knowledge proofs of knowledge, digital signatures) are used to ensure trustworthiness of the generated invoices without requiring tamper-proof hardware.

<!--goals-->
A service provider can get a trustworthy measurement of service usage along a period to issue a bill for the service usage; however, the detailed consumption for finer intervals cannot be obtained.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
The service provider does not need anymore to access detailed consumption data in order to issue reliable bills.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

An electric utility operates a smart grid network with smart meters that provide measurements of the instantaneous power consumption of each user. Depending on the power demand, dynamic tariffs are applied. The utility employs that information to bill each client periodically, according to his aggregated consumption over the billing period and the respective tariffs at each moment. However, this information can also be exploited to infer sensitive user information (e.g. at what time he or she leaves and comes back to home, etc.)

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

- Alfredo Rial and George Danezis. 2011. Privacy-preserving smart metering. In Proceedings of the 10th annual ACM workshop on Privacy in the electronic society (WPES '11). ACM, New York, NY, USA, 49-60.
- Rial, A., & Danezis, G. (2011, October). Privacy-preserving smart metering. In Proceedings of the 10th annual ACM workshop on Privacy in the electronic society (pp. 49-60). ACM.

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