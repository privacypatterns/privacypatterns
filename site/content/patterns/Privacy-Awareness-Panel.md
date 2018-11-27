[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Awareness Panel in Collaborative Workspace

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Numerous services (and products) make an impact on user privacy in ways which are not immediately apparent to the user. Unaware and thus uninformed users are likely to make regrettable decisions in the services they use. Certain kinds of information, especially when combined or viewed over time by others, can reveal details about the user they did not intend. The consent for these disclosures cannot be valid if they do not understand the risks inherent in doing so. Controllers of such personal data therefore seek to minimize these risks.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users do not anticipate the pitfalls of disclosure. They may be under the false impression that their activities are inherently anonymous.

This can manifest in the use of online services where a user shares information with an unknown audience using a pseudonym. Entities within can potentially discover detail the user does not intend, especially if the user loses track of who knows or has access to what. Providing publication history, or reusing aliases in various services, for example can have unintended consequences.

Furthermore, the controller themselves typically has more capability for identifying the user. If users do not know any better, they might behave or contribute in a manner which assumes they cannot be identified.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users sometimes want to use services without being identified, but do not know how to maintain their pseudonymity
- Users want to understand what using a service might reveal about them to various parties
- Controllers want to protect users from unknowingly making disclosures which are invasive
- Controllers do not want to process any personal data without informed consent

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide the user with reminders on who can see the content they have or will disclose, what is done with it, why, and how it might become identifying.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

_First, it should be made clear to users which persons will be able to access their contributions. Second, users should know that [controllers] get additional information about them for instance their IP addresses, browser versions, location information etc. and thus that they are not completely anonymous [within] the [service]._

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The potential consequences of content disclosure may depend on the service in question, and should be investigated in a general sense.

The user does not need to be shown every potential consequence, but rather must be aware of the need to consider their submission before disclosure. This may require access to an illustrative example to assist in conveying the risks in an accessible manner.

Prior to disclosure, controllers should primarily indicate the access capabilities of different types of users and entities. For example, those on a [Buddy List](Buddy-List), or unauthenticated users. Entities include themselves, their processors, and any third parties. Wherever this might entail personal data, purposes and means are also required before informed consent to the submission. If the user is already aware of these, reminders need not be as frequent and prominent.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_Improved awareness of users about who exactly will be [and has been] able to see the [content they disclose] will hopefully make them consider [disclosure] more carefully_.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

In a forum setting, a Privacy Awareness Panel may include login and account information, any personalizations, as well as information relating to their browser, session, IP, or other metadata which can uniquely identify them to a degree. It could also show post and user interaction history, and what, if any, of this information is more widely available or public. The panel should be easily located and known about by users, for instance introduced on first use of the forum. Unauthenticated users should also have access to this panel, though there would be less information on these users.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is a component of the compound pattern, [Awareness Feed](Awareness-Feed). As such, this pattern _may be used_ by it.

This pattern _complements_ [Who's Listening](Whos-Listening), [Impactful Information and Feedback](Impactful-Information-and-Feedback), and [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback).

[Who's Listening](Whos-Listening), like this pattern, tries to show who can see disclosed information. It specifically allows for monitoring who accesses the same content as the user. Comparatively, this pattern allows monitoring what access is occurring and how it might become identifying. These could work together to have a more complete solution which covers released and accessed content monitoring.

Privacy Awareness Panel may additionally take analytical provisions from [Impactful Information and Feedback](Impactful-Information-and-Feedback) to supply information on potentially sensitive activity. [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback) provides essentially equivalent information to this pattern, together covering more contexts. However, these are also _similar_ patterns.

This pattern is additionally _refined by_ [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation). While the problem this pattern aims to solve is overlapped by [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation), this pattern considers past disclosure decisions which mirrors knowledge of more specific aggregation risks in general.

This pattern also _complements_ Privacy Options in Social Networks, Selective Access Control in Forum Software, and Privacy Enhanced Group Scheduling.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

S. Pötzsch, P. Wolkerstorfer, and C. Graf, “Privacy-awareness information for web forums,” Proceedings of the 6th Nordic Conference on Human-Computer Interaction Extending Boundaries - NordiCHI ’10, no. June, pp. 363–372, 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

G. Aggarwal and E. Bursztein, “An Analysis of Private Browsing Modes in Modern Browsers.,” USENIX Security …, pp. 1–8, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->