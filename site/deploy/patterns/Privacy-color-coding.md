[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

The numerous policies and settings around privacy for each service (or product) used by a user would be quite complex and time consuming if such a user endeavored to investigate them. Policies are written for legal compliance and settings are often configured for best experience rather than privacy. Even in the instances where privacy friendly defaults are used, they may cripple the usability of the system, or otherwise disable desirable features. Some settings can also be difficult to consider due to overly brief and vague descriptions.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users do not investigate policies and preferences due to the effort required, and cannot inherently comprehend the consequences of settings otherwise. The poor understanding of these can lead to undesirable disclosures.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to be able to quickly investigate how much or little information they can comfortably provide while still enjoying the service
- Users want to be guided as to what preferences achieve better privacy
- Controllers want users to configure preferences in ways they actually intend, therefore not processing data without informed consent
- Controllers also want users to understand the limits of the settings through understanding the policies

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Present the user with standardized color visual cues to help guide them in selecting privacy friendly settings, and in understanding the policies around those settings.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_The results of privacy settings such as visibility are divided into different levels. A distinct color is assigned to each of these levels. Every time the user is performing an action where privacy settings come into play, the color is used as an indication of the privacy settings currently in effect. The choice of colors should take into account prevalent color meanings, like usage of the color red for warning situations. If privacy settings cannot be grouped into distinct levels, a gradient between different colors could also be used._

The same treatment may be applied to policies, or explanations of settings. User rights and affordances may be presented differently from what the controller may do with their data. Aspects which could be perceived to have the greatest impact on privacy should stand out most. Explanations of who has responsibility or accountability, contact details, etc. can also be given a distinct color. Finally purposes and means for processing should be clearly visible.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->


_Users receive direct visual cues on the consequences of their privacy settings currently in effect. In order to be more clear about their privacy settings._

_The danger of unwanted actions is decreased, as users will [regularly perceive] visual cues. On the other hand a reduction of complex settings to a few colors may lead to an oversimplification which would render the whole pattern useless. Visual cues must be integrated into the [service] design but must still be placed prominently enough to be noticeable. Cultural aspects for the different meanings of colors should be taken into account. The same color may not be recognized as a warning label in different cultures._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Alice uses a social network and shares personal stories only with her friends while she shares mundane content publicly. Hence she always has to change the privacy settings of her posts in order to adjust the visibility of the posts. One day she forgets to change the setting and does not realize that she actually shared a precarious story with her boss._

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_A color coding similar to traffic lights is implemented in many modern web browsers for HTTPS connections. A green background indicates a valid certificate while a red background and a warning label shows that there are problems when validating a certificate. [Facebook Privacy Watcher](http://www.daniel-puscher.de/fpw/) enhances the Facebook website by color-coding shared content and indicating its visibility. Posts with green background are public, yellow indicates visibility for friends only and red content is only visible to the user. Blue background is used for custom audiences such as groups._

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback), [Informed Secure Passwords](Informed-Secure-Passwords), [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), [Privacy-Aware Network Client](Privacy-aware-network-client), [Awareness Feed](Awareness-Feed), and [Icons for Privacy Policies](Icons-for-Privacy-Policies). It also implicitly _complements_ [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides) through [Awareness Feed](Awareness-Feed).

As a visual cue, this pattern aids in providing [Impactful Information and Feedback](Impactful-Information-and-Feedback) by augmenting it with quickly interpreted information. These visual cues additionally help towards [Informed Secure Passwords](Informed-Secure-Passwords), as they may indicate password strength and policy.

Visual cues like this pattern also aid in providing accessible policies, and thus _complement_ [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), and [Privacy-Aware Network Client](Privacy-aware-network-client).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) and its methods for establishing awareness also go well with visual cues like this pattern. It also implicitly aids [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), which provides visual representation to highlight trust levels to the user.

Like this pattern, [Icons for Privacy Policies](Icons-for-Privacy-Policies) provides its own way to tackle an overlapping and quite similar problem. This features the understanding of the privacy policy in both cases, as well as privacy settings in this pattern. These patterns may work together to integrate a solution illustrating with both color and imagery.

### [Sources]
<!-- References to the original source of the pattern.-->

Christoph Boesch, Frank Kargl, Henning Kopp, and Patrick Mosby, “privacypatterns.eu - collecting patterns for better privacy,” 2017. [Online]. Available: https://privacypatterns.eu/. [Accessed: 18-Jul-2017].

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->