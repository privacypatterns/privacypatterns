[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

User data is frequently collected for various purposes. Sometimes this data is personal, personally identifying, or otherwise sensitive. The data may serve to improve a service (or product) offered by a controller, or to provide relevant suggestions or advertisements to users. This is particularly prevalent on the web, as many websites derive most of their income from this data. Where income is instead in the form of purchase, user data is nonetheless needed to provide billing or shipping information. This includes auditing, logging, or other non-repudiation purposes to facilitate transactions.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Before collecting data, controllers must make sure users provide informed consent.

Controllers utilize persistent local or server-side storage to process potentially identifiable or sensitive information about users in order to perform a transaction. However, _users are often resistant to disclosing personal information because they are uncertain if it will be used without their consent or against their interests_.

Controllers need to be able to inform their users about these purposes and means before the user consents.

#### Forces/Concerns
- Users want to visit websites and make use of the services (or products) offered, but do not want their privacy to be undermined.
- Users want to have control over their personal information.
- Controllers may need to process data to conduct business, and may in some cases deny service to those who withhold their data.
- Controllers may profit from additional user data, and users may too enjoy enriched services.
- They wish to protect their users from privacy violations, and protect themselves from responsibility, but also aim to secure a viable business model.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide the user with clear and concise information regarding what may be learned from their data, and how that data can be used to offer or improve the service. Then acquire their explicit, freely-given consent.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

_To the extent possible given the limits imposed by web technology, provide the user with the six elements of informed consent: Disclosure [of purpose specification and limitation,] Agreement [and disagreement capabilities,] Comprehension [through easily understandable, comprehensive and concise explanations,] Voluntariness [showing that consent is freely-given,] Competence [to make reasonable legally binding decisions, and] Minimal Distraction [which may otherwise aggravate the user]._

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->
Human Computer Interaction concepts expressed in the work of Fischer-Hübner et al. (2010) allow implementing this pattern in various ways:
- _Just-In-Time-Click-Through Agreements (JITCTAs), i.e. click-trough agreements that instead of providing a large list of service terms confirm the user's understanding or consent on an "as-needed basis”._ The information shown in JITCTAs includes what data is requested, the controller’s identity and the purpose of processing.
- _Selection via cascading context menus, where users have to choose more consciously the menu options of data to be released._ This option is intended for simple data request forms with not many fields to be filled.
- _Drag-and-Drop Agreements (DADAs), which also requires user to make more conscious drag and drop actions for consenting to data disclosures._ The user has to choose an icon that represents some kind of personal data and drag and drop it to an icon representing the controller.


## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- _Helps to reduce information asymmetry between the user and the [controller]._
- _Empowers users to make informed decision that do not conflict with their tolerance for private information disclosure._
- _Provides a basis for trust between the consumer and website owner by establishing an expectation of practice by the website. Consider the risk of lost trust for ecommerce, medical and financial companies such as eBay, Amazon, Bank of America, ehealthinsurance.com, etc.._
- _This pattern can be applied to many other systems that interact with the user and external systems such as email and location aware devices (e.g. cellphones, PDAs)._

#### Liabilities
- _This pattern cannot provide any assurance that a website will comply with the informed consent model._
- _Privacy policies are generally known to be confusing for the user to read and fully understand._
- _The website may not wish to disclose their ability to track users without their knowledge._
- _The website may not have the infrastructure to offer and support each of the solution elements for every user. For example, the ability for users to opt-out of the agreement._
- _If the distraction due to implementing this pattern is sufficiently great, the user may simply cancel the transaction altogether._
- _Information provided to gain consent is necessarily a) limited and b) manipulated by the site to obtain consent – this implies that the actual consequences of the revelation of personal information may remain unknown to the user._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

* Yahoo! Registration Form
* Intuit Registration Form
* Google Registration Form

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Informed Consent for Web-based Transactions](Informed-Consent-for-Web-based-Transactions) may be used by [Lawful Consent](Lawful-Consent), as it is one of the compound pattern's possible constituents.

This pattern _refines_ [Obtaining Explicit Consent](Obtaining-Explicit-Consent). In either case the controller in question focuses on informing and getting the user's consent explicitly, with more emphasis on one or the other. In the case of this pattern, it is applied for Web-based transactions in particular.

Additionally, [Privacy Policy Display](Privacy-Policy-Display) or similar is also used by this pattern.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

S. Romanosky, A. Acquisti, J. Hong, L. F. Cranor, and B. Friedman, “Privacy patterns for online interactions,” Proceedings of the 2006 conference on Pattern languages of programs - PLoP ’06, p. 1, 2006.

Fischer-Hübner, S., Köffel, C., Pettersson, J.-S., Wolkerstorfer, P., Graf, C., Holtz, L. E., … Kellermann, B. (2010). HCI Pattern Collection – Version 2.

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications (Patterns 2010), vol. 2, no. 1, pp. 72–77, 2010.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->