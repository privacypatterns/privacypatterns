[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Icons

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers offering services (or products) to users have various policies regarding privacy. These typically exist within one document catering to legal evaluation, and thus one which is quite long and complex. Users are often encouraged to read such a policy, though as users are exposed to many of these, they mostly do not. As a countermeasure to this, controllers partition their policies, provide simplified versions, or bring relevant aspects to user attention when needed. One method of simplification is the use of privacy icons. This approach has its own issues for controllers to consider.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Privacy icons are easily misunderstood, as they are oversimplified concepts using imagery shared with numerous other concepts. Even when fully grasped, important information may be overlooked when finer details play a role.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to regularly read long and complex policies
- Users want to understand what risks their data undergoes by using certain features of the service
- Controllers want users to actually take note of the relevant policies rather than process their data without informed consent
- Controllers want to save space so that they can have more appealing interfaces

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Introduce the user to a consistent set of icons, carefully grouped and not excessive, and explain their meaning. Explanations should be short and concise, and these paired with the icons should be put through user tests. Users should be able to understand the icons when shown them in context.

While these icons should be able to stand alone, it is still important that a user has access to clarification. As such provide a mechanism, such as an on hover tooltip, which further explains what the icon attempts to convey. The icon should also be machine readable.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

When selecting appropriate icons for conveying information, take the following into account:

- primarily prevent misunderstanding,
- use icons users are familiar with,
- do not reassign meaning to familiar icons, and
- keep icon style and design consistent.

Perform tests with actual users to determine whether there is any room for misunderstanding and adjust accordingly with further tests. If a concept cannot be reliably conveyed through an icon then it must not be primarily provided as one.

Regardless of whether an icon perfectly conveys a policy, always allow users to investigate further. This can be achieved through hover, click or tap mechanisms. A tooltip, for example can provide a short explanation, but the full policy being depicted should also be available. As such, a context menu may also be appropriate, especially on single tap for mobile users.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_Informed users are able to make informed decisions which lead to a more responsible handling of private information. Since icons are an integral part of any kind of [interface], it is important that they convey the right information. Furthermore users are only able to use [a service] to its full [extent] when they trust it._ This effort towards transparency will assist in creating that trust.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- _The current version of the European Union's forthcoming General Data Protection Regulation includes a set of privacy icons that should be used within services which affect citizens in the EU, and by controllers who operate within the EU._
- _https://disconnect.me/icons_ <br><img width=200 src="https://s3.amazonaws.com/images.disconnect.me/images/privacy_icons/how-privacy-icons-work-2-2x.png"/>
- _https://wiki.mozilla.org/Privacy_Icons_ <br>![Retention](https://wiki.mozilla.org/images/e/eb/Retention_3months.png) ![3rd-party](https://wiki.mozilla.org/images/2/2e/Intended_thirdparty.png) ![No-ad-share](https://wiki.mozilla.org/images/5/5a/Noshare_ads.png) ![Statutory](https://wiki.mozilla.org/images/e/e8/Statutory_law.png)
- Yle.edu privacy icons at the [Internet Archive](https://web.archive.org/web/20151024095327/http://yale.edu:80/self/psicons.html)
- [Privacy Bird policy matching icons](http://www.privacybird.org/tour/1_3_beta/tour.html)
- _https://netzpolitik.org/2007/iconset-fuer-datenschutzerklaerungen/_ <br>![icons from netzpolitik](https://cdn.netzpolitik.org/wp-upload/data-privacy-icons-v01.jpg)
- _http://knowprivacy.org/policies_methodology.html_
![KnowPrivacy.org Icons](http://knowprivacy.org/images/iconset.png)
- _http://www.privicons.org/_ ![dont-attribute](http://privicons.org/files/gimgs/dont-attribute.png) ![dont-print](http://privicons.org/files/gimgs/dont-print.png) ![delete-after](http://privicons.org/files/gimgs/delete-after.png) ![keep-internal](http://privicons.org/files/gimgs/keep-internal.png) ![please-share](http://privicons.org/files/gimgs/please-share.png) ![keep-secret](http://privicons.org/files/gimgs/keep-secret.png)
- _The EU-funded PrimeLife project also proposed a set of privacy icons_
- _The Use of Privacy Icons and Standard Contract Terms for Generating Consumer Trust and Confidence in Digital Services CREATe Working Paper 2014/15 (October 2014)_

_Currently, most of these are only applied by client-side solutions._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



## See Also
<!-- Any pointers to relevant information, not contained in the subfields below.-->

Recital 60 as well as Art. 12(7) of the General Data Protection Regulation suggests the use of standardized icons, informing users in an _easily visible, intelligible and clearly legible manner_.

### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback), [Informed Secure Passwords](Informed-Secure-Passwords), [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), [Privacy-Aware Network Client](Privacy-aware-network-client), and [Awareness Feed](Awareness-Feed). It also implicitly _complements_ [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides) through [Awareness Feed](Awareness-Feed).

As a visual cue, this pattern aids in providing [Impactful Information and Feedback](Impactful-Information-and-Feedback) by augmenting it with quickly interpreted information. These visual cues additionally help towards [Informed Secure Passwords](Informed-Secure-Passwords), as they may indicate password strength and policy.

Visual cues like this pattern also aid in providing accessible policies, and thus _complement_ [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), and [Privacy-Aware Network Client](Privacy-aware-network-client).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) and its methods for establishing awareness also go well with visual cues like this pattern. It also implicitly aids [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), which provides visual representation to highlight trust levels to the user.

This pattern is _led to_ from [Icons for Privacy Policies](Icons-for-Privacy-Policies). While this pattern explains how privacy icons may be misused and proposes how to use them appropriately, [Icons for Privacy Policies](Icons-for-Privacy-Policies) encourages their usage in the first place to describe a privacy policy. That usage is prone to pitfalls which this pattern addresses.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications, vol. 2, no. 1, pp. 72–77, 2010.

Holtz, L. E., Zwingelberg, H., & Hansen, M. (2011). Privacy policy icons. In Privacy and Identity Management for Life, pp. 279-285.

Heidelberg and Holtz, L. E., Nocun, K., & Hansen, M. (2011). Towards displaying privacy information with icons. In Privacy and Identity Management for Life (pp. 338-348). Springer Berlin Heidelberg.

European Parliament and Council of the European Union, “General Data Protection Regulation,” Official Journal of the European Union, 2015.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->