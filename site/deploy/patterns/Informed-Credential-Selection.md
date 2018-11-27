[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Credential Selection

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers offering services (or products) often provide a means to authenticate users in order to permit them access. This access can be to a secure function, such as fulfilling a transaction. Since this action may have difficult to reverse consequences, the controller needs to be certain of the user's identity and informed consent. In order for consent to be valid, the controller must ensure that it is informed, as well as freely given, specific, and unambiguous. In order to determine identity, however, personally identifying information is needed. Some methods of authentication are also more invasive than others, allowing users to provide more information than necessary.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Credentials which users supply may be more invasive than necessary, this is a kind of consent which legally must be informed.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to authenticate so that they know only they can obtain access
- Users do not want to provide more information than they feel comfortable or than is necessary
- Controllers want to prevent unauthorized access to user actions, as this can seriously affect their experience
- Controllers do not want to process user data for which they do not have valid consent

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow granular credential selection which explains to users the various ways in which personal data can be used, including who may access it, and how it may be used to derive further information.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_Present the user with a selection mechanism that shows the user what possible choices are available and then show a summary page that contains the data to be sent._ The explanation of consequences must be shown as the user investigates the available credentials. It should be clear to the user which information authenticates them with the least privacy impact.

One mental model for this could be the use of a credit card for identification. See the HCI Pattern Collection for further information on this example.

_Independent of a mental model, the credential selection UI should contain two steps, namely, selection and summary. During the first step, all graphical elements of the selection mechanism should be based on the mental model. Thus, if working with the card based metaphor this should be apparent from the UI. During the second step, the invoked mental model is not as important as the key issue is to clearly convey which selected data and which meta-data is being sent._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_Allows a user to identify themselves in a granular way, controlling how much information they reveal by doing so._

_This approach should be used to make it easy for users to select the appropriate credentials. It also should inform them about which (personal) data and meta-data the recipient of the information will have after the transaction._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

Jiang et al. (2010). "A Classified Credential Selection Scheme with Disclosure-minimizing Privacy". International Journal of Digital Content Technology and its Applications, 4 (9), December 2010. 201 - 211.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Informed Secure Passwords](Informed-Secure-Passwords). This pattern focuses on informing users about the data released for authentication in certain contexts, elaborating on how such data might be used. [Informed Secure Passwords](Informed-Secure-Passwords) focuses on encouraging better use of password-based authentication. With overlapping contexts, these patterns both provide assistance around password-based authentication, together enhancing awareness and usage. [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact) may also benefit from the use of this pattern. It seeks to prevent users from unintentionally having their personal data accessed, particularly from automatic disclosure. However due to this contextual distinction, the benefit is less clearly complementary.

This pattern has an implicit relationship with [Unusual Activities](Unusual-activities). This _complements_ relationship stems from [Informed Secure Passwords](Informed-Secure-Passwords). While not as strongly connected, this pattern may also benefit from detection and response to compromised authentication methods.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications, vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->