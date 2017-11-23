[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Suggested: Contractual Consent

## Context
<!-- The situations in which the pattern may apply.-->

Users do not inherently trust controllers who provide services (or products), as they do not have assurances as to what the controller's or their processor's true intentions are. Controllers and processors typically aim to make profit, but this might be at the expense of users if those users do not consider their privacy needs. The controller might have reasonable defaults or [levels of control](Reasonable-Level-of-Control), but users also need to feel reassured that their choices are being honored. This is especially true of what they do or do not provide [Lawful Consent](Lawful-Consent) for.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The controller does not necessarily have the trust of its users, and needs this trust for its services to process their data.

#### Forces/Concerns
- The controller wishes to provide services to the user, but needs their trust and consent to do so.
- Processors want to manipulate data without having to worry about whether the data contains consented information or not.
- Users want to use services, but not at the risk of their own personal privacy requirements being undermined.
- Users want to know what they can safely provide to the controller and what information might be revealed about them if they use the service.
- Users need to feel that the controller will honor any decision taken about their personal data.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

The service should provide the user with a contractual agreement (featuring privacy policy) which binds the controller to their word, provided that the user consents to the processing of data needed for specific purposes. The agreement should also bind any representative of the controller. It should be straightforward and clear enough for the user to comprehend.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The service should feature a mechanism (e.g. landing page or unavoidable introduction) prior to collection, which stipulates the need for user consent. There should be a reasonable effort to prevent users from bypassing this mechanism.

The specific purposes for which their data will be processed should be made clear. The service should, at the same time, outline the contractual obligations it will be held against should the user consent. The user should be able to seek further detail about these obligations without first needing to consent.

If users decide to consent, they can make this clear by interacting with a mechanism (e.g. button) which clearly represents their agreement to the contract.

A further implementation could additionally allow the user access to a subset of the service which does not require any data, in order to help justify their consent. This would also alleviate the user's potential apprehension about the time taken to review and inform themselves about their decision.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
The controller, any of their representatives, and their users are tied to the terms of the contract and the legal implications it holds. Any disputes will involve both contract law and privacy law.

#### Liabilities
Users may be discouraged to use a service if they are made aware of the risks to their privacy, or introduced to the ways in which their data can be used to reveal information.

They may also be tempted to consent without reading about the contract or how their data may be used. Therefore it is useful to not force an immediate decision, as this can invalidate the consent as not freely given or uninformed.

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
[Sign an Agreement to Solve Lack of Trust on the Use of Private Data Context](Sign-an-Agreement-to-Solve-Lack-of-Trust-on-the-Use-of-Private-Data-Context) is one of the components of the compound pattern, [Lawful Consent](Lawful-Consent). As such, they share a _may use_ relationship.

This pattern is _similar to_ [Obtaining Explicit Consent](Obtaining-Explicit-Consent). It aims to get the user's trust, while the second pattern focuses on collecting consent in a manner which cannot be second-guessed. Although they may seem to be complementary at first, the solutions are actually quite similar. Each pattern points out advantages for the user or the controller from their own perspective.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

Asnar, Y., Bryl, V., Bonato, R., Campagna, L., Donnan, D., Khoury, P. El, Giorgini, P., Holtmanns, S., Martinez-Juste, M., Massacci, F., Porekar, J., Riccucci, C., Saidane, A., Seguran, M., Thomas, R., & Yautsiukhin, A. (2007). Initial Set of Security and Privacy Patterns at Organizational Level, (December 2006). Retrieved from http://www.serenity-forum.org/IMG/pdf/A1.D3.1_patterns_at_organizational_level_v1.3_final.pdf

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->