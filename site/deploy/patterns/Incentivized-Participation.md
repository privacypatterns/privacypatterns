[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Reciprocity / Fair distribution of efforts / Win-win situation / Pay-Back

## Summary
<!-- One short paragraph summarising the pattern.-->

Users of a system have varying privacy concerns, and different sensitivities associated with their personal information. These users need ways to contribute without leaking sensitive details, or to perceive a worthwhile tradeoff for those details. This can be achieved through social encouragement (i.e. participation and shared trust), direct value exchanges (discounts and giveaways), or some other derived value (e.g. positive reinforcement).

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

A data controller derives various values from the participation of its users (i.e. data subjects). The more that these users participate, explicitly providing context and implicitly providing metadata (e.g. statistics and telemetry), the better the controller fares in a number of respects. Despite this key relation, over-sharing can greatly infringe upon a user's right to privacy. Many controllers therefore aim to respect this right when benefiting from user interactions.

As the controller should recognise the necessity of specific, informed, and freely given [Lawful Consent](Lawful-Consent), users are made aware of the pitfalls of such a system. As they are informed, perhaps through a combination of a [Privacy Dashboard](Privacy-Dashboard) or [Awareness Feed](Awareness-Feed), users may balance the privacy related tradeoffs.

This minimises the privacy risks taken according to the user's personal informed choices, and protects the controller from inadvertently undermining the user's privacy. The controller still desires participation, however, and may therefore make additional concessions or provisions to help make the tradeoff worthwhile or non-existent. The controller may complement its strategy with more granular choice in order to achieve this, such as with [Selective Disclosure](Selective-Disclosure) and [Selective Disruption](Selective-Disruption).

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Controllers which gain from user activity want to push for participation, but this can negatively affect users.

Users have varying degrees of concern about their privacy, and do not respond to different forms of encouragement the same way. By penalising under-sharing and inactivity, or being misleading, users become alienated and distrusting of the system. As such this problem has multiple elements. These include asymmetric returns on investment, and the standard incentive deficiency, where users lack the encouragement to participate.

#### Asymmetric Returns on Investment
In many situations, some benefit more than others. In extreme cases, users may benefit through minimal participation and thus contribute very little to the system's derived value. Those who do not perceive an acceptable value despite considerable contribution may then withdraw.

An example of this behaviour might be seen in dating sites where users with only a flattering picture may succeed more than those with detailed profiles. Similar cases can be made for other social media, as well as with asymmetric bandwidth on peer to peer sharing. With torrent technologies, this is often referred to as 'leeching'.

#### Standard Incentive Deficiency
Users which provide limited or vague information due to privacy concerns may have less opportunity for participation. Another way this occurs is when they are not driven by positive social reinforcement. The lack of friends, followers, potential matches, etc. leads to user inactivity.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->
- Controllers want to encourage users to grow their networks and further participate, though this may increase their exposure to privacy concerns and bad user experience.
- User concerns over privacy may cause for adverse reactions to unwelcome changes or discoveries in policy, especially attempts to goad or guilt-trip users into activity (e.g. "This user does not participate").
- Where controllers sanction users for inactivity, or undesirable activity, they affect user experience, for better or for worse.
- Controllers may wish to lock secretive users out of certain services (or products), but this is likely to alienate them.
- Users may want to use a limited set of functions which do not undermine their privacy, whereas controllers derive less value from these users.

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Privacy concerns need to be met with valid reassurances about issues which matter to the user. Firstly, users should know that the system holds their preferences in high regard. Secondly, they should perceive real value in their participation. Finally, if desired, users should be assisted in a smooth transition into the ecosystem.

#### Rationale
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The three elements of the solution are elaborated on in the following sections.

#### Adherence to Preferences
Users need to know they are able to participate without the system undermining their personal preferences. This should apply from the very first usage of a system. Everything the system does globally must adhere to privacy friendly defaults. Any service which cannot uphold these expectations should be deactivated for new users, and only be enabled once these users consent to the additional processing. Attempts to solicit this should not be invasive.

#### Value Perception
With privacy concerns at ease, encouraging equal participation entails reciprocity. These can be in both social and financial forms.

All participation should result in value derivation (social or otherwise) for all participants, and not just individuals. As a consequence of this mindset, the derived benefits of users who do not participate are limited. This secondary effect may also be the primary mechanism for reciprocity, though positive sum approaches will be met with more support.

As an additional measure, or where equality is not feasible, provide an alternative incentive. If not social, then financial incentives (discounts, waived fees) can be provided to active users. This can be limited to those who the system can identify as receiving poor value returns on their contributions. User retention examples tend to be less frequent, with the odd website sending 'come back' emails which promise fee reductions.

>_Note that attempting to pinpoint users based on activity levels may reveal more sensitive characteristics, and as such should in any case require their prior informed consent_.

Another approach is the explicit provision of virtual currency necessary to benefit from the system, those who contribute will then have more currency at their disposal. They may opt to be applauded for their efforts publicly, but again should not be forced to.

Examples of social value perception are the Facebook like/reaction, Google's +1, Reddit Gold, and Twitter's reposting. These approaches are enacted by the users instead of the system, and are therefore less intrusive.

>_The system should permit participation itself without a risk to privacy. Those with low identifiability should not be barred from participation_.

#### Transition Assistance
In terms of computer aided pairing, greater participation may be achieved if users consent to intelligent nudging. Shümmer suggests that users are more likely to participate when their interests are shared with others, and thus, a system would help users identify those with similar interests. This is another solution which relies on prior consent, however. By encouraging interaction between these users, a system would derive more activity and therefore further value.

On the other hand, Shümmer points out that mixing dissimilar users may also result in unexpected activity. It may allow the system to discover notions about its users which were not previously apparent. This is yet another way to increase value, though will likely be far more intrusive than the former. Users should be properly informed of the possible consequences of 'mixing it up'.

In order to ensure that recommendations made by the system do not have increasingly negative side effects, the system should learn from ineffective suggestions. This is limited to where it has permission to do so. Where user activity drops, a system should aim not continue in the same fashion as before. When it climbs, however, the system should improve whatever characteristics likely resulted in that climb.

This can be made more explicit by soliciting feedback from the user themselves, as also suggested by Shümmer. Even this, though, is subject to negative reactions. However, acclimating users to an environment of openness and transparency will also build trust - potentially resulting in the use of services users would not have used otherwise.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->
<!-- May also be used to convey the Resulting Context.-->

Applying the concepts represented in this pattern may have certain trade-offs associated.

* Some users respond negatively to being nudged into participation, it is also intrusive
* Learning about interests may be considered invasive, and should require an opt-in, along with assurances for privacy concerns. Furthermore, any assumptions a system makes about a user due to incomplete or misleading data may lead to further reduced activity. Suggesting unappealing interactions might cause the user to seek alternative social media, or withdraw from sharing altogether.
* Where the system is quite large, it is more resilient against inactive users, and thus can sustain a considerable amount of inequality. However, if an adequate balance is not maintained it may result in an unpredictable ecosystem. Social media giants such as Twitter [have struggled to turn a profit](https://finance.yahoo.com/news/snap-low-ball-ipo-valuation-202105572.html "Snap trying to avoid missteps of Twitter"), while [Facebook's stock price has climbed continually](https://finance.yahoo.com/quote/FB "FB stock price history").

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

Isolating users, and learning from their actions, based on feedback loops requires prior informed and explicit consent, as potentially invasive conclusions may be derived

## Examples
<!--Motivational example to see how the pattern is applied.-->

1. Examples of Adherence to Preferences
 * TUKAN; a collaborative software development environment which introduces Modes of Collaboration: lightweight contexts which filter collaboration possibilities according to user privacy preferences
   T. Schümmer, and J. M. Haake (2001). “Supporting distributed software development by modes of collaboration,” in Proceedings of ECSCW 2001, Bonn.
 * Permission restricted Buddy Lists in Instant Messaging, or more extensive social networks; Allowing users to filter their sharing by access groups which they define.

2. Examples of Value Perception
 * Bulletin Board Systems once limited access to content by the amount shared by the user, similarly torrent systems may employ techniques to throttle those who 'leech' excessively without 'seeding'.
 * Facebook like/reaction, Google's +1, Reddit Gold, and Twitter's reposting

3. Examples of Transition Assistance
 * Comparing public interests or activities with that of other consenting users, to indicate potentially like-minded or counterpart individuals; The system may, at the discretion of the user, also compare elements which are not public, without revealing them, to derive more accurate metrics. This is still however limited to the information the user chooses to provide to the system voluntarily.
 * Birds of a Feather Sessions at Conferences are physical analogues to automated grouping of interests in systems, they can take form in less academic examples as well;
 * Collaborative filtering systems make suggestions based on prominent topics within the entire user base without revealing specific user interests or activities. It then makes recommendations based on the norm.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Incentivized Participation](Incentivized-Participation) is a compound pattern. It _may use_ a combination of [Pay Back](Pay-Back) and [Reciprocity](Reciprocity), while also taking ideas from the notions of Shümmer's Train the Recommender and Birds of a Feather patterns. Alone, these patterns are not formulated in the interest of privacy. However, with the addition of [Incentivized Participation](Incentivized-Participation) and its constituents having a _must use_ relationship with [Lawful Consent](Lawful-Consent), they are a privacy-respecting compound pattern.

* Pre-patterns
 Pay Back; Who’s Listening; Show the Expert; Reciprocity;
 Elephant’s Brain; Find the Guru; Opposites Attract

### [Sources]
<!-- References to the original source of the pattern.-->

T. Shümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on HCHI Patterns, 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->