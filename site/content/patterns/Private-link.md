[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->

The controller provides a service which hosts resources, potentially constituting personal data. When users want to share (and enable re-sharing of) these resources, they may wish to do so privately using existing communication mechanisms. This is particularly relevant when users are sharing with contacts who would rather not, or cannot, simply authenticate.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users want to share a private resource with unauthenticated users in a way that respects the sensitivity of that resource.
The solution must not allow users to access resources that weren't intended to be shared, nor publicize the location of the intended resource to unintended recipients.

#### Forces/Concerns
- The controller should keep the links confidential in order to honor the user's privacy expectations.
- The link should not be guessable (e.g. by convention or brute force) to prevent unintended recipients from accessing unlisted links.
- The user should be able to limit the access to a resource by version or time restriction.
- The recipient should be able to forward the link to another trusted recipient, so long as the link is valid.
- The recipient should be able to access the link again at a later date, unless the resource is version or time restricted.

Note that the URL will be retained in recipients' browser history and could easily be inadvertently shared with others. Services should help users understand these limitations.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide the user a _private link_ or _unguessable URL_ for a particular resource, such as a set of their personal information (e.g. their current location, an album of photos). Anyone who has the link may access the information, but the link is not posted publicly or guessable by an unintended recipient. The user can share the private link with friends, family or other trusted contacts who can in turn forward the link to others who will be able to access it, without any account authentication or access control lists.

Services may allow users to revoke existing private links or change the URL to effectively re-set who can access the resource. Additionally, users may set a time-limit for the resource's validity, or have it invalidated upon modification.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

The controller allows their users' online resources to be shared by publishing an unlisted URL with a complex, long, and randomly generated string. This can be part of a query string as opposed to an on disk location. In this case, the preprocessor intercepts the query and redirects the user to the correct resource. This may be an actual file on disk (probably not served by direct link), generated on the fly, or extracted from a database or compressed file. The preprocessor can verify validity dynamically before serving the resource.

The situation in which the user has a direct link to the resource location is not ideal, however, as it will need to change in the event of a time or version restriction since access to the file is not controlled by the preprocessor.

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

1. Flickr "Guest Pass"
2. Google "anyone with the link" sharing
3. Tripit "Get a link"
4. Dropbox "Share Link"

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

[Private link](Private-link) may be complemented by [Active broadcast of presence](Active-broadcast-of-presence), which deals with sharing with all people, while this pattern considers specific audience. They could together broadcast a more public kind of link. [Private link](Private-link) may also be used by [Support Selective Disclosure](Support-Selective-Disclosure) as a means to provide anonymous access in a resource sharing context.

This pattern _complements_ a number of patterns, namely [Masquerade](Masquerade), [Decoupling content and location information visibility](Decoupling-[content]-and-location-information-visibility), [Selective Access Control](Selective Access Control), and [Reasonable Level of Control](Reasonable-Level-of-Control).

[Private link](Private-link) could facilitate both [Masquerade](Masquerade)'s selective identifiability and the provision of decoupled location information to specific individuals, after the fact, and while being open to modification. This private sharing with anonymous users may be achieved along with [Selective Access Control](Selective Access Control)'s definition of audience for a contribution.[Reasonable Level of Control](Reasonable-Level-of-Control) aims to define the granularity while sharing content and the specific audience. These can work together for similar reasons, as [Private link](Private-link) again is able to facilitate.  In each case it could provide a more complete sharing (or withholding) solution.

Finally, Private link](Private-link) _must use_ [Lawful Consent](Lawful-Consent), as the generation of even unpublished links constitutes processing.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:

Doty, N., Gupta, M., & Zych, J. (n.d.). PrivacyPatterns.org. Retrieved February 26, 2015, from http://privacypatterns.org/

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->