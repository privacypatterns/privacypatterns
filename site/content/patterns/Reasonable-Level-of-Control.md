[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

Users have certain expectations about what level of privacy they can expect in certain contexts. In general, they are given the means to provide themselves with as much or little shielding from intrusions as they need. This expectation carries over to usage of services (or products) offered by a Controller. Users expect that they can have an impact on what about them is known to a service, or others that use the service.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users expect to be afforded sufficient self-determination over what information about them is collected or otherwise processed. The level of information and control desired, however, varies from person to person, as does the negative response when expectations are not met.

#### Forces/Concerns
- Users want to share and be shared with, but have varying limits on what they feel comfortable sharing.
- They have their own conceptions on what is worth withholding, and different regards for information sensitivities.
- Not all users trust a service to handle their information with the same care they feel is due.
- Many users want others to be able to know certain things about them on request, sometimes even in real-time.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow users to selectively and granularly provide information to a service, or its users, and have select information available to user-defined or predetermined groups.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

Users should be able to push their chosen information to (or have it pulled by) those they grant access. Using push mechanisms, users will have the greatest level of control due to the fact that they can decide the privacy level of their data case by case.

Pull mechanisms are less granular, as granting access to a group or individual continues until that access is denied. Within this time frame, the sensitivity of the data may fluctuate. However, the user should have the ability to retract access at will, and thus, can manage their own identified risks.

Users should also be made aware of the potential risks of over-sharing and increased sensitivity of data over time. This creates a complementing relationship between many Inform patterns, including [Ambient](Ambient-Notice)/[Asynchronous Notice](Asynchronous-Notice), [Preventing mistakes or reducing their impact](Preventing-mistakes-or-reducing-their impact), as well as [Awareness Feed](Awareness-Feed), [Privacy Dashboard](Privacy-Dashboard) and their compounded patterns.

Additionally, [Blur Personal Data](Blur-Personal-Data) and [Partial Identification](Partial-Identification) patterns could be used inside the implementation.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->
When users are pushing their information to a service, design the user interface such that where appropriate, controls define the access, granularity, completeness, accuracy, etc. of the information being shared.

Elsewhere, ensure that any required fields are truly required, and that the completeness needed for those fields be indicated. When there are automatic suggestions, let users redefine or remove the information before it is collected by the service. These automatic suggestions should also not take place without consent.

Where information is provided on a continual basis to those granted access, provide the user with the necessary tools. They should be able to indicate who falls within a group, and what exactly that group can access, for how long, at what granularity, how far back they can look, and so forth.


<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- Google Maps (simple implementation)
- Facebook (simple implementation)

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is _refined_ by [Selective Access Control](Selective-Access-Control) for socially oriented services, [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy), and by [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility). The [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy) pattern talks about methods which allow users to share their information (selectively and granularly) while this pattern provides these kinds of features at the beginning of the service's use. [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility) provides a means of control for attaching location to content. It is compliant with this pattern's solution in a more specific scenario.

As with most patterns in privacy, data protection, or self-determination, [Reasonable Level of Control](Reasonable-Level-of-Control) _must use_ use [Lawful Consent](Lawful-Consent). It also _may use_ [Masquerade](Masquerade), which allows the user to set their identifiability.  This pattern may include that functionality inside its own solution.

[Reasonable Level of Control](Reasonable-Level-of-Control) may be used by [Support Selective Disclosure](Support-Selective-Disclosure) as one of the compound pattern's constituent patterns. It is also complemented by [Discouraging blanket strategies](Discouraging-blanket-strategies), [Private link](Private-link), and [Active broadcast of presence](Active-broadcast-of-presence). 

The first pattern in these complementary relationships defines methods which allow users to share their information (selectively and granularly). These methods could be complemented where considering a range of options as in this pattern. The second, [Private link](Private-link), focuses on private sharing with anonymous users, while [Reasonable Level of Control](Reasonable-Level-of-Control) focuses on granularity. They can work together to cover all possible audiences. The third complementary pattern, [Active broadcast of presence](Active-broadcast-of-presence), aims to define the audience for posts through rules, through which it could complement this pattern considering its relationship to [Selective Access Control](Selective-Access-Control) as a generalization.

Due to the strong importance of notified and informed users in this pattern, the following patterns also complement this pattern:
- [Ambient](Ambient-Notice)/[Asynchronous Notice](Asynchronous-Notice),
- [Preventing mistakes or reducing their impact](Preventing-mistakes-or-reducing-their impact),
- [Awareness Feed](Awareness-Feed) (and components), and
- [Privacy Dashboard](Privacy-Dashboard) (and components).

As per original source, this pattern should ideally use the following:
- _Reasonable level of control should [use] [APPROPRIATE PRIVACY FEEDBACK](Appropriate-Privacy-Feedback) (C5) to give users a greater understanding of what data is being collected about them._
- _Systems should also have [LIMITED DATA RETENTION](Time-limited-personal-data-keeping) (C12), so that personal information is stored only for long as it is needed. Limited retention is also one of the [FAIR INFORMATION PRACTICES](Fair-Information-Practices) (C1)._
- _Lastly, control is only useful if there is a [PRIVACY-SENSITIVE ARCHITECTURE](Privacy-Sensitive-Architectures) (C6) backing it up, ensuring that users really do have control and that eavesdroppers are shut out._


### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

- E. S. Chung, J. I. Hong, J. Lin, M. K. Prabaker, J. a. Landay, and A. L. Liu, “Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing,” DIS ’04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233–242, 2004.
  - The full catalog of the patterns by Chung et al. is in https://www.cs.cmu.edu/~jasonh/projects/ubicomp-design-patterns/ubicomp_patterns.pdf
- S. Romanosky, A. Acquisti, J. Hong, L. F. Cranor, and B. Friedman, “Privacy patterns for online interactions,” Proceedings of the 2006 conference on Pattern languages of programs - PLoP ’06, p. 1, 2006.
- H. Baraki et al., Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany, 2014.
- G. Iachello and J. Hong, “End-User Privacy in Human-Computer Interaction,” Foundations and Trends in Human-Computer Interaction, vol. 1, no. 1, pp. 1–137, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->