[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->

Controllers which maintain software systems that process user data, especially identifying or sensitive data, are subject to various laws. In the case of personal data, transparency about processing is particularly important. Users (the data subjects) also care to know about what data is used, and what might be done with that data, at various degrees. Users do not often want to be constantly notified or reminded, as many of them would rather spend their time actually using the system. Some users, however, care about more intricate detail, and are entitled to it. Nonetheless, if verbose information is provided, it should be sensible.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

The controller wants to be upfront about what they know and can do with personal data which might be of importance to those users. They only want users to know about data and risks pertaining to them specifically.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- The controller wants to show the actual data they process, as well as what they do with it, as opposed to just describing policy
- Users want full transparency, with detailed explanation as well as easily and quickly understood overviews
- Controllers do not want this transparency to ruin trust, but to strengthen it
- The controller wants to keep the data on their servers, while still allowing users to automatically view their own data

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Keep track of the processing that occurs on personal data so that users can view the activities associated with their data and review their preferences in a tabular environment.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->
_Which information_
_A table that shows the overview. The overview could show:_
− _Which data_
− _Why collected_
− _How used/for which purpose collected_
− _Who has access to the data_
− _Who the user authorized for access_
− _Which consent the user has given for specific data_
− _To which parties the data is disclosed_
− _Who has seen the data_
− _Whether the data can be hidden _
− _Whether the data can be removed_
− _How long the data is stored_
− _How datasets are combined to create richer (privacy sensitive) information. Note that this may violate local laws and regulations_
− _With which other information the data is combined_

_Where in the application flow Options are (not mutually exclusive):_
− _At the service’s help section_
− _At the service’s privacy section_
− _Through a separate menu item_
− _At a myData section of the service_

_Amount of information_
_A table can show a lot of information or can be adjustable by the user to tweak which information to show, and which values (e.g. which range). From the table links to applicable other pages/screens can be given, to allow a user to easily change privacy settings (or possibly delete data) or visit websites of data buyers. A way to present more detail than visible at the overview table is to apply the Overview beside detail user interface pattern (Laakso 2003)._

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Provide users with access to an interface which displays their data in useful dataset views, and give them the option for raw information. See the following table for an example.

|Type of Data|Data|Date Recorded|Accessed by|
|--|--|--|--|
|data type a|data itself|date a|person one|
|data type b|data itself|date b|person one, person two|

_To be really transparent, also show things like how and why data was used, who of your organization has access to the user’s personal data, what was downloaded or sent to a specific third party, and when all these events happened. The table can present all the data at once, or order it in categories, that may be further detailed when the user selects a category._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

_Benefits:_
− _Actual data: Users can see the actual personal information you have, real-time*._
− _Details: A table can show all the personal information at once, in a structured way._
− _Details: Users may see errors in their data and ask for rectification, thereby improving the data quality._
− _Security and Availability: Data can remain stored in a secure place and still be available to your users whenever they want to see it._
− _Usability: Users get a better understanding of the personal data your systems holds and how you handle their data. Users may even decide to better control access to their data (not part of this pattern), increasing their own privacy and limiting the risks of privacy incidents, caused by e.g. an external attack on the system._
− _Trust: Providing transparency in a user-friendly manner increases the trust that users have of you as an organization. − Automation: A table is relatively easy to implement and automatically generate, compared to for example graphic data visualisations._

Liabilities:
− _Actual data: Everything that happens to all user data must be logged. This may impose a privacy problem of its own._
− _Details: Users may be overwhelmed by the amount of data you have and decide to stop using your system_
− _Security and Availability: Some users may want to have the data on their own systems, for example to run their own analyses. This pattern does not make that possible, but the functionality could be easily provided._
− _Trust: Users may decide to delete some of their data or otherwise restrict access to their data in a way that decreases the amount of data available for your systems. Or users may even decide that the privacy infringement is too large and stop using your system all together._

*_Providing real-time insight in all personal data that a system contains is not common practice; currently people usually have to put in a formal request (e.g. by email) and wait for a couple of weeks until they receive a reply with zip-file attached._
<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->



### [Known Uses]
<!-- Pointers to various applications of the pattern.-->

_Figure 1 shows the actual design of the personal data table pattern implementation for a Quantified Self data store, the Nutritional Research Cohort (NRC). The NRC is a cohort of researchers in nutrition and health sciences who gather self-assessment data on their lifestyle and their health. NRC gives access to information on personal health trajectory, and the effects of diet on personal health. For each column, a mouse overlay details the meaning of the column name. This solution implements an overview of which data is collected, whether data is private or shared with others, for which purpose the data is used, which external parties requested the data, and who downloaded the data and when. This overview is shown on a special page in a myData section of the NRC application._

## See Also
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ [Minimal Information Asymmetry](Minimal-Information-Asymmetry). Like this pattern, it allows a user to see what personal data is acquired by the controller. It provides a better understanding of what data is processed and the policies surrounding that processing, including potential risks. Together these patterns show a clearer representation for the user to consider.

This pattern may be _used by_ [Privacy Mirrors](Privacy-Mirrors). It keeps track of what is known, and allows for various configurations within this. It also stems from a multidisciplinary context. As such there exists a an extension of functionality in this. However, as the described problems are different, there is not an _extends_ relationship.

_Patterns that also show personal data within a user application are the Personal Data Infographic (showing data as infographic, not a table) and Viewable Personal Data Overlay (showing in an overlay which data is viewable by others)[.] Furthermore, the Digital File with Personal Data pattern allows a user to receive the personal data collected for a certain service in a digital file._


### [Sources]
<!-- References to the original source of the pattern.-->

J. Siljee, “Privacy transparency patterns,” in EuroPLoP ’15, 2015, pp. 1–11.
W. Kraaij, B. Hulsebosch, J. Siljee, M. Kooij, R. Kosman, and J. Janssen, “Privacy Tansparency,” SWELL, 2014. [Online]. Available: http://www.swell-project.net/dynamics/modules/SFIL0100/D4.9%20Privacy%20Transparency893d.pdf. [Accessed: 10-Oct-2017].

<!-- ## General Comments -->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->