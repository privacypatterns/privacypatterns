[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers of services (or products) provided to users collect mass amounts of data, a lot of it personal, to improve the quality and user experience of that service. This is all to be done under the informed consent of the user, who should properly understand the risks involved for their data. One such risk is that of unauthorized access, modification, removal, or sharing of data. If such a data breach occurs, notification is required. Any controller within (or providing services or products within) the EU must notify the supervisory authority of their main establishment or representative. This must occur within 72 hours unless justified. Notifying users is dependent on whether they are sufficiently affected.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

When data breaches occur, numerous risks become apparent for multiple parties, these parties need to be notified and the risks need to be mitigated. Subsequent instances should be prevented through lessons learned.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to know if anything has happened to compromise their data, their security, or their privacy
- Users want the controller to mitigate the risks before and after a breach to the best of their ability
- Controllers want to prevent risks from materializing and place measures against breaches happening in future
- Controllers also want to prevent users from suffering consequences from the breach, or from ignorance of the breach

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Detect and react to data breaches quickly, notifying the supervisory authority of details, particularly risk mitigation, in order to establish whether users must also be informed. Properly handling these events will strengthen user trust rather than weaken it.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_A monitoring system logs access to [personal data] along with a time-stamp. A notification process continuously verifies that only authorized access is listed in this log file, and in case of unauthorized access notifies the data owner and logs the notification action in the log file, again accompanied by a time-stamp. A notification monitoring process finally continuously checks that t_n - t_l <= max_np (t_n denoting the time of notification, t_l the time of data leakage, max_np the maximally allowed period of notification). In case t_n - t_l > max_np it alerts the [associated] Incident Manager. A formal model can be found [here](http://sit.sit.fraunhofer.de/smv/pattern-models/Data-Breach-Notification-pattern-model.pdf)._

In the event of a breach, the controller should first notify the supervisory authority within 72 hours of it's discovery, and no later without sufficient justification. The processor of personal data, where not also the controller, should notify the controller immediately.

Notification to the authority should include the nature and extent of the personal data affected, the contact for follow up, likely consequences, and the measures proposed or taken to mitigate the breach's effects. If absolutely necessary these details can be provided as they become available. Any breaches should also be documented for future review.

Where users are affected in a manner which risks their personal rights and freedoms, they shall also be informed of at least the contact, consequences, and measures to be taken, without undue delay. This is not the case if disproportionate effort would be needed, the data remains protected, or the risk is already sufficiently mitigated. The supervisory authority shall assist in determining whether informing users is necessary.

Note that associations or other representative bodies may prepare codes of conduct for data breach notifications. These notifications may also be affected by binding corporate rules, or guidelines, recommendations, and best practices from the board, to promote consistency.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_In order to [detect the breach], the [controller] must have in place an access control mechanism and a monitoring mechanism [for personal data]. The pattern cannot ensure that [the relevant] Incident Manager will take adequate actions, hence this process has to be established and controlled by other means._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Assume a [company] stores all employees' data [through a controller's service]. There is a contractual agreement between [them] that each data leakage is reported within one hour. Now Bob, an employee of [the controller] and not authorized to read [the company's] data, succeeds in circumventing [the] access control mechanisms and reads [personal] data. This represents a data breach of which [the company] has to be notified within an hour._

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_This pattern is based on the privacy principle "Accountability" specified in [ISO/IEC 29100](https://www.iso.org/standard/45123.html) that is also used in Annex A of [ISO/IEC 27018](https://www.iso.org/standard/61498.html). More specifically, it addresses A.9.1 Notification of a data breach involving Personally Identifiable Information (PII). Uses of the pattern as a concrete instantiation of A.9.1 are not known._



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Unusual Activities](Unusual-activities). These patterns work in an overlapping context. While this pattern focuses on informing and reacting when a data breach has occurred, [Unusual Activities](Unusual-activities) focuses on detecting and dealing with unauthorized access. The patterns can work together to handle unauthorized access to personal data.

### [Sources]
<!-- References to the original source of the pattern.-->

“privacypatterns.eu - collecting patterns for better privacy,” privacypatterns.eu, 2017. [Online]. Available: https://privacypatterns.eu/. [Accessed: 20-Oct-2015].

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->