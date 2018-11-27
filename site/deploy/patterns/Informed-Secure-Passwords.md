[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Secure Passwords

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Credentials are required by numerous services (and products) in order to ensure that only authenticated and authorized users have access to certain features. Controllers typically provide authentication mechanisms in the form of usernames and passwords. Although these provide a weak form of security when used incorrectly, they are more convenient for users than many less popular and more secure alternatives. Controllers often try to circumvent the shortcomings of passwords by encouraging users to change them frequently, use stronger variations, check them, and prevent disclosure and reuse. However users make use of many services, and use many passwords, thus discouraging proper application. This misapplication can result in personal data being accessed by unauthorized persons.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users must regularly maintain many strong passwords, remember them, and protect them, but are not well equipped to do so. So instead many choose weak ones and reuse them.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users do not want to remember many long or complex passwords
- Users do not want others to access their secured services
- Controllers want to protect accounts from unauthorized access
- Controllers do not want to apply too much pressure to their users to maintain and protect strong and unique passwords

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide users with assistance in understanding and maintaining strong passwords which are easier to remember.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

Assistance is typically provided in the following ways:
- _Passive mechanisms (e.g. help button)_
- _Static mechanisms (e.g. pop-ups)_
- _Dynamic mechanisms (e.g. dynamically adjusting message) [the] method that is most noticed by the users and therefore also most helpful_

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Short passwords, those at character lengths which are feasible for brute forcing, are not secure. The difficulty to brute force is affected by the known complexity, such as using a variety of character types. However, complexity affects password memorability more than strength. It is more important that passwords are long enough, and varied enough. This does not mean they should be difficult to remember. A couple unrelated words strung together can be a very secure yet memorable password.

These aspects can be weighted together to provide the user with a strength meter, as well as the explanations behind it. Examples of secure passwords should also be provided, but not accepted as the actual password. Do not enforce the use of special characters and numbers. Length, along with sufficient variation, should be the deciding factor in password strength.

Given enough resources and time however, state of the art character lengths can be overcome. It is as such useful to change them more regularly than the time it would take to brute force them. Otherwise, the longer that a password remains unchanged, the more likely it is that the password has been compromised.

Therefore a mechanism should also be provided to remind a user when it is time to start thinking of a new password. Based on how strong the original was this may be more or less often. [Unusual Activities](Unusual-activities) may also justify a more frequent update.

When verifying whether a user used the same password in a second field, to prevent mistypes, simply indicate whether the fields match with a recognizable affirmation. Typically this uses a green theme, and may use a check mark.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_Secure passwords are very important in [an interconnected world]. Users generally tend to use familiar words such as names of pets and family members and no special [characters] when creating a password. These passwords can hence be easier hacked using social engineering than longer [and more complex passwords]. Secure passwords are a necessary step towards personal security. Using the above approach, the user obtains more feedback on the safety of the entered password and is therefore able to create safe passwords that can be remembered._

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->



### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

Strongpasswordgenerator.com both provides explanation on state of the art approaches to secure passwords in a layperson friendly manner and helps generate them.

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Unusual Activities](Unusual-activities), [Informed Credential Selection](Informed-Credential-Selection), [Appropriate-Privacy-Icons](Appropriate-Privacy-Icons), [Icons-for-Privacy-Policies](Icons-for-Privacy-Policies), and [Privacy-color-coding](Privacy-color-coding).

While [Unusual Activities](Unusual-activities) establishes access norms for authentication, this pattern focuses on encouraging better use of password-based authentication. The patterns may work together to aid in detection and response to compromised access, and in users learning from these instances. In [Informed Credential Selection](Informed-Credential-Selection), the pattern focuses on informing users about the data released for authentication in certain contexts, elaborating on how such data might be used. With overlapping contexts, these patterns both provide assistance around password-based authentication, together enhancing awareness and usage.

It has a complementary relationship with the visual cues [Appropriate-Privacy-Icons](Appropriate-Privacy-Icons), [Icons-for-Privacy-Policies](Icons-for-Privacy-Policies), and [Privacy-color-coding](Privacy-color-coding) as these can help provide simple information on password strength and policies.

It also _complements_ the Auto Create Password pattern.

### [Sources]
<!-- References to the original source of the pattern.-->

S. Fischer-Hübner, C. Köffel, J.-S. Pettersson, P. Wolkerstorfer, C. Graf, L. E. Holtz, U. König, H. Hedbom, and B. Kellermann, “HCI Pattern Collection - Version 2,” 2010.

C. Graf, P. Wolkerstorfer, A. Geven, and M. Tscheligi, “A Pattern Collection for Privacy Enhancing Technology,” The Second International Conferences of Pervasive Patterns and Applications, vol. 2, no. 1, pp. 72–77, 2010.



<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->