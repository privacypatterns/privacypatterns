[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users frequently interact with controllers whose services (or products) they have not used before. At this point the knowledge the user has about the controller and its practices, especially regarding privacy, is typically nonexistent. The controller as a whole has a much clearer understanding of its policies. It also begins to know a lot about the user in a short time period, if not already well informed. The user needs to put in sufficient effort to investigate the controller to know about its practices to provide valid consent. The controller needs this valid consent to lawfully process the user's information.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Controllers have far more information than the users who utilize their services, which makes the users vulnerable to exploitation.

_Information asymmetry is generally described as one party having more or better information about a transaction than the other._ In order for a healthy consumer relationship to ensue, users should know close to as much about the controller's practices as it would be expected to itself.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users sometimes want to use services of an unknown party, and are cautious about what it might do with their data
- Users may not want to provide any more information than necessary, but want the services to function properly
- Controllers want users to understand the intentions behind the data they collect, and be content with how they use it
- Controllers need to ensure that users understand purposes and means for processing before their consent will be valid

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Require minimal information from the user, so that only as much personal data as is required, explained, and consented to, is processed. Further reduce the imbalance of policy knowledge by writing clear and concise policies rather than, or in addition to, complex and verbose ones.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Limit the amount of data needed to provide the services necessary to the users, and where appropriate, prefer less sensitive data to do so. Give users the option to opt in to features which require more data, but keep it minimal by default. If the amount of data needed is minimized, then users have less they need to understand, and less to disagree with. This also allows for more simple policies.

Making policies more clear and concise is also crucial, as users will not want to sift through long-winded texts to understand what would happen with their data. Highlight important aspects for users themselves, rather than allowing them to become cluttered with legal jargon, detail, and complexity. While certain elements cannot be explained adequately without doing so at length, not all aspects are relevant at once. Some elements may be summarized without the detail, so that users may better understand the current focus. The full detail should still exist however, and be easily located.

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->



### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_Many online organizations provide signals to their customers. Often they are publicly and freely available, but can also be purchased by third parties. The online auction site, eBay, for example, uses a reputation system to assist other buyers in feeling more comfortable purchasing from an unknown seller. Many other ecommerce sites (such as Amazon) rely heavily on the reputation and referral systems in order to help customers make a more informed decision._

_Websites are more commonly publishing their privacy policies in order to assuage the privacy concerns of their users [ECC2005]. Users are also stating that they would be more comfortable interacting online if the site had displayed the [TRUSTe](http://www.truste.org) or [BBBOnline](http://www.bbbonline.org) symbols, or had a privacy policy [CRA1999]._

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Privacy Mirrors](Privacy-Mirrors) and [Personal Data Table](Personal-Data-Table).

This pattern supports informed user agency through explanations of policy and potential risks. This is compatible with the solution suggested in [Privacy Mirrors](Privacy-Mirrors), as it provides a general solution for managing identify through informing and controlling sharing decisions. Together they could compose a better identity management solution for the user.

[Personal Data Table](Personal-Data-Table), like this pattern, allows a user to see what personal data is acquired by the controller. It provides a tabular overview of what is still retained for that user. Together these patterns show a clearer representation for the user to consider.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Romanosky, A. Acquisti, J. Hong, L. F. Cranor, and B. Friedman, “Privacy patterns for online interactions,” Proceedings of the 2006 conference on Pattern languages of programs - PLoP ’06, p. 1, 2006.

S. Engelman, L. F. Cranor, A. Chowdury, “An analysis of P3P-Enabled web sites among Top-20 Search Results” Carnegie Mellon University, 2005.

L. Cranor, J. Reagle, M. Ackerman, “Beyond Concern: Understanding Net Users’ Attitudes About Online Privacy” AT&T Labs, 1999.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->