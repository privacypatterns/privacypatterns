[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Summary
<!-- One short paragraph summarising the pattern.-->

An Awareness Feed warns the user about the potential consequences of sharing their personal data. It does so before that data is collected or used, and continues to do so whenever a change in context is detected. This change may include newly provided information by the user, and changes in the environment in which the controller (i.e. provider) operates or processes personal data.

This pattern allows users to make informed decisions regarding if, when, and how they share their personal data. As more information is collected, the user may become more identifiable, and the data relating to them may become more invasive. Awareness Feed keeps users aware of both the short-term and long-term repercussions in their data sharing choices.

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

In a situation where user data is collected or otherwise processed, particularly personal data, many users are concerned about the potential repercussions of their actions. Controllers (e.g.~organizations), which have dynamic and evolving services (or products) which users interact with, may share this concern. This may be for legal, ethical, or public appearance reasons.

These controllers also care about the monetary implications of a solution, often including the opportunity cost of informed users against the risks and profits of over-sharing. For-profit organizations regularly want to bolster their market share by overcoming competition with state of the art technologies. These changes may have important consequences, unintentional or otherwise, for users of the system. Controllers want to limit the exposure of these risks to their userbase, even if from a third party, as they are responsible for their data.

Such controllers may already have in place a [Privacy Dashboard](Privacy-dashboard), seeking to complement it, or wish to maintain awareness through various other services. They likely consider [Lawful Consent](Lawful-Consent) and thus seek to ensure that their users are properly and priorly informed before making regrettable decisions. They would nonetheless need to prevent notification fatigue if they were [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact) like in this pattern.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Users are often unaware of the privacy risks in their data sharing activities, especially risks which are indirect or long-term. How can we best ensure that users become aware of these risks?

This problem is agitated by the organizational aim to provide novel and competitive services while keeping users informed. The difficulty of this is frequently underestimated. The pitfalls controllers face as a consequence manifest both in taking shortcuts and in unexpected long-term effects.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not necessarily realize the effects of their information sharing, but often want to use new or interesting features
- Some users are discouraged from sharing as they do realize that they are not informed about risks to their privacy, but cannot reasonably change that themselves
- Controllers aim to provide or utilize novel and or competitive services, but explaining potential risks to privacy in those services is often non-trivial and generates a fear of upsetting the userbase and endangering trust
- Some controllers wish to empower users by informing them, but do not want to jeopardize their business model, or ability to process in a timely fashion

#### Shortcuts
The appeal of convenience features may sway controllers into flawed implementations which undermine user privacy. Automated decisions, influenced by past actions or by other potentially inaccurate metrics, may result in sharing decisions which users do not approve of. The same holds for features which are not adequately assessed. While a controller might intend all the necessary tools for informed decisions to be present, short-sighted process flows may violate user trust all the same.

#### Long-term Effects
Over time, supposedly harmless data may amass into more revealing information, especially when paired with the right metadata. Being able to link user activity to other sources of information may also result in far more exposing situations than expected.

Not only are users often unaware of the potential consequences of their actions, even controllers themselves regularly fail to anticipate how revealing their services can be. While some users approach this uncertainty with caution, others will risk their privacy in hopes of using the services. Though the uncertainty might not prevent their participation, it may still jeopardize their trust in the system.

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Warn users about potential consequences before collecting or otherwise processing personal data, early enough to be appreciated and late enough to be relevant.

This information should be provided before the point where privacy risks could materialize. If there is some delay before further processing after collection, the user has some time to review the risks. Until the user accepts them however, that further processing should not take place.

This pattern is a compound pattern, one in which multiple patterns work together to address a broader problem. It combines the following patterns:
- [Impactful Information and Feedback](Impactful-Information-and-Feedback);
- [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation);
- [Privacy Awareness Panel](Privacy-Awareness-Panel);
- [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback); and
- [Who's Listening](Whos-Listening).

#### Rationale
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->
It is not likely enough that users are informed prior to being provided a service, nor is it reasonable to expect that consent acquired in bulk is properly informed. Consent is not necessarily freely given, either, if the lack of consent presents a wall to a service that the user wants or believes to need.

A concerted effort needs to be made to present the user with unintimidating information relevant to their privacy risks for a service. Providing too much information lessens the chances that the user will read it, while too little information may not properly inform the user. Informing the user too late also puts the user at unnecessary risk.

By making this effort, the controller avoids accusations of negligence in informing their users.

<!--### [Structure]-->
<!-- A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!-- Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Every service which makes use of personal information should be investigated by its creators during its creation, or retrospectively if already available. The controller in question is responsible for this. Not only will this affect the user's understanding once presented to them in layperson terms, but it will also allow the controller to realize the privacy impact of their services. This may encourage them to improve the services to be more respecting of privacy. A good solution composes of accessibility, as well as transparency and openness.

#### Accessibility
There needs to be a balance between the user effort required both to use a service and maintain their privacy. Information about the risks should not be deceptive, or difficult for laypersons to comprehend. Meeting this balance may also be challenging, as fully comprehending the risks involved might require a certain understanding of the system itself.

In order to reduce the quantity of the presented information, only the contextually significant information need be presented. Furthermore, the information should be available in the level of detail sought by the user: in both concise and detailed variants. A short description may be used in [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact). A more in depth variation may give them confidence that even if they cannot comprehend it, someone would speak out if something were amiss. In a similar vein, detailed descriptions should be comprehensible enough to avoid accusations of being deliberately complex or misleading.

One way in which to explain the risks involved in a process is through example. This is particularly useful in the case of information aggregation. Visualizing the publicity of data is also useful, users can see how visible information would be, or is, to the outside world. Similar decisions by those who choose to set examples may also help in influencing informed sharing behaviour.

#### Transparency and Openness
Users need to be able to trust that a system does not pose unnecessary risks. Fostering a familiarity with openness and transparency about the processes involved may garner this trust. It allows those who invest time an opportunity to be certain, and those who trust in public perception to be at ease.

## Consequences
<!-- The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->
<!-- May also be used to convey the Resulting Context.-->

The solution of this pattern will cause users to have a better understanding of the potential consequences of information they share. It may empower some to share knowing they may do so safely, though it will cause less activity overall, as many users will be more careful about what they put online. This is not necessarily a negative consequence, though, since regretted decisions merely garner mistrust and prevent future activity. The controller will be able to introduce new services or update old ones with confidence that users are given the opportunity to consider their decisions in full light of the service's potential consequences.

In addition to lower adoption of risky services, due to public consequences, there will be more cost involved in reworking them. Unattended and system-wide process changes, which negatively affect consequences, will be more difficult to perform. They will not be possible without first disabling the affected services. This is similar to the way some controllers (e.g. Google) handle changes in privacy policies.

Due to more privacy-minded implementations, the system will not anticipate users as easily, though for many this will be a worthwhile tradeoff. While there is cost in creating good solutions, the long-term cost of bad ones (especially in good faith) can often be higher.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

By informing users prior to the activation of any services which use personal data, many aspects of a system are less fluid and thus require additional forethought. Instead of quick integration into the system, which may have come with many privacy oversights, users will be exposed to consequences that they might not have otherwise realized. Care will need to be taken to ensure that these users do not become overwhelmed. As a consequence of better informed users, however, questionable services are more open to scrutiny and thus many shortcuts will no longer be viable.

## Examples
<!-- Motivational example to see how the pattern is applied.-->

Full adoption of this pattern is not yet commonplace, yet there exist examples of feedback loops to users about activities corresponding to them. This includes notifications such as 'user X wants to access Y', or retrospectively, 'user X accessed Y'. There also exist services which require opt-in, accompanied by explanations of their effects. Conversely telemetry is often opt-out, but occasionally explains what information is at stake.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns.-->

Users must be assured of the controller's dedication to transparency and openness, which will be enabled by the consistent presentation of that relevant information, along with other forms of [Building Trust and Credibility](Building-Trust-and-Credibility). As in [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact), both users and controllers themselves need to be aware of the potential for certain services to leak unwarranted personal information. Where the value of the service is nonetheless still high, even after efforts made to reduce leakage risks, users need to be informed enough to choose for themselves exactly what they share (see [Lawful Consent](Lawful-Consent) and [Selective Disclosure](Selective-Disclosure)).

This approach may be partnered with accessible policies, including [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), and [Privacy Aware Network Client](Privacy-aware-network-client). It may also benefit from visual cues, like [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Icons](Privacy-Icons) in general, [Privacy Labels](Privacy-Labels), or [Privacy Color Coding](Privacy-color-coding), which aid in alluding to those policies.

This compound pattern benefits from also using [Task-based Processing](Task-based-Processing), where personal data is separated according to purpose. In this case, only use data for which any necessary consent has been granted, and which is within the scope of the personally enabled purposes. This precludes the application of unattended process changes which would induce new consequences.

This pattern _complements_ [Privacy Dashboard](Privacy-dashboard), [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Color Coding](Privacy-color-coding), [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), and [Privacy-Aware Network Client](Privacy-aware-network-client).

As this pattern keeps users informed of processed data, as well as what can be derived, and [Privacy Dashboard](Privacy-dashboard) provides collective summaries of such data, these patterns can work together. In doing so, users are better equipped to take actions which are in line with their personal privacy preferences. Similar to this argument is the benefit of [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), which highlights criteria which a service meets to build trust in the user. With this pattern, it can also inform the user of which parties with access to their data comply with these criteria.

This pattern and its components also work well with visual cues like [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), and [Privacy Color Coding](Privacy-color-coding). These assist in providing awareness quickly through easily interpreted visual information.

As this pattern seeks to inform users of policies in addition to notifying them of important information, it benefits from the application of accessible policies. Patterns which therefore _complement_ this pattern include [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), and [Privacy-Aware Network Client](Privacy-aware-network-client).

This pattern is a compound pattern, one which builds off of its component patterns. These include:
- [Impactful Information and Feedback](Impactful-Information-and-Feedback);
- [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation);
- [Privacy Awareness Panel](Privacy-Awareness-Panel);
- [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback); and
- [Who's Listening](Whos-Listening).

#### Related Pre-patterns
- Privacy Options in Social Networks;
- Selective Access Control in Forum Software; and
- Privacy Enhanced Group Scheduling.

### [Sources]
<!-- References to the original source of the pattern.-->

G. Aggarwal and E. Bursztein, “An Analysis of Private Browsing Modes in Modern Browsers.,” USENIX Security …, pp. 1–8, 2010.

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

H. Baraki, K. Geihs, A. Hoffmann, C. Voigtmann, R. Kniewel, B. E. Macek, and J. Zirfas, “Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications,” Kassel, Germany, 2014.

E. S. Chung, J. I. Hong, J. Lin, M. K. Prabaker, J. a. Landay, and A. L. Liu, “Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing,” DIS ’04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233–242, 2004.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

G. Iachello and J. Hong, “End-User Privacy in Human-Computer Interaction,” Foundations and Trends® in Human-Computer Interaction, vol. 1, no. 1, pp. 1–137, 2007.

T. Schümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

E. Freeman, E. Robson, B. Bates, and K. Sierra, Head First Design Patterns. O’ Reilly & Associates, Inc., 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->