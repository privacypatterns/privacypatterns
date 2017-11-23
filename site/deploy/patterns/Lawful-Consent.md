[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Summary
<!-- One short paragraph summarising the pattern.-->

This pattern covers in detail the legal and social obligations surrounding a data subject's consent to processing of their data in specific circumstances. Every use of the subject's personal data should be covered by an explicit agreement in which the data subject was made aware of the implications of their consent.

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Where data controllers (e.g. organisations) aim to provide a service (or product) to users, there may be opportunities to reuse data, gather feedback, or make use of user data to further their system's value. Many controllers seek to continually collect and utilise this data, often in ways which warrant privacy concerns. For any data processing (including collection), controllers should first obtain consent from the users in question.

There are social norms surrounding the use of personal data which need to be adhered to if an controller wishes to avoid scrutiny. Users do not inherently trust controllers to handle their personal data with care for privacy. Without clearly defined boundaries, these users may have justifiable concerns about what is learned about them, and how this information may be used. Additionally, various jurisdictions supply varying compliance requirements, and these controllers need to cater to every market they provide to.

Doing otherwise, possibly by disinterest or negligence, may have financial consequences in addition to potential public outcry. Despite this, controllers regularly consider the impact that their decisions may have on competitive edge and resulting profits. The link between better decision making, possibly less sharing, and reduced monetary gains sways some controllers into unlawful forms of consent.

Concerned controllers aim to promote trust in any number of ways, potentially including an [Awareness Feed](Awareness-Feed) and or [Privacy Dashboard](Privacy-Dashboard) to properly inform their users. The controller in this context may wish to adhere to the corresponding laws for their users, or above that, genuinely value their users' rights to self-determination.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

An controller aims to maximise the value of their services by gathering as much sharing and participation as possible, potentially seeing user consent as a barrier to functionality and efficiency. They may inadvertently subvert notions of consent by unnecessarily bundling together desirable services with needs for personal information, or downplaying the significance of the data involved. They undermine self-determination at the risk of losing trust from their users, and attracting legal investigations which may rule their practices unlawful.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->
- Controllers want to encourage participation, and thus may be less concerned with investigating or revealing tradeoffs
- Controllers may be tempted to bundle various services under a single broad consent request, pressuring users into agreements they might not otherwise accept
- Users often want to make use of new and exciting features, and therefore easily overlook downplayed privacy risks
- Some users avoid certain services as they realise the potential privacy risks are not being acknowledged

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

A user should be given every opportunity to assess their sharing choices prior to making their consent. The controller should aid the user in comprehending the tradeoffs apparent in using each of their services, without over-burdening the user. These consented services should be purposed-separated, so that users may make use of functionality without first granting unnecessary consent.

#### Rationale
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->
Controllers need to ensure that anything they do with a user's sensitive or potentially identifying data is legal. This pertains to lawfully obtained consent, for purposes which are clear and lawful in their own right. Additionally, anything they do should be resistant to backlash from users.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->


### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

#### Separate Purposes
Services should be separated into distinct processes for which distinct consent is acquired. Each purpose requires its own consent. These permissions need to be given subsequent to ascertaining sufficient awareness in the user about the consequences of that consent.

#### Freely Given Consent
The users should not be pressured into providing consent. Instead, the benefits may be presented along with the trade-offs so that the users may make an informed decision. Some users are not necessarily capable of making these decisions themselves (e.g. children) and thus provisions need to be made to cater to this. The provided information should not be misleading, as coerced consent is not a valid form of permission. One way to present policies in an accessible manner is through comparative examples (e.g. in addition to further detail, what is unique about our privacy policy?).

Providing too much information may also intimidate users into making uninformed decisions, and thus awareness must be garnered in a way which is broadly accessible (see [Awareness Feed](Awareness-Feed)). Opportunities for further reading should be available, though should not be necessary to understand the trade-offs involved.

#### Personalized Negotiation
In more personal services (i.e. one-on-one), personal privacy policies may undergo a formal negotiation. As opposed to user preferences (both at sign-up and through appropriate defaults), understanding a user's personal privacy requirements may benefit from the facilitation of a human representative. This, however, suffers from it's own drawbacks where the representative may misunderstand the user's requirements. Even in interpersonal exchanges, controllers should err on the side of caution. Where available, explicit signing of an agreement aids in proving consent.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->
<!-- May also be used to convey the Resulting Context.-->

With the ability to choose exactly what tradeoffs are agreeable to them, users will be more content, and trusting of the system. They may as a result use more services, and participate more than they otherwise would. Being aware of what information is actually needed to perform certain functionality may also prevent its use, but rightfully so as to prevent backlash.

The need for certain information for some services will bring inappropriate business processes to the foreground to be rectified, or otherwise questioned. This will likely bring the controller towards better practices, and may affect others as well. Once the public sees the controller's willingness to cooperate, trust will grow even further.

Overall adoption will grow for controllers who are shown to be trustworthy and upfront about their data processing practices. This may very well offset the costs involved in maintaining transparency.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

Allowing informed and specific consent prevents controllers from soliciting misplaced consent, which greatly reduces the adoption of invasive services. These are often the most profitable services.

<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->



<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Lawful Consent](Lawful-Consent) is a compound pattern of various other consent-based patterns. Therefore it _may use_ a combination of [Informed Consent for Web-based Transactions](Informed-Consent-for-Web-based-Transactions), [Obtaining Explicit Consent](Obtaining-Explicit-Consent), and [Sign an Agreement to Solve Lack of Trust on the Use of Private Data Context](Sign-an-Agreement-to-Solve-Lack-of-Trust-on-the-Use-of-Private-Data-Context) (or simply, Contractual Consent). 

Since it contains crucial elements from each of its constituents, with the potential for additional focus based on context, this compound pattern is useful for every pattern that needs to consider user consent. As such, the list of patterns which _must use_ this pattern is extensive and listed here non-exhaustively. Within patterns for Control they include:

- [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility);
- [Discouraging blanket strategies](Discouraging-blanket-strategies);
- [Single Point of Contact](Single-Point-of-Contact);
- [Buddy List](Buddy-List);
- [Reasonable Level of Control](Reasonable-Level-of-Control);
- [Outsourcing [with consent]](Outsourcing-[with-consent]);
- [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy);
- [Private link](Private-link)
- [Active broadcast of presence](Active-broadcast-of-presence);
- [Pay Back](Pay-Back);
- [Reciprocity](Reciprocity);
- [Selective Access Control](Selective-Access-Control);
- [Enable/Disable Functions](Enable/Disable-Functions);
- [Incentivized Participation](Incentivized-Participation); and
- [Support Selective Disclosure](Support-Selective-Disclosure).

#### Based-on

Explicit Consent / Obtaining Explicit consent via privacy agreement / Permission to Use Sensitive Data via Privacy Agreement / Sign an Agreement to Solve Lack of Trust on the Use of Private Data Context

#### Pre-patterns
- Creating/Maintaining Privacy Policy;
- Privacy Dashboard;
- Policy Matching Display;
- Visual Cues;
- Accessible Policies; and
- Awareness Feed.

### [Sources]
<!-- References to the original source of the pattern.-->

European Parliament, & Council of the European Union. (2015). General Data Protection Regulation. Official Journal of the European Union. Retrieved from http://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1487245302979&uri=CELEX:32016R0679

Article 29 Data Protection Working Party. (2007). Opinion 4/2007 on the concept of personal data. Working Party Opinions. Retrieved from http://scholar.google.com/scholar?hl=en&btnG=Search&q=intitle:Opinion+4+/+2007+on+the+concept+of+personal+data#0

J. Porekar, A. Jerman-Blažič, and T. Klobučar, “Towards organizational privacy patterns,” Proceedings - The 2nd International Conference on the Digital Society, ICDS 2008, 2008.

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->