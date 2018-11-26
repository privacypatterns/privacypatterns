[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Privacy policies are an important element in the processing activities of a controller. They not only relay to data subjects, the users, crucial aspects about the processing in question, but also adhere to the laws which mandate those policies. Balancing the accessibility of these policies however with the legal comprehensiveness needed is nontrivial. As such users do not naturally familiarize themselves with privacy policies as they need to be verbose, and often complex, to comply with the law. It is therefore necessary that controllers ensure that users are indeed informed before soliciting their consent.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Whenever the user's information is requested, it must be clear to them exactly what information is needed, who requests it, and what will be done with it.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to read extensive policies, but they do want to understand any relevant risks
- Controllers need users to understand specific policy elements in order to legally process their data
- Users would rather be provided with relevant and ideally concise information than all of it at once
- Controllers want users to trust that they are not trying to hide the risks of using the system

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

As requests for personal data are made, state clearly what information is needed by whom, for which purposes, and by what means, prior to soliciting consent.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The Article 29 Working Party of the Data Protection Directive of the European Union have set out recommendations regarding the distribution of policy into a layered format. They suggest three tiers, each providing additional detail. Users should have clearly visible access to successive detail upon the controller's request of the related personal data.

The first tier, 'short notice', shall offer core information necessary for users to understand the purposes and means of processing. It should provide a clear mechanism to obtain further detail. This tier is aimed towards maximum user understanding.

The second tier, 'condensed notice', includes a summary of pertinent information as required by Article 13 of the General Data Protection Regulation (GDPR), the successor to the Directive. This non-exhaustively includes additional information regarding contact details of applicable entities, legal basis or obligation, legitimate interests, recipients, retention, data subject rights, and whether automated decision making is in use.

The third tier, 'full notice', presents all remaining information required by the GDPR in addition to the previous information. This is the variation which expresses the full detail of the policy which best holds up the legislative requirements.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

By constantly reminding users what it really means to share their information, they will better contemplate the personal data they choose to provide. However, users may also become fatigued or otherwise desensitized by frequent reminders and begin to overlook privacy policies. As such it is important to balance the levels of visibility and implicit severities of the information conveyed.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->



<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _may be used_ by [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display) and [Policy Matching Display](Policy-matching-display). The first of these uses it to add standardization and 'tooltip' functionality, while the second adds preference and policy mismatches.

This pattern _complements_ [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), [Platform for Privacy Preferences](Platform-for-Privacy-Preferences).

The complementary relationship with [Platform for Privacy Preferences](Platform-for-Privacy-Preferences) however, is implicit. It is made so by the _use_ of this pattern by [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display), which has a _complements_ relationship with [Platform for Privacy Preferences](Platform-for-Privacy-Preferences).

The complementary relationship between [Privacy Aware Wording](Privacy-Aware-Wording) and [Layered Policy Design](Layered-policy-design) stems from their use as accessible policies. As they seek to make privacy policies more easily interpreted by users, it is a natural aid to the display of information requests and explanations within this pattern.


### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->