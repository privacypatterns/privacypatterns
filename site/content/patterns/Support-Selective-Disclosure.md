[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Summary
<!-- One short paragraph summarising the pattern.-->

Many services (or products) require the collection of a fixed, often large, amount of personal data before users can use them. Many users, instead, want to freely choose what information they share. This pattern recommends that services Support Selective Disclosure, tailoring functionality to work with the level of data the user feels comfortable sharing.

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Controllers aim to design services to be both maintainable and extensible, though as a result blanket strategies are used to simplify designs. Users are individuals and do not always respond the same way to different approaches. Restricting user choice on processing displeases users, and bundling purposes for that processing conflicts with international law. Users want a service which works without the data they do not want to provide, even so far as effectively anonymous usage.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->
<!-- Should be context-free, leading with a concise problem statement.-->

Controllers typically want to collect data by default, and tend to limit the diversity of their services, and the choices they provide, to encourage that. This goes against the best interests of the users, who have varying data collection tolerances.

The underlying issues are discussed in more detail below.

#### An All or Nothing Mindset
Controllers are tempted to see consent as all-encompassing, see held personal data as data available for use, and the lack of that data as a barrier to service. This mindset reduces adoption of the offering and may introduce a lack of trust.

#### The Temptation to Share by Default
<!-- Note, long headings (~40char) will make text and ToC overlap -->
User information is frequently acquired before users are given the opportunity to decide whether to share. An example of this is in cookie policies, where the whole site is loaded before the user is shown the policy. From this loading, metadata is often generated even if the user chooses to leave the site.

This problem is also present when users register for or acquire a service, as unnecessary information is often requested as part of the process.  In the case of account registration users are often provided with inappropriate default settings. They are typically sent additional offers by default as well. The negative implications of these defaults are also not necessarily reversible, as the Internet is notorious for its inability to forget.

#### Data Gluttony
Services tend to collect a surplus of information, especially in contexts where monitoring is integral to the system, such as in productivity tracking. This unnecessary level of detail results in negative experience factors for the tracked individuals (for e.g. increased levels of anxiety) which in a work environment may affect their actual productiveness.

#### Forces/Concerns
- Controllers want their system to be applicable to as many potential users as possible, but do not want this to heavily inflate costs or jeopardise profits
- Users want to be able to use a system anonymously, or with as little leakage of their personal information as needed to perform functionality
- Controllers do not want users to be capable of malicious activity without consequence
- Many controllers want to benefit from the data they collect from their users, but do not want to violate their users' trust by using their information excessively or otherwise inappropriately

<!--#### Indications-->
<!-- Symptoms that may indicate the existence of this problem, if otherwise unclear.-->

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Determine what information is integral to the functioning of the system. If functionality may be sustained with less, it should be an option for the user, even if doing so comes with reduced usability. Additionally, provide anonymous functionality only where it cannot jeopardise the service. Lower levels of anonymity may be provided in relation to various capabilities for abuse.

#### Rationale
<!-- Where useful or otherwise unclear, justification for the solution's appropriateness in this pattern's context.-->
The key to a successful solution is meeting the correct balance between how little the system can work with and what is feasible in performance. This will affect the applicability of the system; a system which optionally functions with less will attract far more users. This increases the popularity of the system and therefore offsets a certain amount of additional implementation costs.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

#### Anonymous Usage
At one extent it may be possible to benefit from the system anonymously, though whether this is feasible will depend on the level of abuse anonymous usage might attract. Alternatively, this can be approached from the perspective of revocable privacy. That is, tentative or eroding anonymity. If this would result in an unsustainable business model, however, a re-balance of usability may be sufficient.

It is important to note that while anonymous usage might not translate into direct profit, additional contributors and positive public perception may increase overall user activity. Furthermore, there are payment methods which support [some level of] anonymity if necessary.

#### Assumption of Modesty
Where users choose to register, it should not be assumed that they wish to use all of the system's services. Short of explicitly opting for 'best experience settings' (with sufficient explanation; not the default option), user preferences should default to the most privacy-friendly configuration.

There exist numerous strategies for streamlining the preference-tailoring process, including gradual elevation as they begin to use services (see [Awareness Feed](Awareness-Feed) and [Lawful Consent](Lawful-Consent)).

#### The Right to Reconsider
User decisions should be amendable. For example, an agreement to share activity with another user may not carry over to all future usage. A user may decide to share something once in a while, or share regularly, but not always. The system should be able to account for this behaviour if it aims to prevent mistaken actions.

#### Look Before You Leap
In situations where there are requirements for personal data, particularly when strict, users should be aware of this prior to their consent. These services should also not be coupled with other services holding lower requirements unless it would be infeasible not to. Where users are required to use the system, no unnecessary information should be used. In a productivity tracking example, this may mean that users are only identified when their productivity falls, or perhaps if they opt to receive credit for their work.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
Due to increased control over their data, users may be able to share pieces of information which they otherwise wouldn't due to it otherwise being coupled with what they perceive to be more sensitive.

Users will be less likely to mistakenly release personal information to the public, since they would perhaps be able to set their own defaults, or by default stay private. To a further extent, users may be capable of participating or benefiting from a system anonymously. Where this is the case, the activity levels of the system will benefit, and users who stayed anonymous due to mixed feelings about the system may decide to register and authenticate later, once trust has been built.

#### Liabilities
The system's complexity will increase by a certain degree, as not only will each user need to have their preferences set, stored, and adhered to, but also services will need to account for variable inputs. As such, flaws in the system will be felt with greater effect.

Providing anonymity for some contexts may result in increased undesired behaviour, depending on the level of anonymity provided. Anonymising a service often requires additional processing power, especially in the case of revocable privacy.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

By separating functionality according to purpose and personal data needed, as well as providing variations where feasible, the system will be more complex. Services will need to be designed while taking into consideration the potential for limited access to data.

Improvements to results may therefore be limited as well. However, the controller may be able to gauge adoption in data-rich services while they are investing in them. The same holds for determining how valuable non-invasive alternatives are, as users will express their [in]tolerance for invasiveness through their actions.

## Examples
<!--Motivational example to see how the pattern is applied.-->

 * TUKAN; a collaborative software development environment which introduces Modes of Collaboration: lightweight contexts which filter collaboration possibilities according to user privacy preferences.
 * Anonymous access; to a degree, there exist many examples of websites which allow access to content without a need to identify users. Especially in cases where usage analytics are kept to a minimum, or tracking is disabled completely, users may use a service without a need to be monitored.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern may be complemented by [Masquerade](Masquerade), as together they may focus on audience and identifiability when determining disclosure choices.

[Support Selective Disclosure](Support-Selective-Disclosure) is a compound pattern. It contains and therefore _may use_ a variety of patterns geared towards granular and contextual privacy preferences and choices regarding the provision of data. These include:

- [Negotiation of Privacy Policy](Negotiation-of-Privacy-Policy);
- [Buddy List](Buddy-List);
- [Discouraging blanket strategies](Discouraging-blanket-strategies);
- [Decoupling [content] and location information visibility](Decoupling-[content]-and-location-information-visibility);
- [Reasonable Level of Control](Reasonable-Level-of-Control);
- [Selective Access Control](Selective-Access-Control); and
- [Enable/Disable Functions](Enable-Disable-Functions).

It also _may use_ [Private link](Private-link) as a means to provide anonymous functionality in a resource sharing context.

[Support Selective Disclosure](Support-Selective-Disclosure) may be aimed towards providing users with choice, but it must still do so conscientiously. It _must use_ [Lawful Consent](Lawful-Consent) in order to ensure that consent for each choice is informed, explicit, and freely-given.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

H. Baraki et al., Towards Interdisciplinary Design Patterns for Ubiquitous Computing Applications. Kassel, Germany, 2014.

E. S. Chung, J. I. Hong, J. Lin, M. K. Prabaker, J. a. Landay, and A. L. Liu, “Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing,” DIS ’04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233–242, 2004.

G. Iachello and J. Hong, “End-User Privacy in Human-Computer Interaction,” Foundations and Trends in Human-Computer Interaction, vol. 1, no. 1, pp. 1–137, 2007.

J. Porekar, A. Jerman-Blažič, and T. Klobučar, “Towards organizational privacy patterns,” Proceedings - The 2nd International Conference on the Digital Society, ICDS 2008, 2008.

S. Romanosky, A. Acquisti, J. Hong, L. F. Cranor, and B. Friedman, “Privacy patterns for online interactions,” Proceedings of the 2006 conference on Pattern languages of programs - PLoP ’06, p. 1, 2006.

T. Schümmer, and J. M. Haake (2001). “Supporting distributed software development by modes of collaboration,” in Proceedings of ECSCW 2001, Bonn.

T. Shümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->