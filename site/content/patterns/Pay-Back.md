[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

In services where users may contribute content, or provide the system with account or profile information, the information is only valuable if relevant and accurate. For controllers providing this service (or product), worthless information does not typically generate income or future participation. Without consistent usage, a service becomes less popular and eventually may run at loss. This is particularly true in socially oriented services. To keep the service working, it is crucial that its users maintain content. Users however, might not feel inclined to do so. Keeping content up to date, or adding it in the first place, requires effort, and in some cases an acceptance of privacy risk.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users do not necessarily want to provide and maintain content, they need a motivation to do so. Without this, a service will not flourish.

Not all users will be equally motivated, so the service may not receive contribution at the level required to keep the service competitive. Furthermore, some users might not contribute at all. _Thus, it is difficult to maintain [Reciprocity](Reciprocity)_.

#### Forces/Concerns
- A service that depends on information flow requires a continuous feed of user activity.
- If users are not motivated they likely will not continue to contribute content.
- Some users do not require much motivation, and the use of the service could be enough for them to contribute. But this alone is insufficient for most services to run.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide users with different kinds of benefits when they contribute or maintain content for the service and make sure they do so consensually.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Depending on the kind of service that is provided, different benefits could be considered: virtual or real currency, use of services, social benefits, and so on.

When using virtual or real currency, the controller should first define how much in value users would receive depending on the contributions. In the case of virtual currency, the places where the currency could be used should be defined.

Regarding use of service, some criteria could be considered non-exhaustively: feedback on content, frequency of contributions, the use of service for a minimum duration, access to a service earlier than others, or use of special features within the service.

When users reach a limit, they could additionally assist with virtual or physical events for learning, meeting people, etc. In virtual scenarios, users could receive attention (feedback) from one another.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- More users will be motivated to provide information, so the service could continue to be competitive.
- It could help to maintain [Reciprocity](Reciprocity).

#### Liabilities
- It could be necessary to monitor the quality of the contributions before giving the user benefits.
- Consent will not be genuine if users are coerced into providing their personal data. An example of this is the sunk cost fallacy. As the user builds emotional investment, the controller has more power over them. A service which was once available freely, or anonymously, can push users into accepting terms they do not truly consent to. When using this pattern it is important to make sure that [Lawful Consent](Lawful-Consent) is also used.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->


*YouTube financial retribution.
*Dropbox increasing storage programs.
*Local guides for Google Maps.
*Likes, comments, followers in Facebook, Instagram.


<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Pay Back](Pay-Back) _complements_ [Reciprocity](Reciprocity). These two patterns may work together to incentivize users to provide data. It may be used by [Incentivized Participation](Incentivized-Participation), which builds on this relationship.

Additionally, as [Pay Back](Pay-Back) encourages users to provide additional data, it must be sure to obtain [Lawful Consent](Lawful-Consent). This is a _must use_ relationship.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

T. Schümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->