[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Add some noise to service operation measurements, but make it cancel itself in the long-term

##Context
<!-- The situations in which the pattern may apply.-->

A service provider gets continuous measurements of a service attribute linked to a service individual.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The provision of a service may require repeated, detailed measurements of a service attribute linked to a data subject to e.g. properly bill them for the service usage, or adapt the service according to the demand load. However, these measurements may reveal further information (e.g. personal habits, etc.) when repeated over time.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

A noise value is added to the true, measured value before it is transmitted to the service provider, so as to obfuscate it. The noise abides by a previously known distribution, so that the best estimation for the result of adding several measurements can be computed, while an adversary would not be able to infer the real value of any individual measurement. Note that the noise needs not be either additive or Gaussian. In fact, these may not be useful for privacy-oriented obfuscation. Scaling noise and additive Laplacian noise have proved more useful for privacy preservation.

<!--goals-->
A service provider can get reliable measurements of service attributes to fulfil its operating requirements; however, no additional personal information can be inferred from the aggregation of several measurements coming from the same user.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
The pattern applies to any scenario where the use of a resource over time is being monitored (e.g. smart grid, cloud computing). The device providing the measurement must be trustworthy, in order to ensure that it abides by the established noise pattern.

Some information is lost due to the noise added. This loss of information may prevent the information from being exploited for other purposes. This is partly an intended consequence (e.g. avoid discovering user habits), but it may also preclude other legitimate uses.

In order for information to be useful after noise addition, the number of data points over which measurements are aggregated (i.e. the size of the aggregated user base) needs to be high; otherwise, either the confidence interval would be too broad or differential privacy could not be effectively achieved.

###[Constraints]
<!-- limitations as a consequence of applying the pattern.-->



<!--constraints and consequences-->
The pattern applies to any scenario where the use of a resource over time is being monitored (e.g. smart grid, cloud computing). The device providing the measurement must be trustworthy, in order to ensure that it abides by the established noise pattern.

Some information is lost due to the noise added. This loss of information may prevent the information from being exploited for other purposes. This is partly an intended consequence (e.g. avoid discovering user habits), but it may also preclude other legitimate uses.

In order for information to be useful after noise addition, the number of data points over which measurements are aggregated (i.e. the size of the aggregated user base) needs to be high; otherwise, either the confidence interval would be too broad or differential privacy could not be effectively achieved.

##Examples
<!--Motivational example to see how the pattern is applied.-->

An electric utility operates a smart grid network with smart meters that provide measurements of the instantaneous power consumption of each user. The utility employs that information to both adapt the power distribution in a dynamic fashion, according to user demand at each moment, and bill the each client periodically, according to his aggregated consumption over the billing period. However, this information can also be exploited to infer sensitive user information (e.g. at what time he or she leaves and comes back to home, etc.)

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

- Bohli, J.-M.; Sorge, C.; Ugus, O., "A Privacy Model for Smart Metering," Communications Workshops (ICC), 2010 IEEE International Conference on , vol., no., pp.1,5, 23-27 May 2010
- Xuebin Ren; Xinyu Yang; Jie Lin; Qingyu Yang; Wei Yu, "On Scaling Perturbation Based Privacy-Preserving Schemes in Smart Metering Systems," Computer Communications and Networks (ICCCN), 2013 22nd International Conference on , vol., no., pp.1,7, July 30 2013-Aug. 2 2013
- Mivule, K. (2013). Utilizing noise addition for data privacy, an overview. arXiv preprint arXiv:1309.3958.

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