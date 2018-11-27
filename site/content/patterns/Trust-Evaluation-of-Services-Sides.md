[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Transparency Label

## Context
<!-- The situations in which the pattern may apply.-->

When using a service (or product) offered by a controller, the level of trust held by users is crucial. Without sufficient trust, the users would seek alternatives or generate bad publicity. They will use a system more cautiously, regardless of whether it is necessary. In many systems this lessens the quality of service offered, not only to the user in question, but holistically.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users want to have reason to trust that a service does not undermine their personal privacy requirements. They do not want to have to take controllers, and third parties, at their word alone.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Controllers, as well as third parties, want to show that they are provably trustworthy and reliable
- Less confident entities will not make this effort alone
- Users want to verify claims which controllers and third parties make without having to do so themselves
- Users benefit from a standardised way of indicating trust, as it is easier and quicker to look into if done consistently and often

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Supply a function which informs users of the trustworthiness and reliability of services, and that of the third parties connected to those services. These qualities may be determined, and assured, through independent evaluation of given criteria.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

Information regarding a service's trustworthiness and reliability needs to be clearly indicated to the user prior to or during collection. It may therefore be brought up along with obtaining informed consent. This ensures that the user does not make misinformed or uninformed decisions, especially as this can seriously jeopardise trust.

A visual highlight which succinctly asserts this quality may also be displayed in persistent manner, or where otherwise contextually relevant.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_A trust evaluation function should be based on suitable parameters for measuring the trustworthiness of communication partners and for establishing reliable trust._

_[Trust] in a service provider can be established by monitoring and enforcing institutions, such as data protection commissioners, consumer organisations and certification bodies. Privacy seals certified by data protection commissioners or independent certifiers (e.g., the EuroPrise seal, the TRUSTe seal or the ULD Gütesiegel) therefore provide especially suitable information for establishing user trust. Such static seals can be complemented by dynamic seals conveying assurance information about the current security state of the system and its implemented privacy and security (PrimeLife) functions. Further information sources by independent trustworthy monitoring organisations that can measure the trustworthiness of services sides can be blacklists maintained by consumer organisations or privacy alert lists provided by data protection commissioners._

_[Also,] reputation metrics based on other users' [ratings] can influence user trust. Reputation systems, [for instance] in eBay, can however often be manipulated by reputation forging or poisoning. Besides, the calculated reputation values are often based on subjective ratings by non-experts, [through which privacy-friendliness may be difficult to judge]._

_A trust evaluation function should in particular follow the following design principles:_
- _Use a multi-layered structure for displaying evaluation results._
- _Make clear who is evaluated_
- _Inform the user without unnecessary warnings._
- _Use a selection of meaningful overall evaluation results.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Users will be able to better justify the trust they place in controllers who measure high levels of trustworthiness and reliability, and will know of greater risks in lower trust. A familiarity with the approach will also cause a healthy skepticism of controllers who do not participate, or have low confidence evaluations.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

Determine an appropriate metric for evaluating trustworthiness of partners of the service who will receive personal data as third parties. This can be simple, such as meeting expectations, failing them, or exceeding them. PrimeLife suggests 'poor', 'fair', and 'good', with fair evaluations having neither negative nor positive influences. Blacklists or alert lists make for a poor evaluation regardless of positive aspects.

These evaluations are shown to users prior to their related parties having consent for access. The notification is not shown too frequently, as extensive warnings may be misleading to users. While they should be aware of neutral or unevaluated parties, it may not be desired to worry them without cause. There should also be just enough information to raise awareness, allowing the user to investigate further if desired. A notification for a fair evaluation may be 'we have not found any issues with this partner' for example, with a neutral colour which matches the rest of the interface. Poor evaluations could be yellow or red (alarming colours), with good evaluations green or blue (positive colours).

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Policy Matching Display](Policy-matching-display) and [Awareness Feed](Awareness-Feed). It also implicitly _complements_ [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Color Coding](Privacy-color-coding), and [Appropriate Privacy Icons](Appropriate-Privacy-Icons).

With [Policy Matching Display](Policy-matching-display), these patterns may work together towards providing the user with information which builds trust. This will be based on both preferences matching and means for demonstrating trustworthiness. With [Awareness Feed](Awareness-Feed), this pattern keeps users informed about what risks their disclosures might face, providing feedback which can relate to and further explain met criteria.

As visual cues, [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), and [Privacy Color Coding](Privacy-color-coding) aid this pattern implicitly through [Awareness Feed](Awareness-Feed) by augmenting this pattern with quickly interpreted, visual information. This is useful for highlighting trust levels to the user.

### [Sources]
<!-- References to the original source of the pattern.-->

Additional information can be found in the original version of the pattern:
S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

This pattern is also highlighted in other works:
J. Siljee, “Privacy transparency patterns,” in EuroPLoP ’15, 2015, pp. 1–11.

O. Drozd, “privacypatterns.wu.ac.at - Privacy Patterns Catalog,” privacypatterns.wu.ac.at, 2016. [Online]. Available: http://privacypatterns.wu.ac.at:8080/catalog/. [Accessed: 25-Jan-2017].

C. Andersson, J. Camenisch, S. Crane, S. Fischer-Hübner, R. Leenes, S. Pearson, J. S. Pettersson and D. Sommer. “Trust in PRIME”. Proceedings of the 5th IEEE Int. Symposium on Signal Processing and IT, pages 18-21, 2005.

<!-- ## General Comments -->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->