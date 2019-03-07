[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->

## Context
<!-- The situations in which the pattern may apply.-->

Controllers process a lot of personal data within the services (or products) which users use. These users should however be made to understand the risks involved in all the processing. Typically users need to be encouraged to review what data a service uses, and whether they consent to this. When provided with lock icons for certificates, or privacy coordination through color, users often still overlook warnings. Users want information to be streamlined, quick, and easy to digest in order to benefit from a service without delay.

This pattern is focused on the socio-technical domain, as opposed to purely technical, and as such considers a number of factors that do not play into a developer's perspective.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users are frequently unaware of the personal data which a system processes and may use to draw conclusions from. Due to this, they either accept their data's undefined usage, or limit their disclosure, potentially more than needed, which could result in an poorer user experience.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Controllers want users to take note of important notifications, particularly if it prevents users from over or under sharing
- Many users are complacent with not knowing about what a service does with their data, maintaining a disinterest in details
- Users may experience notification fatigue, if they are frequently provided with warnings and access notifications
- Users perceive information and notification appropriateness differently, depending on various contexts

An approach to this transparency which is both noticeable and yet unobtrusive is needed. One which is passively assertive. A purely technical solution is not appropriate, it must also consider physical and social contexts.

This is because personal information has varying levels of sensitivity to users depending upon these contexts (for e.g. a closed room, or a close friend, are contexts in which some personal information may be considered less vulnerable).

## Solution
<!-- A concise description of how the pattern addresses the problem.-->
Provide a framework for socio-technical systems which allow users to consider their privacy in context, and make decisions to cater for their personal needs.

This pattern encourages methods, mechanisms, and interfaces which reflect the history, flow, state, and nature of processed personal data which may otherwise have been hidden.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->
Privacy Mirrors focus on 5 characteristics:

- history, of data flows;
- feedback, regarding the state of their physical, social, and technical environment;
- awareness, enabled by the feedback;
- accountability, from these; and
- change, enacted by the users.

#### History
Logging is possible in technical systems from as little to as much granularity as desired. Whatever is kept needs to have been done so bearing in mind the social implications, i.e. the contexts, which may be important to a user's privacy. Who was involved in the processing, where was it processed, when, how, why, etc. are relevant.

  The past must be summarized in a way which is easy to understand, but still detailed enough to identify less obvious risks. What information is relevant to different users as opposed to that which is seen as unnecessary noise? What isn't socially acceptable to record? How long must this be kept, should it deteriorate or simply vanish?

#### Feedback
Logging is of little (or detrimental) use if not transparent and appropriately accessible. There needs to be a way to disseminate this history, state, and flow information to the users without inducing notification fatigue and without exposing information which is not contextually acceptable. Visual cues may be less distracting than the use of other senses, and capable of conveying much more information. However, some contexts may call for more distracting notification. A user should be able to choose whether, how much, and by what means they are notified - as some people have higher tolerances, or different tolerances, for distraction than others.

A distinction is suggested between notifications which require 'glancing', 'looking', or 'interacting'. Examples of these in an Android system are toast notifications (ambient display), heads up notifications (in the status bar), and pop up notifications, respectively. Ideally, each level will be available to cater to a user's personal preference. Information about a certain context should by default be found in the location where users would naturally look for it.

In feedback, how should different senses be addressed, to what level, where should it be shown, for how long, etc. These are aspects which should ideally be user configurable, with reasonable defaults. This should cater to what each user determines is important.

#### Awareness
This concept includes the user's knowledge about how they feature in the system, how others feature with regards to the user's personal data, as well as what capabilities and constraints entities are given. The level of information and notification to convey depends on the user, as some will want more detail than others - meeting this balance will make the user more comfortable with their involvement.

This awareness can be divided amongst the three domains:

- Social: Notable usage patterns on access, being able to correlate this with others and encourage better decisions.
- Technical: Understanding the limitations of the system, and the capabilities if used correctly, to use the system more effectively. Users should understand the flow, state, and history of their personal data in the system.
- Physical: Having regard for the repercussions of their physical state, including location, being perceivable by the system.

In maintaining awareness, one difficulty is in adequately informing users of the flows, history, and states of more complex systems. Meeting the balance between overwhelming users and underwhelming them can be difficult.

#### Accountability
In a ubiquitous system, interpersonal information is something which should ideally be traceable to show who can access, and has accessed, what. In order for social governance to take place, people should be held accountable for what they do. When personal data is accessed, it should be clear who did so, and when - to both the person concerned and the one doing the accessing. Other matters such as how it was accessed, where from, or why, are also subject to the social norms and contexts placed on these aspects by those concerned. This 'you-know-that-I-know-that-you-know' effect controls the (mis)use of shared personal information.

Another balance to make is how much accountability is necessary. Too much exposure of usage may create tension, while too little may do the same. Being able to reliably link usage to an individual is also a matter to consider.

#### Change

The social norms brought into the foreground, or created through the previous steps will bring about changes in usage. Being able to anticipate repercussions for actions, will cause users to think more carefully about what they reveal and what they access, as well as how (often), when, why, etc. If a user can determine that certain changes to information flow will be overall beneficial, the user may decide to act on those changes. This applies to both the user's needs, and that of the those around them.

Understanding the resulting effect of sharing or controlling information will help users find a level which suits them. Although some may retreat in-wards upon realizing the consequences of over-sharing, or over-share when the consequences of doing so are not immediately apparent. This is why meeting the balance is important. There is also the matter of outliers, where some users will not be as comfortable or as uncomfortable as the majority. Therefore, having the means to share less or more than others is important.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->
Implementing this pattern is a matter of providing logging, reporting, and other informational access and notifications on user-selected/filtered, appropriately defaulted, relevant usage data. The data provided to the notified users should not intrude on other users' sensitive information, apart from the activities which involve the notified users.

The right balance needs to be met, both in the selected defaults and in the minimum and maximum levels available to the users in settings. The settings should be found easily, as should additional information. Balanced defaults can be determined from identified norms among users, while minimums should cater to the least interested and maximums to those most interested in their data's usage.

Users should ideally be able to choose the medium for the notifications, and for information retrieval, which best suits them. Candidates include email, push notifications on mobile devices, or simply from the same interface as the rest of the system.

An effort can be made to slowly introduce users to this system. For example, starting out more privately and then gradually revealing future information so that users have time to adjust their usage. This way users are less likely to portray an undesirable usage pattern.

These correlations may also be stored in a secure way, so that they cannot be viewed arbitrarily by backend users. If users are given assurances about what information can be seen by who, including backend users, they will be more willing to make use of the information and notification system.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->
Advantages:

- Users are less likely to portray a negative usage pattern if they are aware of the correlation of their actions to it. This results in a more positive user experience once adjustments have been made. In some cases, this can increase productivity, and or efficiency in using the system.

Disadvantages:

- Initial discovery of the way they appear from the outside may lead users to retreat into themselves and disclose little to no information, cease using the system, and or call for their usage to be erased. This can be mitigated by slowly introducing users to the system without immediately providing intricate usage history.
- Even if introduced slowly, users may be dissatisfied with their usage pattern as it appears to the system (and any authorised backend users). These correlations should ideally be difficult (or impossible) to retrieve if not by the user in question.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->


## Examples:
<!--Motivational example to see how the pattern is applied.-->
A Groupware Calendar System (GCS), 'Augur', Tullio, J., Goeckes, J., Mynatt, E.D, and Nguyen, D.H. Augmenting Shared Personal Calendars. Submitted to UIST'02 Paris, France.

History: This example logs all access to the shared calendars by the group members, and if the calendar is public, especially the users which are not expected to do so. The sharing of these calendars produces social norm information, that is, social trends from how members use the information, spread it, or dismiss it. This includes the usual when/how/what/etc. information around access. As the members are presented this analysis, they are given the ability to react to it, and adjust the sharing or details within their calendars to their privacy needs.

Feedback: Augur informs users who accessed the calendar, when, where, and what in particular was seen. This is especially useful for shared calendars since the feedback mechanism allows users of the calendar to adjust what they add to it, or who is permitted access the information.

While a GCS notification, or information display could reside anywhere, the 'native habitat' for calendar related information is in the calendar application, a mail application, or if the user chooses and if necessary, the area where time sensitive notifications usually appear.

Awareness: Users are given information at the chosen detail and notification levels in order to feel comfortable with the system. Since monitoring can negatively impact the users, the level of this is also configurable.

Accountability: Social norms around mutual understanding of what will/has been accessed in this example will affect calendar viewing and sharing. Prying into other's affairs without reasonable explanation could have social (or other) consequences. This includes a distinction between occasional viewing and constant checks. This may result in less information being shared, different access control settings, or an inquiry into the usage, which may address underlying issues.

Change: Being able to see cause and effect around different personal data sharing, hiding, or specific information flows, will likely bring about changes in how users use the shared calendar system. Important information may be shared while leaving less important details out, increasing efficiency.

### [Known Uses]:
<!-- Pointers to various applications of the pattern.-->
WebAware provided a view of page accesses, this was extended to a Web Server Log Mirror (WSLM). This was initially shown at http://www.smartmoney.com/marketmap/, but is no longer available.

## See Also:
<!-- Any pointers to relevant information, not contained in the subfields below.-->

### [Related Patterns]:
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Minimal Information Asymmetry](Minimal-Information-Asymmetry) and [Impactful Information and Feedback](Impactful-Information-and-Feedback).

This pattern provides a general solution for managing identify through informing and controlling sharing decisions. This is compatible with the solution suggested in [Minimal Information Asymmetry](Minimal-Information-Asymmetry), as it supports informed user agency through explanations of policy and potential risks. Together they could compose a better identity management solution for the user.

[Impactful Information and Feedback](Impactful-Information-and-Feedback) supplies insights on potentially sensitive activity. These warnings allow for protection from the controller and reflection on sharing decisions in this pattern. This makes the patterns almost _similar_, and just short of a refinement towards more specific contexts. The problems these patterns address are however quite distinct.

This patter is _similar to_ [Privacy Dashboard](Privacy-dashboard). They have overlapping contexts, describe overlapping problems, and have solutions which have similar elements within them.

This pattern uses [Personal Data Table](Personal-Data-Table) and [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback). [Personal Data Table](Personal-Data-Table) is focused in tracking stored personal data, which this pattern applies as part of its solution. This pattern may also _use_ [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback) as a means to provide feedback on personal data usage.

### [Sources]:
<!-- References to the original source of the pattern.-->

<!-- Original work -->

D. H. Nguyen and E. D. Mynatt, 'Privacy Mirrors : Understanding and Shaping Socio-technical Ubiquitous Computing Systems', pp. 1--18, 2002.

<!-- A design pattern in developing successful privacy; C14 -->

E. S. Chung et al., 'Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing', DIS '04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233--242, 2004.

<!-- References Chung et al. with additional detail -->

H. Baraki et al., Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany, 2014.

<!-- Analogy citing original, Section 3.3.5 -->

G. Iachello and J. Hong, 'End-User Privacy in Human-Computer Interaction', Foundations and Trends in Human-Computer Interaction, vol. 1, no. 1, pp. 1--137, 2007.

## General Comments:
<!-- Separate discussion on the pattern.-->

## Categories:
<!-- Placeholder for future agreed upon categories as per collaboration's evaluation.-->

## Tags:
<!-- User definable descriptors for additional correlation.-->