[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->

Controllers provide an interface for acquiring information about the user. When one such user wants to share or broadcast their information, such as location or other presence data, that user may want to constrain the information. In this way, they may wish to prioritize data that is contextually relevant, or avoid a full stream of data which may be either noisy or intrusive. The controller wants the user to be able to provide this data at will, to maximize the applicability of their services. However, they do not want the user to regret providing too much data, nor to bother the user with constant requests.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

A service aims to acquire or broadcast a user's real-time data, particularly presence or location information, to a platform (e.g. social network). They wish to do so without revealing sensitive data (e.g. private locations, histories, or health information) nor overwhelming recipients with noisy data or users with constant requests.

#### Forces/Concerns
- The controller wants to use the user's current data to provide more relevant information to the users of their service, but without violating the user's privacy.
- The user wants to participate in the service and provide useful information, but not all information, as they consider some aspects more sensitive than others.
- Users who intend to use the service do not want to have the service flooded with irrelevant data.


## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow the user to actively choose when to share information, whether to _broadcast_ it, and when not to. Assume that sharing settings do not apply holistically to all situations and seek clarification when in doubt.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

The service may present distinct contexts in which to honor explicit settings, but in absence of this context assume that further consent is required. The user may choose not be be asked again, but must make this decision explicit.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

In addition to privacy settings with appropriate defaults, allow the user the option to be asked again, every time the context changes.

By default, users should actively choose to broadcast rather than the service deciding based on general settings which may not apply to the present context. Various contexts may be provided distinct settings.

In these situations users need only be reminded prior to setting the values themselves. After this, they may choose to be notified about broadcasting, but not about sharing with the service itself. In this way, the user may decide later.

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- Foursquare check-in model

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Active broadcast of presence](Active-broadcast-of-presence) _complements_ [Reasonable Level of Control](Reasonable-Level-of-Control), [Masquerade](Masquerade), and [Private link](Private-link). With [Reasonable Level of Control](Reasonable-Level-of-Control), it can consider a larger audience with granular sharing choices. With [Masquerade](Masquerade), it may make the audience more specific. Finally, with [Private link](Private-link), the specific audience may be determined by whom is provided with the link. As such, it may not be as private.

Like many patterns which affect user data, this pattern _must use_ [Lawful Consent](Lawful-Consent).

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

Chung, E. S., Hong, J. I., Lin, J., Prabaker, M. K., Landay, J. a., & Liu, A. L. (2004). Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing. DIS ’04 Proceedings of the 5th Conference on Designing Interactive Systems: Processes, Practices, Methods, and Techniques, 233–242. http://doi.org/10.1145/1013115.1013148

Bier, C., & Krempel, E. (2012). Common Privacy Patterns in Video Surveillance and Smart Energy. In ICCCT-2012 (pp. 610–615). Karlsruhe, Germany: IEEE.

Doty, N., Gupta, M., & Zych, J. (n.d.). PrivacyPatterns.org. Retrieved February 26, 2015, from http://privacypatterns.org/

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->