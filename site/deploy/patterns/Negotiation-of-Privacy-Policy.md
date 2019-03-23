[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

Often when users find a service (or product) they would like to use, and begin signing-up, they are immediately exposed to assumptions which may not hold for them. As users have differing privacy priorities, a controller cannot guess as to what settings best accommodate them. Since these preferences may be intricate, users cannot be expected to specify them in detail all at once or before using the service.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users have sometimes wildly different priorities regarding their privacy, though a controller does not know these details when a user first joins a service. There is a temptation to provide these users the settings the average user uses.

#### Forces/Concerns
- Users are different and do not all fall under one universal setting without some being unsatisfied.
- The controller wants to cater to user individuality.
- Getting users to specify all of their individual tastes before using a service will make some users abandon the process. Some settings may be missed, and many users will be upset.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

As users begin to use a service, determine their individual privacy sensitivities by allowing them to opt-in/opt-out of account details, targeted services, and telemetry. When a user's preference is not known, assume the most privacy-preserving settings. It should always take more effort to over-share than to under-share.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Unauthenticated users should enjoy the most privacy-preserving defaults. When a user joins the service, they may be presented with [excerpts or summaries of] a privacy policy, which they can use to inform their choices. Using simple, recognizable controls, users can be asked to opt-in (for explained benefits) or opt-out (at explained costs) before any of their data is used. They can then be asked for additional consents further down the line as they become contextually relevant.

In this way, only the needed consent is asked for as the controller's understanding of the user's preferences improves. This can allow the service to determine which solicitations users are individually likely to consider, and which ones will only waste their time or upset them.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Private defaults will often not be the appropriate settings for a user, as most users may be less privacy-concerned. The additional effort taken to share more, with users or the controller, will reduce the valuable data collected. However, providing users with invasive defaults would risk public outrage by the vocal few, who may affect opinions holistically.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->



<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is used by [Support Selective Disclosure](Support-Selective-Disclosure), a compound pattern. It is also complemented by [Discouraging blanket strategies](Discouraging-blanket-strategies) (avoiding all or nothing strategies for privacy settings) and [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility) (change the privacy every time content is being shared).

[Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy) _refines_ [Reasonable Level of Control](Reasonable-Level-of-Control), which describes methods which allow users to share their information (selectively and granularly), while this pattern targets the beginning of the service use.

It is _similar to_ [Enable/Disable Functions](Enable-Disable-Functions), where users may switch between functionalities which affect their privacy. This solution is quite similar to opting in or out of those features. Specifically a similar problem is addressed from non-functional as opposed to functional perspectives.

This pattern _must use_ [Lawful Consent](Lawful-Consent) in order to be implemented correctly. Additionally, due to the same need for notified and informed users in this pattern, the following patterns also complement this pattern:

- [Ambient](Ambient-Notice)/[Asynchronous Notice](Asynchronous-Notice),
- [Preventing mistakes or reducing their impact](Preventing-mistakes-or-reducing-their impact),
- [Awareness Feed](Awareness-Feed) (and components), and
- [Privacy Dashboard](Privacy-Dashboard) (and components).


### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

J. Porekar, A. Jerman-Blažič, and T. Klobučar, “Towards organizational privacy patterns,” Proceedings - The 2nd International Conference on the Digital Society, ICDS 2008, 2008.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->