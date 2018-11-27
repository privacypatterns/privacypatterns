[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Numerous services (or products) are designed with the purpose of sharing amongst the public or a specific subset of users. In content sharing implementations, it is commonplace to streamline disclosure so that users do not need to publish manually. Content they generate is often automatically shared with the controller, even if not immediately made available to other users or the public. This of course requires the prior consent of users, though it is also possible for users to forget about that consent, or change their mind. If the distinction lies in a simple setting, it may not be apparent to the user that it is still in effect.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Immediate and automatic content publication without notification or confirmation of consent leads to unintentional disclosure and may invalidate prior consent.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users of the service want to share content with others, but not all of the content they generate is fit for sharing
- Most users do not want to manually upload content case by case, sometimes long after creation
- Controllers want to make it easy for users to contribute content
- Controllers do not want users to disclose content which they regret disclosing and potentially ruins the user's experience

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Use contextual measures to predict whether content should be processed, re-establishing consent, to prevent accidental disclosure.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_Through the study of patterns in disclosure behavior, systems may be able to helpfully warn users when disclosing following potentially significant change in context, perhaps reducing potential for mistakes. [These] privacy decisions are often correlated with the context of capture and the [content] as indicated [by the user. It] could be feasible to use these patterns for prediction or recommendation of privacy settings. In addition, providing an optional “staging area” before disclosure actually takes place and an easy way to review recent disclosures may reduce the immediate consequences of quickly regretted or accidental disclosure decisions._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Clearing up mistakenly shared data adds additional overhead, especially if the service does not offer simple modification or removal of information. As sharing more than actually intended may result in potential damage for users, they will benefit from services which reduce these risks.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Through the study of [trends] in disclosure behavior, systems may be able to helpfully warn users when disclosing following potentially significant change in context, perhaps reducing potential for mistakes. As [Ahern et al.] found that privacy decisions are often correlated with the context of capture and the content of the photo as indicated by user-specified tags, it could be feasible to use these patterns for prediction or recommendation of privacy settings. In addition, providing an optional “staging area” before disclosure actually takes place and an easy way to review recent disclosures may reduce the immediate consequences of quickly regretted or accidental disclosure decisions._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback), and [[Informed] Credential Selection]([Informed]-Credential-Selection). As such the patterns which refine it do so as well where their context permits. For [Impactful Information and Feedback](Impactful-Information-and-Feedback) this is the case. It provides feedback about disclosure under certain privacy settings before it takes place, and can be notified of, and reviewed, before causing an impact. [[Informed] Credential Selection]([Informed]-Credential-Selection), however, can only reasonably _complement_ [Asynchronous Notice](Asynchronous-notice), as it deals with instant authentication. Modal notification like what this pattern might provide can inform users in a timely manner.

It is also _refined_ by both [Ambient Notice](Ambient-notice) and [Asynchronous Notice](Asynchronous-notice). These variants of notice, which are themselves _alternatives_, both provide essentially equal problems for which they give more specific contexts and solutions. The former is unobtrusive and persistently informative, while the latter is unavoidably informative when context demands.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->