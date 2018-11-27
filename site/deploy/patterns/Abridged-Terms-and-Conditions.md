[TOC]

<!-- ### [Also Known As] -->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers which provide services (or products) to users have various policies, including those which affect user privacy, which need to relayed to the user. If users do not have knowledge of the risks, rights, and responsibilities relevant to them, this is the fault of the controller. Keeping users (the data subjects) informed, especially prior to acquiring consent, is a legal requirement. As such, controllers need to ensure that this is the case. It is however difficult to keep user attention on such matters, as they are often more willing to spend time on other things, including actually using a system. Efforts to hold attention by force also face active resistance.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Users often overlook Terms and Conditions when presented with them in their entirety before the use of a service.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Controllers need to write Terms and Conditions in a manner which will hold up to scrutiny from the law, but this is not accessible to users
- Controllers want to ensure that users are fully aware of the risks of using the system before using it, for both legal and image purposes
- Users want to get to using the service without being blockaded by walls of text, but the also do not want to be blindsided about policy
- Users want to understand the risks in as little time as necessary, at a granularity most suitable to their value of it

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Summarize the legally sufficient Terms and Conditions into concise and relevant variations which suit the user's level of interest and attention. At first use of a service, users should be able to investigate further, but not have to read much to understand the risks involved.

<!--#### Rationale-->
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->

<!---### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Prepare the concise Terms and Conditions according to a user perspective, focusing on matters which are most important to them. Aspects which do not affect them should not be included in summarized variations. Where areas of potential interest are easily bundled, group them under a general summary with option to expand further. Using titles in this regard is less helpful if they do not summarize the policies involved, as expanding should not be necessary unless the user notes an area worth their concern. Aim towards a page or less of information, as the inclusion of a scrollbar may dissuade the user.

The full, legally sound version should also be available, and should not contradict the summarized information. This applies at first use as well, as a user should be allowed to review detail prior to being subjected to it.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

The appropriate and concise summarization of the Terms and Conditions will allow users to get a sufficient idea of the rights, risks, and responsibilities relevant to them. As it should be brief, only the most carefree users will overlook them. It will not therefore be guaranteed that users are fully informed, and this should be taken into account.

_Due to the fact that the [Terms and Conditions] of an application are condensed to a size that is easily comprehensible, a user’s trust in the application can be increased. [Additionally, this] ensures a greater transparency to the user since possible implications for the user, which may result through the usage of the application, can be recognized more easily beforehand._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->


## Examples
<!--Motivational example to see how the pattern is applied.-->


### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

– _Support-U: An example of an abridged TAC is given in fig. 3. The figure shows the results of the abridged TAC pattern used for the Support-U application._
– _Connect-U: The user has to sign a license agreement of the size of one page in A4 format. On this page the agreement about the data usage is described in clear detail._
– _Meet-U: The key points of TAC that affect the user’s privacy the most, are displayed on one screen. Hence, the gathering and processing of data are addressed and summarized briefly. The long version of the TAC is linked. The user has to agree on that before continuing with the application._

## See Also
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), and [Privacy-Aware Network Client](Privacy-aware-network-client).

The relationships this pattern has to these accessible policies patterns stem from its inherent compatibility with policy standardization, summarization, separation into layers and re-wording. Abridging a policy may support these aspects, or even entail them, though this pattern focuses on a specific kind of policy document. Were this pattern to have a broader context, it could even be considered an accessible policies pattern itself.

This pattern is also _complemented by_ the following:
- _Explanation of Processes: The application shall inform users on demand about processes._
- _Extras on Demand: ”Show the most important content up front, but hide the rest. Let the user reach it via a single, simple gesture.”_ (Tidwell, 2005)

### [Sources]
<!-- References to the original source of the pattern.-->

H. Baraki et al., Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany, 2014.

J. Tidwell, Designing interfaces. O’Reilly Media, Inc., 2005.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->