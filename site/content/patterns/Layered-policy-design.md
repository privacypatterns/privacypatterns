[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Layered Privacy Policies / Multi-Layered Notices

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

As the law in various parts of the world requires a number of considerations, policies tend to be long, complex documents which are difficult to understand. The same holds true for privacy, which supplies its own legislative concerns, particularly regarding data protection. The [data] controller in these instances, provides users (data subjects) with services (or products) to which privacy policies apply. These suffer the same detail rich and superfluous content pitfalls as other policies, though are legally required to be available to users in a manner which is both understandable and complete.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The controller needs to balance comprehension and comprehensiveness in their privacy policies in order to ensure that users choose to inform themselves. If they do not, then processing their information is unlawful.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to read complex and long policies, and most will simply not read them unless they are very concise
- Users still want to understand any important distinctions which might cause them risks they would rather not take
- Controllers want to comply with legal requirements to avoid punitive measures as well as bad publicity
- Controllers also want users to know what they are signing up for when using a service, without being unpleasantly surprised

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Extract the most crucial aspects of the privacy policy, which users are most likely to read, to the foreground. Nest successive detail levels within these components so that users can quickly find information that is relevant to them.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_A short notice may provide a summary of the practices that deal with personal data, highlighting those which may not be evident to the data subject. Then, a longer policy may provide specific information, split into sections, detailing any uses of personal data. And finally, the whole legal text of the privacy policy can be specified._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_[Helps users] understand what they can expect about their personal data from a data controller (in terms of which data is managed, for which purposes, etc.)_ Also _fosters simplicity, transparency and choice._

_However, [multiple] versions of the privacy policies [need to] coexist, which may introduce potential contradictions; in particular, the data controller must ensure that updates are performed in parallel and coherently._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_See examples at [Terms of Service Didn't Read](https://tosdr.org/). The average user would take [76 work days to read the privacy policies they encounter each year](http://www.theatlantic.com/technology/archive/2012/03/reading-the-privacy-policies-you-encounter-in-a-year-would-take-76-work-days/253851/)_.

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

- _An early [example of layered privacy policy by TRUSTe](http://www.truste.com/labs/layered-notice/short-notice/example-policy_SN.html) and its mobile version, which are discussed in [Pinnick, T. Layered Policy Design](http://www.truste.com/blog/2011/05/20/layered-policy-and-short-notice-design/). TRUSTe Blog, 2011._
- _There are several sites that use this pattern nowadays, albeit not always with that name. One example is Banksia Villages, which provides a [Simplified Privacy Policy](http://www.banksiavillage.com.au/simplified-privacy-policy/) as well as an [Extended](http://www.banksiavillage.com.au/privacy-statement/) one._
- _It is recommended by British Information's Commissioner Office in its [Privacy Notices Code of Practice](https://ico.org.uk/media/for-organisations/documents/1610/privacy_notices_cop.pdf) (p.55)_
- _This concept is quite similar to the [Creative Commons license layers](http://creativecommons.org/licenses/) in the field of copyright management._

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Awareness Feed](Awareness-Feed), [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Labels](Privacy-Labels), [Privacy Color Coding](Privacy-color-coding), [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), [Privacy Aware Wording](Privacy-Aware-Wording), and [Privacy Policy Display](Privacy-Policy-Display).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) (like [Impactful Information and Feedback](Impactful-Information-and-Feedback)) and its methods for establishing awareness go well with accessible policy aspects like this pattern.

Interpretations of privacy policies and their expression in easily understood summaries could be improved with [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), and [Privacy Color Coding](Privacy-color-coding). This makes for a more accessible solution with visual cues.

Accessible policies like these go well with [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), as they _complement_ its need for policy summarization.

Additionally, where this pattern extracts the most crucial aspects of the privacy policies into layers, these layers could be written following [Privacy Aware Wording](Privacy-Aware-Wording). This improves the accessibility of the layered privacy policy. Similarly, [Privacy Policy Display](Privacy-Policy-Display) benefits from both of these, in this pattern particularly from its multi-layered approach.

Implicit complementary relationships to this pattern include [Dynamic Privacy Policy Display](Dynamic-Privacy-Policy-Display) and [Policy Matching Display](Policy-matching-display). Both of these exist through their use of [Privacy Policy Display](Privacy-Policy-Display).

### [Sources]
<!-- References to the original source of the pattern.-->

Pinnick, T. Layered Policy Design. TRUSTe Blog, 2011.

Christoph Boesch, Frank Kargl, Henning Kopp, and Patrick Mosby, “privacypatterns.eu - collecting patterns for better privacy,” 2017. [Online]. Available: https://privacypatterns.eu/#/?limit=6&offset=0. [Accessed: 18-Jul-2017].

Multi-Layered Notices Explained, White Paper, The Center for Information Policy Leadership, Hunton & Williams, http://mddb.apec.org/documents/2005/ECSG/DPM1/05_ecsg_dpm1_003.pdf

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->