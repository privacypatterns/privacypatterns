[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Give one careful thought to your privacy needs, then be always able to swiftly apply what you decided.

##Context
<!-- The situations in which the pattern may apply.-->

A user wants to start using a new service, which lets the user configure several privacy-related parameters. The user often does the same with new, different service providers.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users may get overwhelmed by the burden of deciding on privacy aspects each and every time they enrol in a new service. This may make them err on their decisions regarding privacy.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Before contracting a service, the service provider retrieves the user preferences (exposed by their user agent, or at a well-known URI), and presents the user a comparison between their preferences and the privacy policies applied by default by the service operator, which in turn automatically adapts any configurable values to the user’s declared preferences.

<!--goals-->
Allow users to provide a consistent privacy-related behaviour, while reducing their cognitive workload every time they enrol in a new service.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
This pattern requires sharing a machine-readable format to express and exchange definitions of privacy policies between the user agent and the service providers. Several such formats exist, yet they are not always supported by either user agents or by service providers. Besides, not all the privacy policy nuances can be expressed in existing privacy policy languages.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--##Examples-->
<!--Motivational example to see how the pattern is applied.-->



###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

- For an academic discussion, see Graf, C., Wolkerstorfer, P., Geven, A., & Tscheligi, M. (2010, November). A pattern collection for privacy enhancing technology. In PATTERNS 2010, The Second International Conferences on Pervasive Patterns and Applications (pp. 72-77).
- For a discussion of privacy languages see Kumaraguru, P., Cranor, L., Lobo, J., & Calo, S. (2007, July). A survey of privacy policy languages In SOUPS'07: Proceedings of the 3rd Symposium on Usable Privacy and Security. and Becker, M. Y., Malkis, A., & Bussard, L. (2010).
- A related, classic initiative was W3C's The Platform for Privacy Preferences 1.1 (P3P1.1) Specification, however, the matching was performed at the client's side.
- A more recent example is available at S4P: A generic language for specifying privacy preferences and policies. Microsoft Research.
- ... and Sacco, O., & Passant, A. (2011, March). A Privacy Preference Ontology (PPO) for Linked Data. In LDOW.

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