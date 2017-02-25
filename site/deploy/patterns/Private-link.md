[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->



<!--intent-->
Enable sharing and re-sharing without wide public visibility or cumbersome authenticated access control.

Supports [user control](User-control) and [distribution](Distribution).

##Context
<!-- The situations in which the pattern may apply.-->

When private content is accessible online, especially granular resources, and users want to share (and enable re-sharing) using existing communication mechanisms. Also particularly relevant when users are sharing with contacts who can't easily authenticate.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How do you share a private resource with unauthenticated users in a way that respects its sensitivity?
The solution must not allow unauthenticated users to access resources that weren't intended to be shared. 

<!--forces/concerns-->
Be sure the link is unguessable (within some bounds) so that an outsider can't easily find all (or any) of the unlisted links either by brute force or by knowing when information was stored or what its name might be.

Note that the URL will be retained in recipients' browser history and could easily be inadvertently shared with others. Services should help users understand these limitations.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide the user a _private link_ or _unguessable URL_ for a particular set of their personal information (their current location, an album of photos). Anyone who has the link may access the information, but the link is not posted publicly or easily guessable by an outsider, so the information is not shared with all. The user can share the private link with friends, family or other trusted contacts who can in turn forward the link to others who will be able to access it, without any account authentication or access control lists.

Services may also allow users to revoke existing private links or change the URL to effectively re-set who can access the resource.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



<!--##Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

1. Flickr "Guest Pass"

2. Google "anyone with the link" sharing

3. Tripit "Get a link"

4. Dropbox "Share Link"

<!--###[Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--##See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



<!--###[Related Patterns]-->
<!-- Supporting and conflicting patterns-->



<!--###[Sources]-->
<!-- References to the original source of the pattern.-->



<!--##General Comments-->
<!-- Separate discussion on the pattern.-->



<!--##Tags-->
<!-- User definable descriptors for additional correlation.-->