[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Anonymous Interaction

## Context
<!-- The situations in which the pattern may apply.-->

Users are frequently monitored for various reasons by a service (or product), for instance to associate them with shared activity. Monitoring is sometimes needed to allow users to know certain attributes about one another which can assist them in communicating or otherwise participating. This monitoring is sometimes apparent to the user, opted-in, or unavoidable. This may cause some users distress, or affect their actions for better or for worse. Many working environments additionally feature productivity tracking software or the ability to _Gaze Over the Shoulder_. This of course allows any altered activity to have an effect on work performance, or its perception. Mandatory tracking is commonly undesirable for users, and in these cases can negatively affect user experience.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users act differently under active supervision, and this may negatively impact their content generation.

#### Forces/Concerns
- Controllers may require monitoring for the functioning of the service or depend on it as a business model.
- Users have an interest in restricting the amount to which they are monitored.
- Every user could require a different level of identifiability depending on the context.
- It would be necessary to at least have [Partially Identification](Partial Identification) of the user when implementing [Reciprocity](Reciprocity).

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow users to select their desired identifiability for the context in question. They may reveal some subset of the interaction or account attributes and filter out the rest.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

For implementing this pattern, a configuration interface will be required. Two approaches could be considered: levels of publicity or publicity profiles.

In levels of publicity, all possibly revealed information could be arranged on a scale depending on how identifying each kind of information is alone or when shown together. A visual element could be used to select a specific publicity level. When the users select one level, all information with the same or smaller publicity level will be revealed. This is taken into account when measuring where upon the scale a piece of information falls.

In publicity profiles, all possibly revealed information could be depicted using visual elements and the users have to select each kind of information that they want to reveal. Furthermore, depending on the kind of information, the users could define different granularity for each one (E.g. regarding location it is possible to define the country, region, city, department and so on).

[Reciprocity](Reciprocity) could implemented by _connecting privacy levels with permissions for interaction._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

#### Benefits
- _Since users can explicitly control how much personal information they provide to other users, they [no] longer have to fear that their personal information [is being] misused by [other users]. This provides them with an environment that is as private as the situation [demands]._
- _[Users] can decide to discuss private matters without the possibility of being monitored by other users by simply changing [their] privacy profile [or privacy level]._

#### Liabilities._
- _Anonymous interaction with the system may lower the inhibition threshold for destructive or forbidden behavior. The users do not have to fear that destructive activities are associated with their identity. Thus, [the controller] should provide only limited functionality for anonymous users (e.g. only read access or only moderated postings to a discussion board)._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

- Video systems: NYNEXPortholes (Lee, Girgensohn, and Schlueter 1997);
- TUKAN (Schummer and Haake 2001);
- Anonymous access in web-based communities.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern may be used by [Reasonable Level of Control](Reasonable-Level-of-Control), as contextual identifiability may be featured in the application of [Reasonable Level of Control](Reasonable-Level-of-Control). It is also complemented by [Private link](Private-link), which is one such method to provide information to a specific audience, and [Active broadcast of presence](Active-broadcast-of-presence), broadening the scope for the audience instead.

This pattern _complements_ [Support Selective Disclosure](Support-Selective-Disclosure), as it allows setting identifiability per context while the other provides granular information which could lead to identifiability. Together they focus more on this aspect than disclosure as such.

It also _may use_ [Buddy List](Buddy-List), as when one is deciding to whom their info is going to be shared, a [Buddy List](Buddy-List) could assist that selection.

Additionally, [Masquerade](Masquerade) _leads to_ [Reciprocity](Reciprocity). The application of this pattern creates a potential avenue for abuse or misuse by users who choose to remain anonymous. In order to prevent this, users may be given reciprocal capabilities according to their identifiability level.

As per Schümmer et al. (2004), it also is complemented by:

- Don’t Disturb;
- Gaze Over the Shoulder (dark-pattern);
- [Reciprocity](Reciprocity)

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

T. Schümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->