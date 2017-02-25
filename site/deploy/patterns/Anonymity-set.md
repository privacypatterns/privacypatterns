[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

This pattern aggregates multiple entities into a set, such that they
cannot be distinguished anymore.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is applicable in a messaging scenario, where an attacker
can track routing information. Another possible scenario would be the
storage of personal information in a database.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

In a system with different users we have the problem that we can often
distinguish between them. This enables location tracking, analyzing
the behaviour of the users or other privacy-infringing practices.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

There are multiple ways to apply this pattern. One possibility is, to
strip away any distinguishing features from the entities. If we do not
have enough entities, such that the anonymity set would be too small,
then we could even insert fake identities.

<!--goals-->
The goal of this pattern is to aggregate different entities into a
set, such that distinguishing between them becomes infeasible.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
One factor to keep in mind is that this pattern is useless if there
are not many entities, such that the set of probable suspects is too
small. What "too small" means depends on the exact scenario. Another
factor is a possible loss of functionality.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Assuming that there are two companies, one is a treatment clinic for
cancer and the other one a laboratory for research. The Clinic
releases its Protected Health Information (PHI) about cancer victims
to the laboratory. The PHI's consists of the patients' name, birth
date, sex, zip code and diagnostics record. The clinic releases the
datasets without the name of the patients, to protect their privacy. A
malicious worker at the laboratory for research wants to make use of
these informations and recovers the names of the patients. The worker
goes to the city council of a certain area to get a voter list from
them. The two lists are matched for age, sex and location. The worker
finds the name and address information from the voter registration
data and the health information from the patient health data.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

Anonymity sets are in use in various routing obfuscation mechanisms
like Onion Routing. Hordes is a multicast based protocol, that makes
use of multicast routing like point-to-multipoint de- livery, so that
anonymity is provided. Mix Zone is a location-aware application that
anonymizes user identity by limiting the positions where users can be
located.

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