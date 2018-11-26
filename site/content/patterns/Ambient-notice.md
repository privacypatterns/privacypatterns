[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Instant User Interface for Information (about PII) / Talking Collector / On the Spot Information

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Modern sensor systems process massive quantities of data, performing complex and silent operations which users typically overlook. The tracking of user information is used to improve the quality of these services (or products), and typically users wish to benefit from this. This is particularly evident in consumption, location, and physical activity tracking. While these users do not want to be exposed to extensive and otherwise intimidating details, this processing must be done under the user's informed and explicit consent. Once the consent for it has been obtained,  processing may occur regularly or in real-time. While users are to be informed of this, in-progress readings still happen in a manner which is streamlined and not inherently noticeable. Users are also capable of forgetting some time after consent was given.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users are frequently unaware of the sensors currently tracking them. It is important that they understand that their personal data is being further collected in order for their informed consent to remain valid. This should be unobtrusive, however, so as to avoid notification fatigue or desensitization.

_A user may not realize that an application given permission to access [sensor data] is doing so continuously or repeatedly, or may not remember that explicit permissions given in the past allow a service to access data again later. In some cases, past explicit permission may not have been provided by the current user of the device (but instead by a spouse, parent or even an ex-spouse or stalker who temporarily had control of the device or the account). If notice is provided only at the time of consent, a user may inadvertently distribute personal information over a long period of time after having lost control of their device only momentarily._

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users are capable of forgetting or reconsidering their consent, affecting the legitimacy of any processing under it
- Users may overlook processing which is not made apparent to them, allowing sensors to record data they would not otherwise
- Controllers aim to ensure that consent is retained, they want to avoid collecting data against the user's wishes
- Controllers want to prevent users from inadvertently sharing personal data which they regret being processed

_A tray full of ambient notices may annoy or confuse users and inure them to ongoing practices. Take measures to avoid unnecessary notice. This must be balanced against the
concerns of an attacker's opting the user in without their knowledge._

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Provide an unobtrusive but clearly visible notification while sensors are in use, without interrupting the flow of user activity. This notification should be interactive in order to prevent, delay, or further explain the data collection.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_The best place to provide transparency is the place where data is collected. The sensor is the first component noticed of a complex system, because the user is directly confronted with the sensor during collection. Hence, provided information in this place is easier to access by the user. Because of that, sensors should be equipped with a user interface for instant check of the collected data. Such an interface can consist of a simple display or message box. In more complex environments, optical codes and links can refer the user to more elaborated information sources._

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

* _**Location services icons: Mac OS X, Google Chrome, et al.**_

![Lion Location Icon](/media/images/lion_location_icon.png)

_Mac OS X Lion adds an ambient location services icon (a compass arrow) which appears in the task bar momentarily when an application is accessing the device's location._

![Chrome Location Icon](/media/images/chrome_location_icon.png)

_Chrome adds a cross-hair icon to the location bar when a web site accesses the device location via the W3C Geolocation API. Clicking on the icon provides potential actions: clearing the saved consent for this site and accessing settings._

_Similar examples exist in at least Android, iOS and Windows._

### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_QR-code based information access, smart meter display_

<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is an _alternative_ to [Asynchronous Notice](Asynchronous-notice). While this pattern aims at non-intrusive and ongoing notification, the Asynchronous variant focuses on obtrusive and unavoidable notifications. As such it must be used more sparingly.

This pattern _complements_ [Informed Implicit Consent](Informed-Implicit-Consent) and [Single Point of Contact](Single-Point-of-Contact)(SPoC). Implicit consent is shown by the Ambient Notice, reminding the user of the system's assumption that their consent has not been retracted. A SPoC is an authority which validates requests and ensures secure and private communication, a usage of data which can be persistently displayed to remind the user of its (de)activation.

This pattern _refines_ [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact). As it provides ongoing notice of data collection, a user is prevented from mistakenly producing data, or better has a good chance to cease doing so before having an impact. As an implicit relationship through [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact), this pattern also _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback). However, in order to do so, the implementation must allow for a potentially indefinite delay, as the notification will not be modal.


### [Sources]
<!-- References to the original source of the pattern.-->

N. Doty, M. Gupta, and J. Zych, “privacypatterns.org - Privacy Patterns,” privacypatterns.org, 2017. [Online]. Available: http://privacypatterns.org/. [Accessed: 26-Feb-2015].

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

J. Siljee, “Privacy transparency patterns,” in EuroPLoP ’15, 2015, pp. 1–11.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->