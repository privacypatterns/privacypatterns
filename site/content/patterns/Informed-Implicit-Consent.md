[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Permission to Use Non-sensitive Personal Data - Implicit Consent

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Processing of user (data subject) information, particularly that which potentially identifies a user or group, requires their explicit informed consent. Inaction is not considered valid consent. However, not all instances make this feasible. As such there are circumstances in which legitimate interests of the controller may justify collection without first obtaining a clear statement of permission to do so. Security footage around a controller's premises, or fraud detection, for example, cannot reasonably be made optional to users of the service (or product). What constitutes legitimate interests in these contexts depends on the relationship and reasonable expectations between the controller and user. As such, sensitive data, or special categories of data, are more difficult to justify.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

A controller needs to collect and otherwise process reasonable information to fulfill their legitimate interests regarding a user, but cannot feasibly acquire each user's explicit consent.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users should not have to frequently and explicitly consent for regular, everyday, ubiquitous services which are expected and acceptable for legitimate interests
- Users do not want to have certain data processed, and need a way to avoid implicitly consenting to it
- Controllers do not want to have to obtain explicit consent in real-time bulk for expected and acceptable legitimate interests
- Controllers want to ensure that legitimate consent exists before processing

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide clear and concise notice that by using the service, the user implicitly consents to the processing necessary to fulfill legitimate interests. Ensure that this notice is perceived prior to the application of the effects it describes.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Ensure that users are informed sufficiently prior to any processing with clear and concise notice, the complete detail of which should also be accessible. In digital mediums, this is straightforward, working similarly to Cookie Walls on websites. Users should be given the opportunity to choose not to use the service and therefore not be subject to the processing it requires.

In physical instances it is more difficult to be sure that users take note of this. On devices, lights have often been used to convey a recording state. This, while clear once already subject to processing, is not sufficient however. Instead, large signs are commonplace to indicate the use of data collection. The most familiar example would be "Smile, you're on camera". Of course, this is less clear than "Our premises is recorded for security purposes, by entering you consent to this processing. See more info at [address]". These signs should be posted, visible prior to recording, at all entrances or otherwise where applicable.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Users will be informed before implicitly providing consent to reasonable processing for legitimate interests of the controller.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

Given a Sensor Network, Provider, and Controller, collected data is delegated by the Controller through the Provider to the Sensor Network. The Sensor Network collects some data with explicit consent, but this data may also be personal for a user who has not given such consent. This data may be potentially identifying, and thus the user should be informed prior to its processing. The Controller must ensure that the Provider of the Sensor Network provides any potential users with unambiguous warning of the collection, and that individual consent is infeasible. This may make use of a clear and legible warning sign. The Sensor Network itself should also be visible and obvious, clearly indicating when collection is ongoing. Societal norms may dictate this, such as security cameras in some contexts (commercial areas where valuables may be stolen) needing little warning.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Ambient Notice](Ambient-notice). By extension, it may also be implicitly _complemented by_ [Asynchronous Notice](Asynchronous-notice) as an alternative approach. Furthermore, this implicit connection has ties to [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact).

In all these cases, a user needs to be made aware of the implicit nature of their consent. [Ambient Notice](Ambient-notice) can complement this intention with continuous, but unobtrusive notice. Its alternative can do so in a model, continual manner, where context changes might justify it. This is less complementary depending on how it is applied. In either case, users need to be prevented from mistakenly sharing personal data.

### [Sources]
<!-- References to the original source of the pattern.-->

Y. Asnar, V. Bryl, R. Bonato, L. Campagna, D. Donnan, P. El Khoury, P. Giorgini, S. Holtmanns, M. Martinez-Juste, F. Massacci, J. Porekar, C. Riccucci, A. Saidane, M. Seguran, R. Thomas, and A. Yautsiukhin, “Initial Set of Security and Privacy Patterns at Organizational Level,” 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->