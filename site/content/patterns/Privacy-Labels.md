[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Privacy Nutrition Labels

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users use a variety of services (or products) for which there are different effects on their privacy. The providers of these services have varying policies around that usage, and thus affect privacy differently. Typically the differences appear in a privacy policy document, or set of documents. Services encourage users to read this information, which can be quite extensive and involved. Users do not typically have the time or patience to investigate this information on their own.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Due to the effort required, users often do not investigate the various privacy policies of the services they use, leaving them uninformed about the potential consequences of their consent and choices. Services tend to have overly complex policies, and present them inconsistently, which agitates this issue.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to know how much personal data they must share to use a service, without unnecessary or disproportionate effort
- Users want to quickly determine which services provide the functionality they seek with the privacy tradeoffs they can best accept
- Controllers want users to realize what data they use, and how they use it, so that they do not process it without informed consent
- Controllers also want users to understand the options they have in privacy preferences, and the advantages of opting into further sharing

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Present the user with an standardized privacy 'nutritional' label to quickly summarize policy information.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

_Putting a box around the label identifies the boundaries of the information, and, importantly, defines the areas that are “regulated” or should be trusted. This is a common issue when the label is placed in close proximity to other information, but may not be as significant an issue online. _

_Using bold rules to separate sets of information gives the reader an easy roadmap through the label and clearly designates sections that can be grouped by similarity_

_Providing a clear and boldfaced title, e.g., Privacy Facts, communicates the content and purpose of the label specifically and assists in recognition._

_Finally, we have defined a maximum width of 760px for this label and all following designs in this paper. One important consideration was that the privacy label design be printable to a single page and viewable in the standard width of today’s internet browsers._

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_The tabular format can be filled in automatically if a site uses [[Platform  for  Privacy  Preferences](Platform-for-Privacy-Preferences)]_.

[![Privacy Label Example](/media/images/Privacy-Label.png)](https://cups.cs.cmu.edu/privacylabel-05-2009/current/1.php)

Privacy Labels use four colored squares to help convey information quickly:
- Dark Red Square: _we *will* collect and use your information in this way_
- 'opt out' Red Square: _by default, we *will* collect and use your information in this way unless you tell us not to by opting out_
- Light Blue Square: _we *will not* collect and use your information in this way_
- 'opt in' Blue Square: _by default, we *will not* collect and use your information in this way unless you allow us to by opting in_

In the [short table variation](https://cups.cs.cmu.edu/privacylabel-05-2009/current/2.php), the label omits any rows (information types) which are entirely light blue (no collection or use). Instead this information gets summarized in text below the label using short natural-language format. _Similar rows are merged into combined statements for brevity._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

The Privacy Label authors [conducted a study](https://www.cylab.cmu.edu/_files/pdfs/tech_reports/CMUCyLab09014.pdf) where they assessed respondents' (n=764) attention to presented policies. They were able to determine how long respondents looked at each policy and where that affected their opt-out and further investigation decisions in the study. These were randomly divided between Privacy Labels (n=188), short table version (n=167), short text version (n=169), the full original policy document (n=162), and [Layered Policy Design](Layered-policy-design) (n=78). Privacy Labels tested best among the respondents, followed by short table and text variations.  [Layered Policy Design](Layered-policy-design) was not found to perform any better than the full text when not additionally rephrasing policies.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

Privacy Labels are currently implemented using [Privacy Bird and Privacy Finder](http://www.privacyfinder.org) Their [source code](http://www.privacyfinder.org/dist/privacybird-source.tar.gz) is also available.

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback), [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), [Privacy-Aware Network Client](Privacy-aware-network-client), [Awareness Feed](Awareness-Feed), and [Privacy Color Coding](Privacy-Color-Coding). It also implicitly _complements_ [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides) through [Awareness Feed](Awareness-Feed), and [P3P](Platform-for-Privacy-Preferences) through [Privacy-Aware Network Client](Privacy-aware-network-client).

As a visual cue, this pattern aids in providing [Impactful Information and Feedback](Impactful-Information-and-Feedback) by augmenting it with quickly interpreted information. Unlike other visual cues, this pattern does not relate to [Informed Secure Passwords](Informed-Secure-Passwords).

Visual cues like this pattern also aid in providing accessible policies, and thus _complement_ [Layered Policy Design](Layered-policy-design), [Privacy Aware Wording](Privacy-Aware-Wording), and [Privacy-Aware Network Client](Privacy-aware-network-client). This pattern in particular implicitly _complements_ [P3P](Platform-for-Privacy-Preferences) through [Privacy-Aware Network Client](Privacy-aware-network-client).

Like many patterns which inform users, elements of [Awareness Feed](Awareness-Feed) and its methods for establishing awareness also go well with visual cues like this pattern. It also implicitly aids [Trust Evaluation of Services Sides](Trust-Evaluation-of-Services-Sides), which provides visual representation to highlight trust levels to the user.

#### Pre-patterns
- _uses_ Financial Privacy Notice
- _refines_ P3P Expandable Grid, which sought to _refine_ [P3P](Platform-for-Privacy-Preferences)
- _refines_ Simplified [Privacy] Grid
- _refines_ Simplified [Privacy] Label

### [Sources]
<!-- References to the original source of the pattern.-->

P.G. Kelley, L.J. Cesca, J. Bresee, and L.F. Cranor. Standardizing Privacy Notices: An Online Study of the Nutrition Label Approach. CHI 2010.

P. Kelley, J. Bresee, L. Cranor, and R. Reeder. A "Nutrition Label" for Privacy. SOUPS 2009

Kleimann Communication Group, Inc. Evolution of a Prototype Financial Privacy Notice. February 2006. Available: http://www.ftc.gov/privacy/privacyinitiatives/ftcfinalreport060228.pdf

Reeder, R.W. Expandable Grids: A user interface visualization technique and a policy semantics to support fast, accurate security and privacy policy authoring. PhD thesis, Carnegie Mellon. 2008. http://www.robreeder.com/pubs/ReederThesis.pdf

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->