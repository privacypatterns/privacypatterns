[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Contact List, Address Book

## Context
<!-- The situations in which the pattern may apply.-->

Users frequently interact upon various media, forums, and communication channels. There are however far more users on these channels than most would be comfortable wading through. As controllers for such channels, many services wish to aid their users in finding familiar and comfortable interactions. Users may also seek to participate outside their immediate circles, but may aim not to stray too far.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

_When many users are able to interact in the interaction space, it is hard to maintain an overview of relevant interaction partners since the number of users exceeds the number of relevant contacts for a specific user. User lists grow very large and it is hard to find people who the local user knows. On the other hand, the local user is [more interested in close contacts]._

A service aims to provide users with shortcuts to interaction with users who they are most likely to interact with within a particular context (close contacts within social circles).

#### Forces/Concerns
- Large socially oriented or interaction oriented mediums often hold more participants overall than any one user can manage
- Users want to interact in a way which is familiar and comfortable, most likely with people they know
- Some users aim to make new interactions with people bordering their friend circles, or sharing connections

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Allow users to find and assign others to a user-maintained directory of social circles and contexts to interact with. This is optionally only visible to the users themselves.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Users should be able to view the Buddy List on demand, either during a search operation or persistently. They should be able to add or remove users from the relevant list with minimal effort.

The list may be seen as a set of user objects. This buddy list has the possibility of adding or removing user objects. In the first case, whenever the local users interact with another user, they can add the other user to their buddy list. To reach this goal, in the user interface, the local users can select the representation of the another user and execute a command for adding (e.g. a menu item associated to the user object). For removing users, when the buddy list is shown, the local users can select the representation of the another user and execute a command for removing (e.g. a menu item associated to the user object).

#### Extending Functionality
The Buddy List may fuse with other common interaction idioms to constitute a more comprehensive approach to the problem, making it more than an idiom.

- The list may extend to the full User Gallery during a search operation, listing 'buddies' distinctively before the rest of the userbase;
- Common connections or nearby outliers can be suggested to the user, both during search and while viewing the list itself;
- The list may indicate the activity or status of each user, as a User List, additionally doing so where consented for users outside the list;
- Users who also list the local user in their Buddy List may be indicated, perhaps even when not explicitly in the local user's list; and
- Users may choose to block other users from seeing them.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->
#### Benefits
_Connecting the means for adding users to the buddy list with the user’s representation (or the interface elements that are used to interact with the other user) makes the process of adding a user to the buddy list intuitive and reminds a user to consider adding the user._

By using the Buddy List to make connections about the user, the service can recommend relevant contact suggestions.

#### Liabilities
_If users only consider buddy lists for maintaining contacts to other users, they will hardly find new users in the system. Thus you should ensure that users can also browse other users who are not on their buddy list (e.g. by providing a User Gallery)._

The service can trivially derive the social structure of its userbase which may put trust at jeopardy.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->


## Examples
<!--Motivational example to see how the pattern is applied.-->

- Instant Messaging Systems
- Email address books and mailing lists
- Reddit Subreddits
- Facebook Friends
- LinkedIn Connections

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Buddy List](Buddy List) may be used by [Masquerade](Masquerade), as it may assist in choosing whom to reveal potentially or deliberately identifying information to. It may also be complemented by [Reciprocity](Reciprocity) as quid pro quo for connections. Those who are on a user's list will have the user on their own lists. This same property holds for [Incentivized Participation](Incentivized-Participation) if it _uses_ [Reciprocity](Reciprocity).

This pattern allows users to monitor one another in a variety of ways, such as their status, or activity. Therefore a [Buddy List](Buddy List) _must use_ [Lawful Consent](Lawful-Consent) so that participants are given the ability to agree or disagree in an informed and unforced manner.

#### Idioms
<!-- Insufficient to stand alone as patterns-->

- User Gallery (all users) / User List (online/active users);
- Who’s Listening (Buddy Lists the user appears in);

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

T. Shümmer, “The Public Privacy – Patterns for Filtering Personal Information in Collaborative Systems,” in Proceedings of CHI workshop on Human-Computer-Human-Interaction Patterns, 2004.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->