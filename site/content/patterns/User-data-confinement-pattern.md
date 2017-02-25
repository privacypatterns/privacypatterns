[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Avoid the central collection of personal data by shifting some amount
of the processing of personal data to the user-trusted environments
(e.g. their own devices). Allow users to control the exact data that
shares with service providers

##Context
<!-- The situations in which the pattern may apply.-->

This pattern may be used whenever the collection of personal data with
one specific and legitimate purpose still pose a relevant level of
threat to the users' privacy

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The engineering process is biased to develop system-centric
architectures where the data is collected and processed in single
central entities, forcing users to trust them and share potentially
sensible personal data

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

The solution is to shift the trust relationship, meaning that instead
of having the customer trust the service provide to protect its
personal data, the service provider now haves to trust the customers'
processing.

In the smart meter example, the smart meter would receive the monthly
tariff and calculate the customer's bill which will be then sent to
the energy provider where it will be processed. The main benefit is
that at no moment the personal data has left the users trusted
environment.

<!--goals-->
Avoid the need for trust in service providers and the collection of
personal data

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Depending on the type of processing (e.g calculate the bill for the
monthly energy consumption or the age from the birth date) the service
provider will require some guarantees from the processor (the end
user). This may involve the usage of Trusted Platform Modules or
cryptographic algorithms (e.g. ABC4Trust)

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

The smart grid is a domain with a clear example: having smart meters
delivering hourly customers' energy consumption to the energy provider
poses a serious threat to the customers' privacy. If the only purpose
of collecting these data is to bill the customer, why cannot this
calculation be done by the customer based on pre-established tariffs?

Similar examples in other domains are "pay as your drive" insurance
policies where the insurance price is calculated based on the drivers
behaviour or electronic toll pricing

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Smart meter, Privacy-enhanced attribute based credentials, pay as your
drive insurances, electronic toll pricing

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