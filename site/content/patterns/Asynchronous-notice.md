[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

How can a service effectively provide notice to a user who gave permission once but whose information is accessed repeatedly (perhaps even continuously) over a long period of time? Proactively notify the user after the time of consent that information is being tracked, stored or re-distributed.

<!--intent-->
Support notice of ongoing location tracking.

Supports [Notice](Notice), [User Control][2], [Transparency and feedback](Transparency-feedback)

##Context
<!-- The situations in which the pattern may apply.-->

Tracking a person's location over time in an invisible fashion, with or
without prior explicit consent. (Particularly useful for background tracking,
tracking through devices with limited or no screen space, or tracking
repeatedly over long periods of time. For devices with sufficient screen space or other notification affordances, see also [ambient notice](Ambient-notice).)

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How can a service effectively provide notice to a user who gave permission
once but whose information is accessed repeatedly (perhaps even continuously)
over a long period of time? If a user forgets that they gave access (or who
has access) they may later be surprised or upset by the continued flow of
personal information. Also, initial consent may have been forged by an
attacker or have been provided by another user of a shared device -- if
synchronous notice is only provided at the time of consent, a user may
inadvertently distribute personal information over a long period of time after
having lost control of their device only momentarily.

<!--forces/concerns-->
Providing an asynchronous notice requires a reliable mechanism to contact the
user (a verified email address or telephone number, for example). Care should
be taken to ensure that the mechanism can actually reach the person using the
device being tracked. (For example, notifying the owner of the billing credit
card may not help the spouse whose location is being surreptitiously tracked.)

In contrast to the common privacy practice of providing consistent and
reliable systems, you may wish to provide _random_ asynchronous notice. If
there is a concern that a malicious user may have opted-in the user without
their knowledge, a notice that is sent once a week at the same time each week
may allow the attacker to borrow the device at the appointed time and clear
the notice.

Many repeated notices may annoy users and eventually inure them to the
practice altogether. Take measures to avoid unnecessary notices and some level
of configuration for frequency of notices. This must be balanced against the
concerns of an attacker's opting the user in without their knowledge.

[1]: Access
[2]: User-control

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Proactively notify the user after the time of consent that information is
being tracked, stored or re-distributed. This asynchronous notice could be
achieved through an email, text message, on-screen notice or even through non-
digital means (by telephone or postal mail, say). The message should inform
the user about the ongoing practice, including background context (since the
user may well have forgotten) about the service and any opportunities for
[access][1] and [control][2].

Asynchronous notices may also include a summary of the data recently collected
(since the last notice, say) in order to provide clarity (and reminders) to
the user about the extent of collection. See also, [Privacy dashboard]
(Privacy-dashboard) and [Access][1].

By ensuring that users aren't surprised, asynchronous notice may increase
trust in the service and comfort with continued disclosure of information.

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

1. _Google Latitude reminder email_

 Google Latitude users can configure a reminder email (see below) when their
 location is being shared with any application, including internal applications
 like the Location History service.

 * * *

     This is a reminder that you are sharing your Latitude location with the following application(s): 

    

     Google Location History 
     You may disable these applications at any time by going to <https://www.google.com/latitude/apps?hl=en]>

     **Do more with Latitude**
     Go to <https://www.google.com/latitude/apps> on your computer and try the following: 

    

     Google Location History lets you store your history and see a dashboard of interesting information such as frequently visited places and recent trips. 
     Google Talk Location Status lets you post your location in your chat status. 
     Google Public Location Badge lets you publish your location on your blog or site. 

     You are receiving this reminder once a week. To change your reminder settings, go to: 
     <https://www.google.com/latitude/apps?hl=en&tab=privacyreminders>

 * * *

2. _Fire Eagle My Alerts_

 ![Fire Eagle My Alerts configuration by npdoty, on Flickr](http://farm6.static.flickr.com/5001/5642647032_e74e815f6a.jpg)  
 [Fire Eagle My Alerts configuration by npdoty, on Flickr](http://www.flickr.com/photos/npdoty/5642647032])

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