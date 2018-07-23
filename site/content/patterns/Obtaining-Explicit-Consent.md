[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Explicit Consent / Obtaining Explicit consent via privacy agreement / Permission to Use Sensitive Data via Privacy Agreement - Explicit Consent

## Context
<!-- The situations in which the pattern may apply.-->

In order to offer services (or products) to users (data subjects), controllers often need to collect (process) user data. Sometimes this is sensitive, identifying, or just metadata or other information which may be correlated to become more invasive. This nonetheless enables them to offer competitive features and functionality.

However, controllers are required to obtain unambiguous consent from their users in order to process their personal data in any way. Depending on the legal jurisdiction, there are additional considerations to take into account depending on the type of data in question. Typically, sensitive data requires especially rigorous care.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Controllers which aim to make use of user data, especially that which can be used to identify the user or sensitive aspects about the user, may not do so without a legally binding and sound acquisition of the user's consent.

#### Forces/Concerns
- Users want to use services without having to invest an inordinate amount of effort into discovering privacy risks.
- Controllers need to be sure that users do not consent out of impatience or intimidation.
- Users do not want to consent many times to the same service under the same privacy policy for each and every purpose.
- Controllers need to be able to prove that users consented.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide a clear and concise notification of all pertinent information the service could derive provided it had all the data it asks for. Indicate what this means for features and functionality. Then ask the user whether this tradeoff is something they consent to. If true, digitally signify and timestamp their response, or use [Contractual Consent](Sign-an-Agreement-to-Solve-Lack-of-Trust-on-the-Use-of-Private-Data-Context).

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The controller must ensure each user's sufficient understanding of the potential consequences. Otherwise the consent might not be informed. They must verify their users' willingness despite those consequences to provide their data for the specific purposes they need. If they do not, the consent might not be freely given.

Ensuring that users do not consent based on time constraints, or the intimidation of the information provided, may require testing with a sample. If the sample is representative, it will give the controller a defense against any claims of coercion.

The mechanism used for users to signify their consent should be clear. For example, if it is a button, it could read "I consent."

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
Controllers can derive clearer potential consequences when the data collected is the same for every consenting user. Users therefore can look over these risks and spend less time making a valid decision. This reduces the chances of users consenting without informing themselves due to the difficult or verbose content presented.

#### Liabilities
Users do not however want to consent to all purposes necessarily since they might not all be compatible with what they feel comfortable sharing. In these cases users can be presented with a type of [Selective Disclosure](Selective-Disclosure).

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

Thus pattern may be used by [Lawful Consent](Lawful-Consent), as it is one of the patterns featured within it as a compound pattern.

[Obtaining Explicit Consent](Obtaining-Explicit-Consent) is _similar to_ [Sign an Agreement to Solve Lack of Trust on the Use of Private Data Context](Sign-an-Agreement-to-Solve-Lack-of-Trust-on-the-Use-of-Private-Data-Context). This Contractual Consent merely focuses on the need for non-repudiation more so than [Obtaining Explicit Consent](Obtaining-Explicit-Consent). Their perspectives are different while their overall solution is more or less the same. 

It also is refined by [Informed Consent for Web-based Transactions](Informed-Consent for-Web-based-Transactions). It is a refinement of, and is used by, [Lawful Consent](Lawful-Consent). In both cases the controller aims to inform users prior to obtaining their consent, though in the other pattern's case it is applied specifically for Web-based transactions.

Porekar et al. (2008) also highlight this pattern's complementing Enforce patten relationships:
- [Constructing Privacy Policy](Creating-Privacy-Policy);
- [Maintaining Privacy Policy](Maintaining-Privacy-Policy);
- [Privacy Policy Negotiation](Negotiation-of-Privacy-Policy);
- Maintaining agreements over longer periods of time

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

J. Porekar, A. Jerman-Blažič, and T. Klobučar, “Towards organizational privacy patterns,” Proceedings - The 2nd International Conference on the Digital Society, ICDS 2008, 2008.

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

Y. Asnar et al., “Initial Set of Security and Privacy Patterns at Organizational Level,” no. December 2006, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->