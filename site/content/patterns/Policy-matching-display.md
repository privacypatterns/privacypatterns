[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Personalized Policy Matching Display

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers have policies written in a manner appropriate for legal evaluation, as it is the legal compliance which warrants them in the first place. Users tend to not be able to comprehend such language, and do not typically care to spend the time and effort required to parse it. However, much of the content in these policies is consistent throughout the services they use.

Users value using a service (or product) without having to go through repetitive and verbose policy detail. However, these users must still understand the policies which apply to them in order to not be blindsided. Controllers need to avoid this as keeping users happy is integral to a sustainable business model.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Users may get overwhelmed by the complexity of policies impacting privacy when using a service, compromising the validity of their informed consent.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to have to read privacy policies, but do want to know about relevant and important distinctions from their personal preferences
- Controllers need to have policies which are tailored to legal compliance, but also need users to understand risks and responsibilities
- Users may not like the default values chosen by controllers for application settings, even if those defaults are privacy friendly
- Controllers would like users to use a service immediately, with as little in the way and as little potentially discouraging as possible

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Retrieve user policy preferences and use these to highlight contradictions with the privacy policy. Where possible, configure application settings to the values which best adhere to these preferences.

<!--#### Rationale-->
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->

<!---### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

User policy preferences may be collected and managed by a controller, _exposed by their user agent, or at a well-known URI_. They may be highlighted through an overlay of elements or handled in-line where context plays an important role. In either case these notifications should not encourage users to apply settings which do not match their preferences in order to remove them.

On the other hand, if the notification is not noticeable, the user may overlook an important policy distinction. Notifications which are persistent or ubiquitous may quickly desensitize users, and should also be used with care.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Allows users to provide a consistent privacy threshold while reducing cognitive workload as they use services.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

Expressing and comparing the policies requires a consistent machine-readable format. There however numerous approaches to this. The [Platform for Privacy Preferences](Platform-for-Privacy-Preferences) pattern addresses this through eXtensible Markup Language.

<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->



### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

- For an academic discussion, see Graf, C., Wolkerstorfer, P., Geven, A., & Tscheligi, M. (2010, November). A pattern collection for privacy enhancing technology. In PATTERNS 2010, The Second International Conferences on Pervasive Patterns and Applications (pp. 72-77).
- For a discussion of privacy languages see Kumaraguru, P., Cranor, L., Lobo, J., & Calo, S. (2007, July). A survey of privacy policy languages In SOUPS'07: Proceedings of the 3rd Symposium on Usable Privacy and Security. and Becker, M. Y., Malkis, A., & Bussard, L. (2010).
- A related, classic initiative was W3C's The Platform for Privacy Preferences 1.1 (P3P1.1) Specification, however, the matching was performed at the client's side.
- A more recent example is available at S4P: A generic language for specifying privacy preferences and policies. Microsoft Research.
- ... and Sacco, O., & Passant, A. (2011, March). A Privacy Preference Ontology (PPO) for Linked Data. In LDOW.

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _may use_ [Privacy Policy Display](Privacy-Policy-Display). While the display aims to show policy information this pattern may highlight privacy preference mismatches therein, providing more valuable information for the user.

It may also be _used_ by [Platform for Privacy Preferences](Platform-for-Privacy-Preferences). It is a fundamental part of the implementation of the latter, which adds useful improvements and overlaps this pattern's context and problem.

This pattern _complements_ [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display).

Between this pattern and [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), both patterns may work together to provide the user with information toward building trust in a controller. This will be based on both preferences matching and means for demonstrating trustworthiness.

With [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display), however, these patterns may provide mismatches within or through the standardization and 'tooltips'.

Implicitly, through [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), this pattern also complements the visual cue patterns. This includes [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Appropriate Privacy Icons](Appropriate-Privacy-Icons), and [Privacy Color Coding](Privacy-color-coding).


### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->