[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Selective Access Control in Forum Software;
Privacy Options in Social Networks


## Context
<!-- The situations in which the pattern may apply.-->

Users enjoy social reaction when posting content in socially oriented services on the Internet. Though sometimes the reactions are not as ideal. Some content is inappropriate for some audiences, and some users would rather keep some content mostly private. While users are capable of sharing content privately, perhaps through [Private Link](Private-link), they may wish to have better control over whom they share with in their service of choice. The controller providing this service may too want its users to share more specifically.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users want to control the visibility of the content being shared, because it may not currently be appropriate for all users.

#### Forces/Concerns
- Users aim to share content aimed at different kinds of users because they have varying social proximities (friends, family, colleagues, etc.).
- Users want to share content to certain other users based on the content’s nature for that user specifically.
- Users could have trouble over-sharing, dealing with content aimed at the wrong audience, or under-share as a precaution.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

_Provide users with the option to define the audience of their contributions by specifying the access rules to their [content]._

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->


### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Implement visual controls to help users to define access control rules when they create or modify content.

These rules could be defined based on users, groups of users, or based on context-aiding attributes like age or location. For groups, it should be possible to directly define who may view the post being published (e.g. a post with personal data aimed only at a group of close friends). Contextually, it may be possible to define an attribute constraint based on whom in general the post is intended for (e.g. a post aimed at people in a specific town or region).

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- Users have the possibility to control access as they want in every submission. It allows configuration based on kinds of users or the content's context.

#### Liability
- Users could find granular configurations time consuming or tedious, so a default configuration for new submissions would be helpful.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- Facebook
- Youtube

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Selective Access Control](Selective-Access-Control)
 is complemented by [Private link](Private-link), which focuses on private sharing with anonymous users while this pattern defines the audience for a contribution. It is a part of the [Support Selective Disclosure](Support-Selective-Disclosure) compound pattern, and thus may be used by it.

This pattern _refines_ [Reasonable Level of Control](Reasonable-Level-of-Control) in a socially oriented service context. It _complements_ both [Discouraging Blanket Strategies](Discouraging-blanket-strategies) (more flexible privacy setting management) and [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility) (selectively providing location access).

Despite focusing on the choices within access control, decisions which users make should still be informed, and explicit, with the consent involved uncoerced. Therefore, this pattern also _must use_ [Lawful Consent](Lawful-Consent).

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

Drozd, O. (n.d.). Privacy Patterns Catalog. Retrieved January 25, 2017, from http://privacypatterns.wu.ac.at:8080/catalog/

Fischer-Hübner, S., Köffel, C., Pettersson, J.-S., Wolkerstorfer, P., Graf, C., Holtz, L. E., … Kellermann, B. (2010). HCI Pattern Collection – Version 2.


<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->