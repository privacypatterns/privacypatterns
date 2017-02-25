[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

A messaging service is enhanced by using a trusted third party to
exchange the identifiers of the communication partners by pseudonyms.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern can be used for online communications by email, through
message boards, and newsgroups.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Messaging includes all forms of communication through emails,
articles, message boards, newsgroups etc. This information could be
stored and used to build sophisticated user profiles. Sometimes it can
also be used to prosecute people.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

A message is send by a user to the server, which exchanges the
sender's address with a pseudonym. Replied messages are sent back to
the pseudonymous address, which will then be swapped back to the
original.

<!--goals-->
The goal of this pattern is to prevent unforeseen ramifications of the
use of online messaging services.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
Users can communicate more freely. Pseudonym servers can be misused to
send offensive messages, for spam mails or by criminals for illegal
activities. Under those circumstances it could be necessary to revoke
the pseudonymity of the corresponding parties.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice is a political activist and tries to organize a political
demonstration. Since her government does not like free speech, her
communication channels are intensely monitored and one day, she simply
disappears into a labor camp and is never seen again.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

nym.alias.net a pseudonymous email system with the goal to provide
secure concealment of the user's identity. A Type I Anonymous Remailer
forwards emails by modifying the message header and removing
sender-related information.

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