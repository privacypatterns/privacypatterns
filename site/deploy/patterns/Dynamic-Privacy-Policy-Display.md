[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers are mandated by various laws and regulations to ensure that users, their data subjects, are adequately informed before requesting consent. Failing this, the consent loses legitimacy and the controller may face repercussions. However, the main mechanism for supplying this information resides with privacy policies, which must also conform to legislative norms. The language this necessitates is long and complex, which jeopardizes the chances of users understanding it. This information can be summarized, and otherwise reworded to make the content more accessible to users, though typically the length of such summaries are still quite long.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Not all contexts are suitable for extensive privacy policy information, yet users often still need to be able to obtain additional data without breaking those contexts.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Controllers need informed consent for collection, sometimes with limited screen space available, yet users do not typically read privacy policies on their own
- Users do not want to spend time and effort reading through privacy policies
- Controllers want users to actually use their service (or product), but users will not do so if the cost of doing so entails disproportionate effort
- Users want to be able to get to using the service quickly, without needing to visit multiple policy pages

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide the user with additional relevant policy information on hover or tap, by way of 'tooltips', to best inform them given contextual limitations. In a mobile setting these tooltips may unobtrusively become available to tap when the relevant control is most in focus (i.e. selected, centered, or occupies most of the screen).

This information may highlight the nature and potential consequences of the disclosure, and should be displayed consistently.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_The information should be provided to the user where it is needed. Therefore the tooltip should appear on demand (i.e., need of information). This could be for example in a login dialog as soon as the user navigates the mouse into the concerning part of the interface. The tooltip should then be made visible to the user and contain all necessary information for making an informed decision._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_By displaying the relevant [information pertaining to] privacy policies whenever they apply to what the user is currently doing or about to do, the user's awareness of what will happen with the information they're about to share is increased._

However, users may also happen to not trigger the tooltip, especially when using a mobile device. As such it is important that they are aware of its existence, and its importance, given the current context.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

When a user needs to login and is given numerous options, with limited space provided, each option can have an assigned tooltip. These can appear on hover, tap, or scroll, where necessary appearing with less opacity until the user taps the tooltip itself. It can also lead to further detail through '(see more)' in a recognizable blue underlined hyperlink format. To encourage use of this a variant may either scroll through detail or show a visible scroll bar. Not needing the user to leave the application or webpage will require less effort on their part.

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

The PrimeLife HCI Pattern Collection (V2) features a prototype using tooltips to convey policy information on hover. 

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Policy Matching Display](Policy-matching-display) and [Platform for Privacy Preferences](Platform-for-Privacy-Preferences). In both cases the solutions are different, but share the same context.

With [Policy Matching Display](Policy-matching-display), this pattern may add mismatches between preferences and the standardized policies to 'tooltips' therein. Against the [Platform for Privacy Preferences](Platform-for-Privacy-Preferences) pattern, however, they may work together to show the user how the privacy policy compares to user preferences.

This pattern _may use_ [Privacy Policy Display](Privacy-Policy-Display). While this pattern adds additional elements to the solution presented by [Privacy Policy Display](Privacy-Policy-Display), it is a _uses_ relationship rather than _extends_, as both patterns approach different problems.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->