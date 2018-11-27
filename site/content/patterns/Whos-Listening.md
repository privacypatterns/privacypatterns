[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

User List

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Users of a service regularly share its usage with other users. Sometimes these are users they know personally, and sometimes these are anonymous, unauthenticated persons. This occurs particularly in shared or collaborative environments where content is generated. Knowledge of the contributions of other users contributes to additional or refined content in general. Controllers facilitating this interaction therefore encourage the users to form groups or allow public access. Though when the amount of disclosure is high it is difficult to keep track of attribution and modification.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users do not know if the content they are accessing or have disclosed has been accessed or modified by others, nor if it is someone they know.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to know who can access their disclosures and those of others
- Users want to know that specific other users have accessed or modified content
- Controllers do not want users to be unaware of who can see their disclosures
- Controllers want to log access to prevent abuse

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provided that users know their access is not private, inform them of other users, even unauthenticated, which are also accessing the content in question.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Ensure that it is made clear to the user that the content they are about to view is accessed in a shared and public manner. Their access will be visible to others, and may be recorded by the system (if applicable) for historic views, or for preventing abuse.

The implementation of the system prior to this will likely only require the addition of UI elements to indicate the access state as the system already perceives it. Each user may be shown using some identifier easily recognizable by other users, such as a randomly selected avatar (e.g. Gravitar), initial(s), username, or profile picture. The same may identify unauthenticated users as 'anonymous'.

Where historic views are provided, the same consistent identifier can be shown next to differential changes along with timestamps. The ability to edit, remove, or anonymize a contribution may also be available if desired. Details of these extra features, or justification for the lack of user ability to perform these actions, should be provided prior to usage.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_This pattern will only work, if the users trust the system that provides the information and log in personally. In web based systems that don’t require personal login, it is not possible to [reliably] detect, who is visiting the site (even cookies [and browser fingerprints] do not [necessarily] reveal information about the users’ identities). This is problematic for [attribution], but it ensures that the users can control their privacy._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_The [MIME] protocol provides an option so that receivers of the [message] are asked to confirm the message. It is defined in [RFC 8098 (Hansen & Melnikov 2017)]_

_The BSCWshared workspace system (Bentley, Horstmann, and Trevor 1997) [logs] accesses to the shared [content]. The event log can be queried [by users] and for each document stored in the shared workspace, the users can define notification patterns. By these means, it is possible for an author of a document to find out who read the document (and when)._

Various collaborative environments, like Google's Docs, or chat rooms, instant messaging, and other immediate content sharing mediums frequently provide lists of currently online users. These can also indicate a number of anonymous users who have not authenticated, but have reduced privileges.

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is a component of the compound pattern, [Awareness Feed](Awareness-Feed). As such, this pattern _may be used_ by it.

This pattern _complements_ [Privacy Awareness Panel](Privacy-Awareness-Panel), [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback), [Buddy List](Buddy-List), and [Reciprocity](Reciprocity).

[Privacy Awareness Panel](Privacy-Awareness-Panel), like this pattern, shows disclosed information access. It specifically allows monitoring what access is occurring and how it might become identifying. Comparatively, this pattern allows for monitoring who accesses the same content as the user. These could work together to have a more complete solution which covers released and accessed content monitoring. [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback) is another pattern which tries to show who can see disclosed content. It however adds the possibility of knowing how the data might be used, providing useful feedback to the user. These patterns may work together in a similar fashion.

It also _may use_ Schümmer's Activity Counter for anonymous information aggregation which does not reveal receiver identify. The same holds for Elephant’s Brain, which can log information of user activity. It also _refines_ the Magic Document pattern (Volter 2003), which to a lessor extent ensures that collaborative users are aware of accessed information.

### [Sources]
<!-- References to the original source of the pattern.-->

T. Schümmer, “The Public Privacy - Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

T. Hansen & A. Melnikov, “Message Disposition Notification,” IETF. STD 85. RFC 8098. Retrieved November 2017.

R. Bentley, T. Horstmann, and J. Trevor, “The world wide web as enabling technology for cscw: The case of bscw,” 1997.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->