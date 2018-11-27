[TOC]

<!--### [Also Known As]-->
<!-- All other names the pattern is known by.-->


## Context
<!-- The situations in which the pattern may apply.-->

Users are frequently in a rush to use services at the same pace as their own ever quickening lifestyles. Such value for time can leave them unaware of the potential for mistakes, such as in automatic media sharing, or the careless disclosure of information in their contributions. These mistakes may disclose personally identifiable information, or otherwise undesirable associations. Sometimes whether the information is appropriate is dependent on the audience, or some other contextual element. Controllers who provide services to these users do not fare well when these instances occur, as they provide the means for it to happen. As such, they tend to want to be proactive in handling such issues.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

A lack of user awareness in the moment can lead to regretted disclosure, whether this disclosure is manually or automatically performed.

#### Forces/Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to use a service in an immediate and streamlined fashion, but in doing so expose themselves to mistakes.
- Many users disclose unintentional information during the use of a service, especially when participating without caution.
- Controllers do not want users to use a service in a way which fosters regret.
- Controllers want users to learn to use a service responsibly without having to make mistakes.

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Use contextual privacy warnings, through analytical measures and historical queues to provide relevant information and suggestions regarding pending disclosures.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

Prior to submissions taking place, and provided that the user has consented to contextual privacy warnings, analyze the content of the disclosure using natural language processing. This may also entail additional metadata, such as factors pertaining to the expected audience, social comparisons against similar users or ones which the user in question has connected with. All users from which the analysis is derived should also first have provided their explicit, informed, and freely-given consent.

Search for strings which are likely to heighten the sensitivity of the content, and evaluate this against the expected audience. Where users disregard warnings, take note for improvement of future predictions through a feedback loop. Additionally, allow users to signify that despite ignoring the warning, they later regretted the post (or detect deletions which imply this) to distinguish false positives from inaccurate warnings.

One way to increase user understanding of the risks involved is to demonstrate by example a disclosure which matches the approximated sensitivity or contextual appropriateness of their content. This example will need to be one which they could usually view on their own, so as not to inadvertently cross the boundary of another user's privacy. This approach is also susceptible to inaccuracies, and would also need to be improved overall by the userbase.

The learning algorithm may at first be trained using text mining from logs of users who have opted-in to the, at first, experimental feature. While assumptions may be made, possibly inaccurately, users could also give feedback about regretted submissions or contextual appropriateness. Which type of learning is chosen is dependent on what information the controller has at their disposal at the time. If starting fresh, the implementation will likely be less sophisticated. While if available, solutions can be as complex as a reinforced classification learning algorithm.

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

By applying this pattern, users who choose to partake will have a better realization of what might happen when they disclose certain content. This can apply to any information they put online, and may show who will be able to see what. This can be both beneficial and disadvantageous, as this means users will be more cautious and less likely to contribute. They may also have worries about the trustworthiness of the learning algorithm which may access their content before they themselves have seen it fit for publication.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



## Examples
<!--Motivational example to see how the pattern is applied.-->

_Systems can reduce user uncertainty about factors important to disclosure choices. For example, systems may be able to estimate the audience for a particular disclosure at decision-time,
thereby reducing uncertainty and influencing user choices. Systems could use social comparison, such as decisions made by friends or other users in similar context, to reduce uncertainty about relevant norms for disclosure. Finally, tools for viewing photo “disclosures” in ways similar to how others will view these photos could help users understand the content and appearance of their disclosures._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern is a component of the compound pattern, [Awareness Feed](Awareness-Feed). As such, this pattern _may be used_ by it.

This pattern _complements_ [Privacy Mirrors](Privacy-Mirrors), [Unusual Activities](Unusual-activities), [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact), and [Privacy Awareness Panel](Privacy-Awareness-Panel).

Through [Unusual Activities](Unusual-activities), this pattern can inform users from insights having an effect on authentication and authorization. Extending this is an implicit connection to [Informed Secure Passwords](Informed-Secure-Passwords), which benefits from having these complementary and impactive insights into authentication decisions. As an even further connection, this pattern also loosely benefits from [Informed Credential Selection](Informed-Credential-Selection) in much the same way.

On the other hand, [Preventing Mistakes or Reducing Their Impact](Preventing-Mistakes-or-Reducing-Their-Impact) serves as a complementary pattern through its intent to prevent automatic sensitive disclosure in addition to this pattern's reflective approach.

Within [Awareness Feed](Awareness-Feed), [Privacy Awareness Panel](Privacy-Awareness-Panel) may take analytical provisions from this pattern to supply feedback on potentially sensitive activity. These same provisional warnings allow for protection from the controller and reflection on sharing decisions in [Privacy Mirrors](Privacy-Mirrors). This similarity is short of a _similar_ relationship, however, especially as the problems addressed are quite distinct. This pattern is also _complemented_ by [Privacy Dashboard](Privacy-dashboard) in a similar fashion, along with other components of [Awareness Feed](Awareness-Feed).

As this pattern focuses on providing relevant information before disclosure as with [Awareness Feed](Awareness-Feed), visual cues and accessible policies implicitly help work towards this end. These include [Appropriate Privacy Icons](Appropriate-Privacy-Icons), [Icons for Privacy Policies](Icons-for-Privacy-Policies), [Privacy Color Coding](Privacy-color-coding), [Privacy Aware Wording](Privacy-Aware-Wording), [Layered Policy Design](Layered-policy-design), and [Privacy-Aware Network Client](Privacy-aware-network-client).

It also implicitly _complements_ [Appropriate Privacy Feedback](Appropriate-Privacy-Feedback), which focuses on informing users of what happens with their data. It does so through the same vein as [Privacy Awareness Panel](Privacy-Awareness-Panel), and also through [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation).

Finally, this pattern _may use_ [Increasing Awareness of Information Aggregation](Increasing-Awareness-of-Information-Aggregation). As this pattern is based on analytics about historical queues or measures for providing warnings, it benefits from informing the user about the pitfalls of data aggregation.

### [Sources]
<!-- References to the original source of the pattern.-->

Based on:
S. Ahern, D. Eckles, N. Good, S. King, M. Naaman, and R. Nair, “Over-Exposed ? Privacy Patterns and Considerations in Online and Mobile Photo Sharing,” CHI ’07, pp. 357–366, 2007.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->