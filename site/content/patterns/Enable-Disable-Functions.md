[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

Users frequently have data collected about them, often in situations where it needn't be. Many of these cases are due to good intentioned, expansive, functionality. Not all users seek to take advantage of all functions, however. Some controllers aim to consider this in their designs.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Not all users desire or benefit from all functionality.

_Consider users living in an Ambient Assisted Living environment: these users are surrounded by various sensors such as video cameras, motion sensors or electrical current sensors that are used to monitor the actual situation of a person. Another example are the acceleration sensors included in smartphones. A [service (or product)] can recommend places of interest to the user by considering the gathered [data]. With regard to these examples it becomes obvious that [services] often unobtrusively collect highly critical and personal context data of users._

#### Forces/Concerns
– Informational self-determination: _The pattern considers a user's basic right of informational self-determination. This is due to the fact that a user is able to explicitly agree or disagree to a certain function depending on the context data needed by the function. Therefore, the user has direct control of the context data collection process. This satisfies the principles of necessity, transparency, giving consent and responsibility. They are part of the user's right of informational self-determination and are described in detail in [Kuner] and [Hornung & Schnabel]._
– Trust: _The pattern increases a user's trust in the [service] by offering the possibility to prevent the collection and inference of certain personal context data. Hence, [users] can be sure that personal data that is critical to [them] is not gathered, stored or further processed by third parties._
– Transparency: _The pattern provides transparency to the user by giving an overview, which function needs which personal context data of a user to work properly. For this reason a user is aware of the context data that is gathered..._

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Enable users to choose which functions they do not consent to using, nor wish to provide the required data for.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_A solution is given if the user can explicitly agree or disagree to certain functions. For this purpose, the [service] has to display every function and its required context data. A possible way of displaying these functions and the used context data may be the use of the privacy consent form, which is included in every application._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_By enabling the user to explicitly agree or disagree to certain functions, a context aware application like Support-U might not be able to provide all of its possible functionalities to the user anymore. However, the usage of this pattern in the development process of context-aware applications might additionally strengthen the user's confidence in the usage of UC systems._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->


## Examples
<!--Motivational example to see how the pattern is applied.-->

#### Support-U
_In the shown privacy consent form each function, which utilises personal context information, is listed. Furthermore, the user is able to activate or to deactivate the functions, e.g., to enable a live stream or to enable predicting her next context._

#### Meet-U
_Meet-U provides several functions that make use of localization mechanisms and the personal data the user supplies. That includes the user's interests, buddy list and [their] preferred means of transportation. For indoor navigation a RFID sensor attached to the user is exploited. The user can now switch off the navigation function so that neither the indoor nor the outdoor localization continue to operate. The user's preferences concerning transportation will be no longer available. Further functions can be disabled correspondingly. Turning off, for example, the advanced search engine would stop using the user's interests._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Enable/Disable Functions](Enable/Disable-Functions) is _similar to_ [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy). Choosing between activated or deactivated privacy settings and functionalities is in-line with negotiating a policy which reflects these choices, but from a more functional perspective.

Like many patterns, despite providing the user with enhanced choice, it is important to ensure that user decisions are informed, made without being pushed, and are understood explicitly. As such, this pattern _must use_ [Lawful Consent](Lawful-Consent) as means to this end.

– Configurability: The application shall enable users to activate or deactivate functions. (See [Reasonable Level of Control](Reasonable Level of Control)).
– Agreement to Functionality: The application shall ask for users' consent regarding the functionality before use. The application should enable users to alter their consent regarding the functionality. (See [Lawful Consent](Lawful-Consent)).

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

Baraki, H., Geihs, K., Hoffmann, A., Voigtmann, C., Kniewel, R., Macek, B. E., & Zirfas, J. (2014). Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany. Retrieved from https://books.google.nl/books?id=D40vBgAAQBAJ

#### From the above
C. Kuner, European Data Protection Law, Corporate Compliance and Regulation. Oxford University Press, 2007.
G. Hornung and C. Schnabel, “Data protection in germany: The population cen- sus decision and the right to informational self-determination,” Computer Law & Security Review, vol. 25, no. 1, pp. 84–88, 2009.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->