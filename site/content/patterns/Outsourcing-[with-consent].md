[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->

Controllers often do not have the means to feasibly or sufficiently process the data they oversee to the extent they desire. In these cases they seek an external processor or third party to handle the process. This typically conflicts with their already obtained consent from their users (their data subjects), as further processing by a third party is not necessarily compatible with the agreed upon purposes. In these situations the controller does not have legally obtained consent for this processing and will be liable if they carry it out.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Third party processors do not inherent user consent granted to a controller, but need each user's consent before they may process their information. The processor cannot contact the necessary users as they have no lawful access to any means to identify them.

#### Forces/Concerns
- Controllers wish to outsource processing when it is not feasible or viable to do so themselves.
- Third party processors want to process information efficiently without needing to address other considerations.
- The controller does not want to be liable, or damage their reputation.
- Outsourcing _has a strong impact on the security and privacy requirements of organizations_. A contract will bind both parties.
- _The outsourced third party will be obliged by all data protection principles_ to which the controller is, in addition to stricter measures imposed on processors.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Obtain additional (Lawful Consent)[Lawful-Consent] for the specific purposes needed from each user before allowing the third party to process their data. Do not process the data of users who do not consent.

_The consent can be seen as a contract establishing what and how data will be processed by the [third party]. The [controller] must also ensure, preferably by a written agreement, that the [third party] strictly follows all conditions relating to data processing that were imposed on [them]._

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->


### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->
Before outsourcing data processing, it is necessary to obtain consent from the user and create an agreement between the controller and the third party. The consent itself needs to be freely given, informed, specific, and explicit. It should indicate purposes and means (physical or informational) regarding the controller and the third party. There is also an execution dependency between the controller and the user.

Figure 2(b) shows an SI* model explaining the solution of Compagna et al. (2007)

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
_The pattern solves the problem of granting [the consent] necessary to perform out-sourced data processing by assuring [users that their information is] processed according to the contract._

#### Liabilities
_The [controller] may want assurance that the [third party] does not repudiate the data processing agreement and the [user] does not repudiate the consent._ As such the controller may decide to use the [Non-repudiation](Non-repudiation) pattern.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

The scenario described by Compagna et al. (2007) features a Health Care Centre (data controller) and a user (data subject), Bob, who needs constant supervision. The subcontractor, a Sensor Network Provider (third party supplier), installs and maintains the network responsible for automated monitoring of Bob's health. This subcontractor needs additional specific, informed, explicit, and freely given consent from Bob.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->
This pattern _must use_ [Lawful Consent](Lawful-Consent) in order to be implemented. It also benefits from using the [Non-repudiation](Non-repudiation) pattern.

### [Sources]
<!-- References to the original source of the pattern.-->

L. Compagna, P. El Khoury, F. Massacci, R. Thomas, and N. Zannone, “How to capture, model, and verify the knowledge of legal, security, and privacy experts : a pattern-based approach,” ICAIL ’07, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->