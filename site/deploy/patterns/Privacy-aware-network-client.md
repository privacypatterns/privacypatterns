[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Policy Proxy

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users frequent various domains across the Internet for a number of reasons, each controller having their own set of policies to which users are held. The need for users to understand these policies is shared by most controllers, as catering to an international audience enhances the legislative impact. One such impact is the need for informed consent. Not understanding the purposes and means for personal data processing invalidates consent, which makes that processing unlawful. There are however numerous other requirements for these controllers, which tend to make their policies verbose and complex.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Privacy policies are typically written to satisfy legal requirements ahead of conveying concise and easily understandable information to users. This makes users less informed overall.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to read through long policy documents on each site they visit while browsing the Internet
- Users want to understand any notable risks or tradeoffs of using a site, preferably before being subject to them
- Controllers want to adhere to the many requirements of law, in a manner that is balanced and best reduces risks for them
- Controllers also want users to have a pleasant user experience without enduring shocking revelations or underhanded agendas

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide a privacy preserving proxy which securely parses and interprets the privacy policies of controllers, supplying users with standardized and easily understood summaries of those policies.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

_Figure 1 [of the paper] shows a class diagram for the relationships between the user, the server, and the proxy. Each server can publish many policies and each user can be made aware of many policies at a time through the proxy._

_In Figure 2 [of the paper], a user wishes to access some information or interact with files on the server, which publishes its privacy Policy. The access occurs in the following sequence:_

- _The User interacts with the Server through a network Client._
- _The Client consults the Proxy for privacy policies._
- _The Proxy discovers the correct Policy (or Policies) made available by the Server, for the information or files in question._
- _The Proxy displays a user-friendly screen to the User requesting approval of the Policy, prior to allowing access to the information or permitting the interaction._
- _The User makes a decision after reviewing the Policy._

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_Design and implement a proxy able to parse and interpret privacy policies written in some standard language. This proxy could be built as a specialized version of the Proxy pattern [by the Gang of Four]. The proxy could be able to interpret several privacy languages or just one of them. Successful use of the pattern requires that the proxy can understand the server’s privacy language._

_Design and implement a secure communication channel between network clients and their proxies. This is necessary to avoid interception of the user choices by malicious [actors]._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_The user's awareness of the privacy policy rises so that more informed decisions can be made. The proxy is able to automatically detect changes of the privacy policy. A separate secure connection is needed for the proxy for every access to an area which is secured by a privacy policy. Policy constraints need to allocate local storage in the client. An attack on this could lead the user to decisions which [they] would otherwise not do. If there are any breaches of privacy it can be blamed on the client if [they] did use a privacy-aware client for a particular access._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Alice uses several web-based services but is not aware of the their privacy policies. Even when she reads the policies, she is still not aware of the actual implications of the legal description. In the absence of other solutions, she does not read the policies and does not understand the ramifications._

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_JRC P3P Proxy Version 2.0 is a P3P user agent acting like an intermediary. Depending on the specified privacy preferences of a user, it controls the access to web servers. Another known P3P user agent is AT&T Privacy Bird. Privacy Bird is a tool warning users if privacy policies of visited websites are not matching with their individual privacy preferences._

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Awareness Feed](Awareness-Feed), [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Labels](Privacy-Labels), [Privacy Color Coding](Privacy-color-coding), [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), and [Privacy Aware Wording](Privacy-Aware-Wording).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) (like [Impactful Information and Feedback](Impactful-Information-and-Feedback)) and its methods for establishing awareness go well with accessible policy aspects like this pattern.

Interpretations of privacy policies and their expression in easily understood summaries could be improved with [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), and [Privacy Color Coding](Privacy-color-coding). This makes for a more accessible solution with visual cues.

Accessible policies like these go well with [Abridged Terms and Conditions](Abridged-Terms-and-Conditions), as they _complement_ its need for policy summarization.

Additionally, where this pattern securely standardizes privacy policies into an accessible format, this format is complemented by [Privacy Aware Wording](Privacy-Aware-Wording).

This pattern may also be _used_ by the [Platform for Privacy Preferences](Platform-for-Privacy-Preferences) pattern. The context and problem overlap that of this pattern, its solution's implementation describes elements which already exist in [Privacy-Aware Network Client](Privacy-aware-network-client).

_The [Privacy-Aware Network Client](Privacy-aware-network-client) [_refines_] the Proxy pattern_, while the Web Shopping Process pattern _is one of the patterns most likely to [_complement_] this pattern_. This pattern also _complements_ Adaptive Web Applications, _patterns for web applications that change their behavior according to the current user. They would display more or less complete privacy disclosures depending on the type of user._

### [Sources]
<!-- References to the original source of the pattern.-->

M. Sadicoff, M. M. Larrondo-Petrie, and E. B. Fernandez, “Privacy-aware network client pattern,” in Proceedings of the Pattern Languages of Programs Conference, 2005.

“privacypatterns.eu - collecting patterns for better privacy,” privacypatterns.eu, 2017. [Online]. Available: https://privacypatterns.eu/. [Accessed: 20-Oct-2015].

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->