[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Notification on Access of Personal Data

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users are frequently unaware or unsure about what personal data systems collect and otherwise process. When systems fade into the background users are less likely to take notice and adjust what information is collected. Data controllers who provide services (or products) to such users realize that consent is not valid without users first being sufficiently informed. They aim to do so in a manner which is appropriate for the service.

The controller may have relied on op-out mechanics, but now realizes that within the European General Data Protection Regulation (recital 32) 'silence, pre-ticked boxes or inactivity' no longer constitute consent. Unnecessarily disruptive notice is also not permitted.

The controller may already consider Fair Information Practices, and have an accessible privacy policy. They may also implement [Respecting Social Organizations](Respecting-Social-Organizations) and [Building Trust and Credibility](Building-Trust-and-Credibility). However, their service is not immediately obvious to the user when in use.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Many systems are designed to be seamless or ubiquitous. However, this can make personal data risks less apparent to the user.

As a result users may overlook services without fulling understanding the privacy risks involved. Potentially, these users may realize consequences long after, or worse, not realize them at all.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Controllers want systems to do their tasks in the background without bothering the user, but need the user's informed consent
- Controllers often do not want to process data which users feel uncomfortable about, but uninformed users may provide it
- Users want to get the benefits of a service without having to interact with it, and may not do so at all if they do not have to
- There are users who would avoid these services if they were aware of the privacy risks

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Visible feedback loops, which capture the user's attention, are needed to help ensure that users understand what data is being collected, who can see that data, and how might it be used.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Notification should occur before access where possible, and during or shortly after access if earlier notification is not appropriate. In most cases this means preventing a user's use of a service before allowing the core functionality of the service to run at all. Where some features with variable privacy implications are not essential to the service, they may be provided as optional, defaulting to being disabled.

Users should be informed appropriately, providing both concise and understandable explanations of the personal data acquired, and warnings of the risks involved. The service should make a best effort to ensure that the user understands the implications of consent before commencing or resuming functionality. An effort should also be made to make these notifications non-invasive. Using [Ambient](Ambient-notice) or [Asynchronous Notice](Asynchronous-notice) is one way to achieve this.

Where users choose to be notified less immediately or less often, and after being warned of the risks involved, then the service may store logs of its privacy affecting activities. The user should then be able to retrieve these logs, in a human readable form, at will. As only the user should be able to access these, unless said user provides informed consent otherwise, it should also be secured. Use state of the art means of encryption to do this. If this functionality cannot be done in this manner, due to technical constraints for example, then do not provide logging functionality.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

The user will be informed before using a service, which will cause the user to be more careful according to their personal privacy preference. Those who find the service too invasive will not use it, or provide feedback towards its improvement. The service will not be liable for user activities where it has informed them of the risks those activities involve.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

Preventing functionality until consent is acquired lessens the feasibility of various services. However, doing otherwise presents risks of high financial and good-will damages.

# Examples
<!--Motivational example to see how the pattern is applied.-->

When you share some content on Facebook, it sometimes asks you to review your fundamental privacy settings. In the short tour given, you can see what data is accessed by other users or by third party applications.


<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is a component of the compound pattern, [Awareness Feed](Awareness-Feed). As such, this pattern _may be used_ by it.

This pattern _complements_ [Privacy Awareness Panel](Privacy-Awareness-Panel), [Who's Listening](Whos-Listening), [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), and [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation).

[Privacy Awareness Panel](Privacy-Awareness-Panel) provides the same information (what, who, and how) as this pattern, while using different mechanisms. Together these patterns cover future, present, and past disclosure. While this could be a _similar_ relationship, complementary aspects are also present. Similar to [Privacy Awareness Panel](Privacy-Awareness-Panel), the complementary relationship with [Who's Listening](Whos-Listening) allows for monitoring of access in a more holistic manner.

[Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides) provides visual highlights which alert the user to the estimated trustworthiness of a service. This functionality goes well with the aim to provide the user with useful feedback on risks to their privacy. Together, these patterns can illuminate the trustworthiness of entities which access the user's data, especially third parties.

[Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation) aims to solve a different problem, though it may help future disclosure decisions through knowledge of its potential sensitivity when aggregated.

For ensuring the feedback provided is accurate and actionable, this pattern also _complements_ [Privacy Sensitive Architectures](Privacy-Sensitive-Architectures) and [Reasonable Level of Control](Reasonable-Level-of-Control).

Appropriate Privacy Feedback _may be used_ by [Privacy Mirrors](Privacy-Mirrors) as a means to provide feedback on personal data usage. [Privacy Dashboard](Privacy-dashboard) also _may use_ it, as it empowers users to act on detail they have been drawn attention to. Notification may also be facilitated through _using_ [Ambient](Ambient-notice) or [Asynchronous Notice](Asynchronous-notice) to reduce intrusiveness.

### [Sources]
<!-- References to the original source of the pattern.-->

E. S. Chung, J. I. Hong, J. Lin, M. K. Prabaker, J. a. Landay, and A. L. Liu, “Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing,” DIS ’04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233–242, 2004.

H. Baraki et al., Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany, 2014.

G. Iachello and J. Hong, “End-User Privacy in Human-Computer Interaction,” Foundations and Trends® in Human-Computer Interaction, vol. 1, no. 1, pp. 1–137, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->