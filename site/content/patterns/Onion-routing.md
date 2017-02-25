[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

This pattern provides unlinkability between senders and receivers by
encapsulating the data in different layers of encryption, limiting the
knowledge of each node along the delivery path.

##Context
<!-- The situations in which the pattern may apply.-->

A system in which data is routed between different nodes.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

When delivering data, the receiver has to be known. If the system
provides the functionality that the receiver of data should be able to
answer, than the receiver should also know the address of the sender.
When forwarding information over multiple stations then, in a naive
implementation, each station on the delivery path knows the sender and
the final destination.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

The solution is to encrypt the data in layers such that every station
on the way can remove one layer of encryption and thus get to know the
immediate next station. This way, every party on the path from the
sender to the receiver only gets to know the immediate successor and
predecessor on the delivery path.

<!--goals-->
The goal of this pattern is to achieve unlinkability between senders
and receivers.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
If there are too few hops, the anonymity set is not big enough and the
unlinkability between sender and receiver is at risk. The same problem
occurs when there is too few communication going on in the network.
The multiple layers of encryption will bloat up the data and consume
bandwidth. If all nodes on the delivery path collaborate in deducing
the sender and the receiver, the pattern becomes useless.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Alice is a whistle-blower and tries to forward data to Bob who works at
the press. She sends the corresponding documents as an
e-mail-attachment. Eve monitors the traffic and can see who sent this
mail to whom. The next day, police raids Alice's apartment and sends
her to jail. Bobs mail account gets seized.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

The TOR-browser, a web-browser specifically designed to ensure
anonymity makes heavy use of onion routing.

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