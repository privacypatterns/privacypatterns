[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users are exposed to many privacy policies and notifications which seek to inform them of various issues. The controllers who provide these explanations require that users fully understand the circumstances around the use of their data. Specifically, the purposes for which and means by which their personal data is collected or otherwise processed. There is much information however, and so users are likely to overlook important details.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Information the controller conveys to the user is frequently overlooked due to length and complexity of both the content and the vocabulary within, which compromises validity of consent.

_Users should clearly understand the content of and terms used within privacy and security software. The terms are usually formulated on an expert-basis and therefore often difficult to understand for the average user._

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to read complex and long policies
- Users still want to understand what risks they might be taking with their data by using the service (or product)
- Controllers want to ensure that users understand risks
- Controllers need consent given by users to be informed

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Construct privacy related information using easily parsed and low difficultly vocabulary, with short concise sentences and enough flow to persuade the user to process it.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Users should not need to be familiar with the subject matter. They should also not be given unnecessary detail at the highest level of abstraction. Consider combining techniques from other patterns such as [Layered Policy Design](Layered-policy-design).

_Before using the terms one should be sure that they are clear and understandable for the target-users. Therefore it is recommended to either refer to standardized terms [or] to conduct user tests on the understandability of [utilized] terms and phrases. These tests do not have to be extensive. Asking only few representative users from the target-group about their understanding of the terms should suffice._

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

Referring to the user as the data subject or otherwise introducing terms to the user may reduce reading comprehension. Instead of focusing on legally accurate terms, the information should make sense to the user. It should not be provide a false interpretation, however. The PrimeLife example features a mock corporation which summarises information according to 'what', 'how', and 'who'.

![Privacy Aware Wording Example](/media/images/privacy-aware-wording.jpg)

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Awareness Feed](Awareness-Feed), [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Labels](Privacy-Labels), [Privacy Color Coding](Privacy-color-coding), [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), [Privacy Policy Display](Privacy-Policy-Display), [Layered Policy Design](Layered-policy-design), and [Privacy-Aware Network Client](Privacy-aware-network-client).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) (like [Impactful Information and Feedback](Impactful-Information-and-Feedback)) and its methods for establishing awareness go well with accessible policy aspects like this pattern.

Interpretations of privacy policies and their expression in easily understood summaries could be improved with [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies) and [Privacy Color Coding](Privacy-color-coding). This makes for a more accessible solution with visual cues.

Accessible policies like these go well with [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), as they _complement_ its need for policy summarization.

Privacy Aware Wording can be used alongside [Privacy Policy Display](Privacy-Policy-Display) and [Layered Policy Design](Layered-policy-design) to provide more accessible wording in the resulting layered privacy policy or display. Similarly, [Privacy-Aware Network Client](Privacy-aware-network-client) benefits from such attention to accessibility in its easily readable format.

Implicit complementary relationships to this pattern include [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display) and [Policy Matching Display](Policy-matching-display). Both of these exist through their use of [Privacy Policy Display](Privacy-Policy-Display).

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications, vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->