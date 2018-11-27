[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers process mass amounts of user data in order to provide enhanced services (or products). Aggregating this data with other sources unlocks new insights which could not be determined alone. This kind of aggregation is distinct from the notion of abstracting information away from personal data, effectively making it less sensitive. Instead this may turn seemingly harmless data into identifying, intrusive, or inferred information, some of which not even the user is aware of. This makes aggregation very useful for marketing, as well as other more usability-centric features, but places a heavier burden on users to disclose with care.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Poor awareness of data aggregation capabilities can lead to unintentionally revealing information being disclosed. Processing this personal data goes against the principles of data protection.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to inadvertently disclose information which may become sensitive or identifying
- Users are less familiar with the risks of information only becoming invasive sometimes long after disclosure
- Controllers do not want users to unwittingly consent to disclosures they later regret due to poor awareness
- Controllers want users to be cognizant of the sensitivity and contextual applicability of their disclosures and how these may be changed by aggregation

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide users with knowledge of data aggregation's ability to reveal undesirable information to prevent them from over sharing. Take users through a hypothetical example to aid in conveying this.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Prior to allowing users to submit content to the controller or other parties, provide them with a warning about data aggregation. This warning is only necessary where aggregation is applied. As such if it is determined after collection that data should be aggregated, this warning would be given prior to obtaining consent for that further processing.

The warning must make it clear to the user that content they disclose may be more sensitive that it first appears. The context in which they provide it may be subject to changes, and these potential contexts should be provided to the user, or else consented to as they become applicable. The user should not have to deal with broad or otherwise unclear usage of their data.

At the same time, the user should not be exposed to deep, complex, and lengthy detail unless they choose to review it further. Instead, concise and clear explanations should be used. One approach to this is to provide a hypothetical example in which a controller reveals surprising characteristics about a user from combinations of data, which alone are less informative.

Consider the use of user tests to determine the level of clarity an explanation or example provides. It is important that if a user chooses to accept the risks (and benefits) of aggregation, then they do so knowingly. It is also important not to force aggregation onto users if they choose not to consent. This may prevent the user from gaining a feature, but should not lock them out of functionality which does not require it.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

If users understand the power of data aggregation better, they are better able to put any new data they're about to share in perspective to all the data they've already shared, and may consider the total picture this creates of them more carefully. But this also means that it becomes harder for organizations to create accurate profiles of people and may result in improper labeling based on the little data that is known.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->



### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

[CryptPad](https://blog.cryptpad.fr/2017/07/07/cryptpad-analytics-what-we-cant-know-what-we-must-know-what-we-want-to-know/) Provides a thorough and clear explanation of their Data Aggregation usage which is linked to from the 'What is CryptPad' page in every instance. Towards the end of the blog post they include graphs to show how useful the data can be, but they also explain what they access, can (but do not) access, and what they cannot access. While this example explains aggregation well, and features a concise summary at the beginning, it could still be better highlighted before a user's first use of the service.

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is a component of the compound pattern, [Awareness Feed](Awareness-Feed). As such, this pattern _may be used_ by it.

This pattern _refines_ [Privacy Awareness Panel](Privacy-Awareness-Panel) and _complements_ [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback).

While it only aims to solve an overlapping problem, [Privacy Awareness Panel](Privacy-Awareness-Panel) considers past and future disclosure decisions and does not differ much from the knowledge of potential sensitivity when aggregated. This pattern therefore provides more a specific application.

[Appropriate Privacy Feedback](Appropriate-Privacy-Feedback) provides the same information as [Privacy Awareness Panel](Privacy-Awareness-Panel), only through a different mechanism and with a different problem. Through it, the benefit of more general awareness is sought.

This pattern _may be used_ by [Impactful Information and Feedback](Impactful-Information-and-Feedback). As it focuses on analytics about historical queues and measures for warning users, it should inform the user about the risks involved, such as aggregation.


### [Sources]
<!-- References to the original source of the pattern.-->

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->