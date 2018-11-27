[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Icons

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Services (and products) which users use usually handle user data in ways which justify the use of a privacy policy. These documents are however made for legal purposes first and foremost and thus must cover a lot of detail rigorously. Users however are exposed to many of these documents when they seek to delve into the practices of each of the services they use. Controllers of these services realize the difficulty apparent in understanding full policy documents, but need users to understand risks if their processing consent is to be valid. Some approaches used to simplify policy are the layering of detail levels, general summarization, and contextual explanations. However, even these are subject to shortcomings.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users struggle to understand privacy policies, even when reduced to a reasonable length. This discourages them from putting in the effort required to understand risks to their data, and invalidates consent.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to understand the risks to their data in using a service, but do not want to read long or overly complex policies
- Many users want to be able to decide for themselves which policies apply to them, but do not want to read complex or time consuming summaries just to identify them
- Controllers need users to be informed before their data may be processed
- Controllers do not want to inconvenience users by making them read the privacy policy document intended for lawyers

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Use privacy icons to aid in describing, grouping, and distinguishing the various policies in a privacy policy document. The icons should not allow for misinterpretation, which shall require user testing. Using consistent icons in a standardized way will promote understandability.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

In this pattern, privacy icons should not be used in place of the full policy document, but used to augment it. They should be shown in a manner which explains the policy explanation, excerpt, summary, or full detail as appropriate. Examples of usage include describing kinds of data processed, means, purposes, and legitimate interests or other justifications.

This usage should aid users in determining not only whether to further explore a policy, but also a rough idea of what each policy entails. More than one icon may be used per policy to achieve this, so long as the content becomes less complex.

Icons should be consistent and yet distinguishable from one another. This may justify a certain size limit. The icons should also be self-explanatory. These aspects need verification from a representative sample of the user population.

Furthermore, using standardized icons aids in both understanding and in promoting further use, but should not conflict with the norm. Doing otherwise may confuse users. _If Icons are used in the same way on many of the applications or websites the user visits, it will be easy for the user to learn their purpose and to accept them as assistance. When users are aware of the icons from other purposes it will be also become more easy for them to create a mental model which supports them when reading a policy_.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Without dedicating too much effort, a user may quickly determine the potential risks of processing under a given policy. The user will be able to also quickly locate the other relevant policies both when first using a service and when revisiting policy.

When the icons are sufficiently standardized, or at least for the subset which are, the user will not first need to familiarize themselves with explanations. Where not the case, education can assist in changing this if the icons are indeed widely used and consistent.

The use of this measure will make policy more transparent, which will enhance the level of trust placed by users. Users which provided an invalid form of consent due to lack of policy understanding may then choose to retract it, or modify permitted usage.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Alice buys a fitness tracker and she is aware that the device collects her location, and sends it to a central web service in order to provide her with her fitness statistics (her fitness routes, the time spent...). [She immediately consents to this even though it asks to first read a privacy policy.] The device controller [consequently] aggregates this data and provides a business analytics service to third parties._

_Alice is totally unaware of this secondary use of her data and may not agree to it. But accessing this policy involves accessing a website and going through a lengthy and legally oriented document._

Comparatively, the tracker could have provided a short policy summary on the packaging using icons to convey more information with less space. Alice would have noticed an icon she recognized to convey third party sharing. Curious of whom this third party might be, and what extra risks she might be taking, she searches the online policy and finds it to be a company she does not trust. As a result she would not have consented, and potentially not purchased the device.

_See also the Privacy Icons entry at [Ideas for a Better Internet](https://cyber.harvard.edu/i4bi/Privacy_Icons) (kind of a pattern repository by the Berkman [Klein] Center for Internet and Society in Harvard)._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



## See Also
<!-- Any pointers to relevant information, not contained in the subfields below.-->

Recital 60 as well as Art. 12(7) of the General Data Protection Regulation suggests the use of standardized icons, informing users in an _easily visible, intelligible and clearly legible manner_.

### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback), [Informed Secure Passwords](Informed-Secure-Passwords), [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), [Privacy-Aware Network Client](Privacy-aware-network-client), [Awareness Feed](Awareness-Feed), and [Privacy Color Coding](Privacy-color-coding). It also implicitly _complements_ [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides) through [Awareness Feed](Awareness-Feed).

As a visual cue, this pattern aids in providing [Impactful Information and Feedback](Impactful-Information-and-Feedback) by augmenting it with quickly interpreted information. These visual cues additionally help towards [Informed Secure Passwords](Informed-Secure-Passwords), as they may indicate password strength and policy.

Visual cues like this pattern also aid in providing accessible policies, and thus _complement_ [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), and [Privacy-Aware Network Client](Privacy-aware-network-client).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) and its methods for establishing awareness also go well with visual cues like this pattern. It also implicitly aids [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), which provides visual representation to highlight trust levels to the user.

This pattern _leads to_ [Appropriate Privacy Icons](Appropriate-Privacy-Icons). This pattern encourages the use of privacy icons to describe a privacy policy, but this usage has opportunities for misuse which [Appropriate Privacy Icons](Appropriate-Privacy-Icons) exists to address.

Like this pattern, [Privacy Color Coding](Privacy-color-coding) provides its own way to tackle an overlapping and quite similar problem. This features the understanding of the privacy policy in both cases, as well as privacy settings in [Privacy Color Coding](Privacy-color-coding). These patterns may work together to integrate a solution illustrating with both color and imagery.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications, vol. 2, no. 1, pp. 72–77, 2010.

European Parliament and Council of the European Union, “General Data Protection Regulation,” Official Journal of the European Union, 2015.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->