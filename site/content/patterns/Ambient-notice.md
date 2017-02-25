[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Provide an ambient notice (unobtrusive, non-modal) when location is being accessed to increase awareness of ongoing tracking.

<!--intent-->
Provide unobtrusive, ongoing notice of real-time location tracking.

Supports [notice](Notice), [transparency](Transparency-and-feedback) and [user control](User-control).

##Context
<!-- The situations in which the pattern may apply.-->

When a service is tracking a user's location in an ongoing fashion, or accessing the user's location on each repeated use of a service. (See also, [asynchronous notice](Asynchronous-notice).)

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How can a service effectively provide notice to a user that location tracking is continuing, or happening again, without being as obtrusive as a repeated modal dialog? A user may not realize that an application given permission to access location is doing so continuously or repeatedly, or may not remember that explicit permissions given in the past allow a service to access data again later. In some cases, past explicit permission may not have been provided by the current user of the device (but instead by a spouse, parent or even an ex-spouse or stalker who temporarily had control of the device or the account). If notice is provided only at the time of consent, a user may inadvertently distribute personal information over a long period of time after having lost control of their device only momentarily.

<!--forces/concerns-->
A tray full of ambient notices may annoy or confuse users and inure them to ongoing practices. Take measures to avoid unnecessary notice. This must be balanced against the
concerns of an attacker's opting the user in without their knowledge.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide an _ambient_ notice &mdash; unobtrusive, non-modal, but available at a glance or from a simple action &mdash; when location data is being accessed. The notice should provide opportunities for interaction: to learn more about the use of data or to revoke permissions.

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

* _Location services icons: Mac OS X, Google Chrome, et al._

![Lion Location Icon](/media/images/lion_location_icon.png)

Mac OS X Lion adds an ambient location services icon (a compass arrow) which appears in the task bar momentarily when an application is accessing the device's location.

![Chrome Location Icon](/media/images/chrome_location_icon.png)

Chrome adds a cross-hair icon to the location bar when a web site accesses the device location via the W3C Geolocation API. Clicking on the icon provides potential actions: clearing the saved consent for this site and accessing settings.

_Similar examples exist in at least Android, iOS and Win7._

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