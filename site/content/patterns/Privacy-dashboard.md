[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

An informational privacy dashboard can provide collected summaries of the collected or processed personal data for a particular user.

<!--intent-->
Help users see an overview of the personal information collected about them, particularly when the data or services in question are numerous.

Supports [Access](Access), [Transparency and feedback](Transparency-and-feedback).

##Context
<!-- The situations in which the pattern may apply.-->

When your service collects, aggregates or processes personal information from users, particularly information that changes over time, is collected or aggregated in ways that might be unexpected, invisible or easily forgotten, or where users have options for access, correction and deletion.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How can a service succinctly and effectively communicate the kind and extent of potentially disparate data that has been collected or aggregated by a service? Users may not remember or realize what data a particular service or company has collected, and thus can't be confident that a service isn't collecting too much data. Users who aren't regularly and consistently made aware of what data a service has collected may be surprised or upset when they hear about the service's data collection practices in some other context. Without visibility into the actual data collected, users may not fully understand the abstract description of what types of data are collected; simultaneously, users may easily be overwhelmed by access to raw data without a good understanding of what that data means.

<!--forces/concerns-->
As in other access mechanisms, showing a user's data back to them can create new privacy problems. Implementers should be careful not to provide access to sensitive data on the dashboard to people other than the subject. For example, showing the search history associated with a particular cookie to any user browsing with that cookie can reveal the browsing history of one family member to another that uses the same computer. Also, associating all usage information with a particular account or identity (in order to show a complete dashboard) may encourage designers to associate data that would otherwise not be attached to the user account at all. Designers should balance the access value against the potential advantages of [Deidentification](Deidentification).

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

An informational privacy dashboard can provide collected summaries of the collected or processed personal data for a particular user. While access to raw data may be useful for some purposes, a dashboard provides a summary or highlight of important personal data. Seek to make the data meaningful to the user with examples, visualizations and statistics.

Where users have choices for deletion or correction of stored data, a dashboard view of collected data is an appropriate place for these controls (which users may be inspired to use on realizing the extent of their collected data).

In short, a dashboard answers the common user question "what do you know about me?" and does so in a way that the user can understand and take appropriate action if necessary.

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

* _Google Privacy Dashboard_

![Google Dashboard Latitude](/media/images/Google_Dashboard_Latitude.png)

The [Google Dashboard](https://google.com/dashboard) shows a summary of the content stored and/or shared by many (but not all) of Google's services (Latitude, Google's location sharing service, is shown above). For each service, a summary (with counts) of each type of data is listed, and in some cases an example of the most recent such item is described. An icon signifies which pieces of data are public. Links are also provided in two categories: to actions that can be taken to change or delete data, and to privacy policy / help pages.

[Google Accounts: About the Dashboard](http://www.google.com/support/accounts/bin/answer.py?answer#162744)

<!--###[Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



##See Also
<!-- Any pointers to relevant information, not contained in the subfields below.-->

Dashboards are a widely-used pattern in other data-intensive activities for providing a summary of key or actionable metrics. See: _external references needed here_

<!--###[Related Patterns]-->
<!-- Supporting and conflicting patterns-->



<!--###[Sources]-->
<!-- References to the original source of the pattern.-->



<!--##General Comments-->
<!-- Separate discussion on the pattern.-->



<!--##Tags-->
<!-- User definable descriptors for additional correlation.-->