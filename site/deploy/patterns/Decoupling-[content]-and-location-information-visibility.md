[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Suggested: Retroactive Location Sharing

## Context
<!-- The situations in which the pattern may apply.-->
Users often share content in socially oriented services on the Internet. The applications used for uploading this content may attach location information. Controllers can use or publicize this information, allowing others to use it. Sufficient correlations can infringe upon the user's privacy expectations.

The organization in question (likely the controller) does not wish to undermine these expectations, and seeks to enable the user to assign contextually specific privacy settings.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

_Concerns about disclosing location information conflict with the appeal of location information for [content] organization._

#### Forces/Concerns
- _Location is highly indicative of life patterns and significant contexts of the users' daily lives._
- _Location data is increasingly available in various consumer devices._
- Users want streamlined processes for organizing their content in socially oriented services. That simplicity could be achieved by using location automatically.
- Users do not want to set privacy requirements every time they generate content, nor to sweepingly deny all sharing if they intend to use the service.


## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow users to retroactively decide upon the disclosure of location information with respect to the context of the particular content. Record location information by default, but do not automatically share it.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

Give users an interface or control to configure an access policy regarding the privacy of location information. That is, a place where users may, granularly or in bulk, define who may access location information of their content.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

A basic solution could feature an interface or control for selecting the allowed users from all the types of users of the socially oriented service (e.g. built-in or user-defined groups, individuals, or anonymous users). This control could apply to individual content, or to multiple selections, or groups.

Prior to this grant of additional consent the content itself, or versions containing location, might only be available by unpublished [Private Link](Private-Link). The protection of the content itself is however not the focus of this pattern.

If a user chooses, certain individuals or groups may have default access to the attached location information. Default access like this, however, invalidates the following approach.

#### Removing Controller Trust Requirement
An extended solution may aim to be further privacy preserving.

The service may accept ciphertext as the location coupled with the content. When (and only if) the user chooses to make that specific location accessible, their client-side device decrypts the location and provides the service with the plaintext location.

The user may choose how granular the location is before the service receives it. In this way, by default the controller only needs [Lawful Consent](Lawful-Consent) to store the content itself. This solution, like many, is dependent on the trustworthiness of the client's own device.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- Users can define in one place, or where contextually relevant, the granular privacy settings for the location information of their content.
- Users do not need to consider settings when generating content, only later when sharing them, or if they choose, automatically with select individuals or groups.

#### Liabilities
- If users do not configure the policy, then the default configuration shares nothing and the service is not being used.
- Users could require fine-grained location configuration, such as how specific the location is per content. This could be addressed with additional settings.
- This pattern assumes the controller is trustworthy, as all location information attached to the content is still given to the service. Alternatively, the service could endeavor to by default also restrict its own access to the information (e.g. client-side decryption).

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

By applying this pattern the controller prevents location access by default, and thus risks a low location sharing rate. This is due to the tendency of users to leave settings in the default state. However, depending on the effort, the controller may encourage positive public image, and raise adoption overall.

## Examples
<!--Motivational example to see how the pattern is applied.-->

- Flickr (basic implementation)
- Twitter (basic implementation)
- Facebook (basic implementation)

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is one of various foundations for [Support Selective Disclosure](Support-Selective-Disclosure), and thus may be used by it. This pattern _must use_ [Lawful Consent](Lawful-Consent) however, as information is recorded by default and only interacted with afterward. This requires the users true and informed approval. 

Decoupling [content] and location information visibility may be complemented by the use of a [Private Link](Private-Link).
This could allow location information sharing with specific unauthenticated individuals, retaining the ability to decide later.

The pattern _complements_ [Discouraging Blanket Strategies](Discouraging-Blanket-Strategies), which considers having a different privacy level for any content posted while this pattern mentions the privacy level for the location of that content. 

It also _complements_ [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy). The latter defines privacy settings at the beginning. This pattern however gives the chance to change privacy settings every time content is being shared.

Additionally, this pattern _refines_ [Reasonable Level of Control](Reasonable-Level-of-Control). It provides means of control for location attached to content, so it complies with the the latter's solution in a more specific scenario.

Finally, this pattern _may use_ the [Buddy List](Buddy List) pattern. The location information could be seen by different types of users, one of them could be featured in a [Buddy List](Buddy List) or one of its user/search directories.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->