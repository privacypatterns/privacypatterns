[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->



## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Many sensor related or other recurring forms of data collection are important for improving service (or product) quality, but occur in a manner which is not apparent to the user. Even where the user is informed of such processing, the nature of that processing may cause it to occur within contexts the user would not consent to. Users are also subject to forgetfulness. The controller processing this information therefore seeks to ensure that consent is retained. Some interfaces necessitate more restrictive use of screen real estate, however, and as such can not accommodate extensive information or persistent elements.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users being tracked and monitored may not consent to processing they had previously consented to, as the context surrounding that processing is subject to change.

_Also, initial consent may have been forged by an attacker or have been provided by another user of a shared device -- if synchronous notice is only provided at the time of consent, a user may inadvertently distribute personal information over a long period of time after having lost control of their device only momentarily._

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users may change their minds or forget about consent they have given
- Users may not realize the processing they consented to is currently in effect, potentially allowing collection of information they would not want collected
- Controllers do not want to collect data for which consent is uncertain, where users may feel violated or otherwise let down
- Controllers cannot remind users of their consent all the time

<!--concerns-->
_Providing an asynchronous notice requires a reliable mechanism to contact the user (a verified email address or telephone number, for example). Care should be taken to ensure that the mechanism can actually reach the person using the device being tracked. (For example, notifying the owner of the billing credit card may not help the spouse whose location is being surreptitiously tracked.)_

_In contrast to the common privacy practice of providing consistent and reliable systems, you may wish to provide **random** asynchronous notice. If there is a concern that a malicious user may have opted-in the user without their knowledge, a notice that is sent once a week at the same time each week may allow the attacker to borrow the device at the appointed time and clear the notice._

_Many repeated notices may annoy users and eventually inure them to the practice altogether. Take measures to avoid unnecessary notices and some level of configuration for frequency of notices. This must be balanced against the concerns of an attacker's opting the user in without their knowledge._

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Whenever there is a context switch, sufficient duration, or random spot check, provide users with a simple reminder that they have consented to specific processing. The triggers and means for contacting the user may be chosen by the user themselves, who should be able to review and if necessary retract their consent.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Implementation depends on the medium chosen for conveying the notification, and also on the service facilitating collection. For mediums with less space, shorter messages should be provided, but even in more traditionally long-winded options such as email, brevity should be favored. The user should be able to obtain more information by a linking mechanism, also dependent on the medium. The most important information to provide is the fact that they have consented to specific data for specified purposes, and that a context change, spot check, or specified duration has triggered the reminder. Context changes are most notable, as these are most likely to affect the consent. Note that changes to purposes and means instead require new consent, not merely notification.

_Asynchronous notices may also include a summary of the data recently collected (since the last notice, say) in order to provide clarity (and reminders) to the user about the extent of collection. By ensuring that users aren't surprised, asynchronous notice may increase trust in the service and comfort with continued disclosure of information._

<!--## Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

1. _**Google Latitude reminder email**_

   _Google Latitude users can configure a reminder email (see below) when their location is being shared with any application, including internal applications like the Location History service._

   <hr>This is a reminder that you are sharing your Latitude location with the following application(s):

   **Google Location History**
   You may disable these applications at any time by going to <https://www.google.com/latitude/apps?hl=en]>

   **Do more with Latitude**
   Go to <https://www.google.com/latitude/apps> on your computer and try the following:

   Google Location History lets you store your history and see a dashboard of interesting information such as frequently visited places and recent trips.
   Google Talk Location Status lets you post your location in your chat status.
   Google Public Location Badge lets you publish your location on your blog or site.

   You are receiving this reminder once a week. To change your reminder settings, go to: <https://www.google.com/latitude/apps?hl=en&tab=privacyreminders><hr>

2. _**Fire Eagle My Alerts**_

   ![Fire Eagle My Alerts configuration by npdoty, on Flickr](http://farm6.static.flickr.com/5001/5642647032_e74e815f6a.jpg)
   [Fire Eagle My Alerts configuration by npdoty, on Flickr](http://www.flickr.com/photos/npdoty/5642647032])

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _refines_ [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact). As it provides notice of noteworthy processing when in context, a user is prevented from mistakenly producing data. As the notification is obtrusive, they are given every chance to cease doing so before it has an impact. As an implicit relationship through [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact), this pattern also _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback).

This pattern is an _alternative_ to [Ambient Notice](Ambient-notice). While this pattern provides contextually justified notice whenever necessary, the Ambient variant does so persistently and without contextual justification. Unlike this pattern, [Ambient Notice](Ambient-notice) is unobtrusive.

This pattern _complements_ [Single Point of Contact](Single-Point-of-Contact). A SPoC is an authority which validates requests and ensures secure and private communication, a usage of data which can be contextually displayed to remind the user of its (de)activation.

### [Sources]
<!-- References to the original source of the pattern.-->

N. Doty, M. Gupta, and J. Zych, “privacypatterns.org - Privacy Patterns,” privacypatterns.org, 2017. [Online]. Available: http://privacypatterns.org/. [Accessed: 26-Feb-2015].

C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

E. S. Chung, J. I. Hong, J. Lin, M. K. Prabaker, J. a. Landay, and A. L. Liu, “Development and Evaluation of Emerging Design Patterns for Ubiquitous Computing,” DIS ’04 Proceedings of the 5th conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 233–242, 2004.

J. Siljee, “Privacy transparency patterns,” in EuroPLoP ’15, 2015, pp. 1–11.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->