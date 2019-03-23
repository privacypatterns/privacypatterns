[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

Socially oriented services on the Internet allow their often diverse userbase to share content. These masses of users and shared content are also varied enough to discourage individual attention. Controllers prefer to protect themselves from additional complexity and investment into features which provide them with less data. Users, however, feel in need of privacy settings to distinguish their personal risk appetite from that of the norm. They each have their own ideas about the sensitivities of their information, which makes sufficient controls difficult to implement.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Overly simplified privacy settings following all or nothing strategies could result in over-exposure, self-censoring, and unsatisfied users.

These all or nothing strategies could refer to privacy settings which holistically apply to all content, or to binary (or otherwise deficient) choices for public visibility.

#### Forces/Concerns
- The level of invasiveness depends upon the context of the content being shared.
- Users have differing levels of sensitivity attributed to contexts, and thus different levels to provide their content.
- They trust the controller to different extents.
- Controllers do not want to violate user privacy.
- They want to protect themselves from blame if a user's privacy is violated.
- They want users to produce content which is at least somewhat valuable. (For instance, when nobody can see the content there won’t be an impact in collaborative environments)


## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide users with the possibility to define a privacy level for content being shared with the controller, or with other users. Give them a range of visibilities, so that they can decide the access-level of the content being shared according to different users, or service-defined groups.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->


### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Provide users easily-recognizable visual elements to define the privacy level for each content submission. Use controls, such as (drop-down) lists, combo boxes, etc. to provide a range of possible privacy levels.

The privacy levels could be defined in terms of social group of the users in question to the user who is sharing content. For instance, family, closest friends, colleagues, acquaintances, everybody. This is in line with [Reasonable Level of Control](Reasonable-Level-of-Control) and [Selective Access Control](Selective-Access-Control), where a user might be given the opportunity to define their own groups or set individual privacy levels.

The privacy controls themselves also need to be designed in such a way that it is very clear to users what each setting does and what it means for their privacy.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- Grants users complete control over the privacy of the content being shared, which may lower the bar for them to share certain data they otherwise would not.

#### Liabilities
- Users could find having to set privacy settings every time they share content to be tedious. It would be necessary to define reasonable defaults for privacy settings (least effort for minimal sharing).

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- Facebook.
- Google Plus.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern may be used by [Support Selective Disclosure](Support-Selective-Disclosure), as it makes up a foundation for a compound pattern. [Discouraging blanket strategies](Discouraging-blanket-strategies) may also be complemented by [Selective Access Control](Selective-Access-Control) and by [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility). These patterns support each other to provide more flexible privacy setting management to users.

[Discouraging blanket strategies](Discouraging-blanket-strategies)
 _complements_ [Reasonable Level of Control](Reasonable-Level-of-Control), which features selective and granular sharing and may consider a range of options. These methods complement each other where considering this range.

 This pattern additionally _complements_ the [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy) pattern. While [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy) aims to let users opt-in or opt-out, this pattern handles the way in which users configure their privacy settings. If users were not able to opt-in/out then a blanket strategy would probably be in place.

Finally, this pattern also _may use_ [Buddy List](Buddy-List). Content the user decides to share could be selectively shown only to certain users on the [Buddy List](Buddy-List).

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->