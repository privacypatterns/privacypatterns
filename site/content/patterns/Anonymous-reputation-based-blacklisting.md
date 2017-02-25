[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Get rid of troublemakers without even knowing who they are.

##Context
<!-- The situations in which the pattern may apply.-->

A service provider provides a service to users who access anonymously, and who may make bad use of the service.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Anonymity is a desirable property from the perspective of privacy. However, anonymity may foster misbehaviour, as users lack any fear of retribution.

A service provider can assign a reputation score to its users, based on their interactions with the service. Those who misbehave earn a bad reputation, and they are eventually added to a black list and banned from using the service anymore. However, these scoring systems traditionally require the user identity to be disclosed and linked to their reputation score, hence they conflict with anonymity. This has made, for instance, Wikipedia administrators to take the decision to ban edition requests coming from the TOR network, , as they cannot properly identify users who misbehave.

A Trusted Third Party (TTP) might be introduced in between the user and the service provider. The TTP can receive reputation scores from the service provider so as to enforce reputation-based access policies, while keeping the identity hidden from the service provider. However, this would require the user to trust the TTP not to be a whistle-blower indeed.

How can we make users accountable for their actions while keeping them anonymous?

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

First, the service provider provides their users with credentials for anonymous authentication.

Then, every time an authenticated user holds a session at the service, the service provider assigns and records a reputation value for that session, depending on the user behaviour during the session. Note that these reputation values can only be linked to a specific session, but not to a specific user (as they have authenticated anonymously).

When the user comes back and starts a new session at the service, the service provider challenges the user to prove in zero-knowledge that he is not linked to any of the offending sessions (those that have a negative reputation associated). Zero-knowledge proofs allow the user to prove this, without revealing their identity to the service provider. Different, alternative proofs have been proposed, e.g. prove that the user is not linked to any of the sessions in a set of session IDs, prove that the last K sessions of the user have good reputation, etc.

In practice, more complex blacklisting rules can be applied as well. For instance, several reputation scores can be assigned to the same session, each regarding different facets of the user behaviour. Then, the blacklisting thresholds may take the form of a Boolean combination or a lineal combination over individual session and facet reputation values.

<!--goals-->
A service provider wants to prevent users who misbehave from accessing the service anymore, without gaining access to their identity.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Different implementations may only be practical for services with a reduce number of users, require intense computations, limit the scope of the reputation to a constrained time frame, be vulnerable to Sybil attacks, etc. Nonetheless, protocols are being improved to overcome these and other issues. See the cited sources below for the specific discussion.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

A wiki allows any visitor to modify its contents, even without having been authenticated. Some malicious visitors may vandalize the contents. This fact is signalled by the wiki administrators. If a visitor coming from the same IP address keeps vandalizing the site, they will earn a bad reputation, and their IP will be banned from modifying the contents anymore. However, users accessing through a Tor anonymity network proxy cannot be identified from their IPs, and thus their reputation cannot be tracked.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

- Au, M. H., Kapadia, A., & Susilo, W. (2012). BLACR: TTP-free blacklistable anonymous credentials with reputation.
- Au, M. H., & Kapadia, A. (2012, October). PERM: Practical reputation-based blacklisting without TTPs. In Proceedings of the 2012 ACM conference on Computer and communications security (pp. 929-940). ACM.

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