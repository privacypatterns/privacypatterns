[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

This pattern assures that a certain minimum data breach notification delay is not exceeded.

##Context
<!-- The situations in which the pattern may apply.-->

This pattern is applicable in any environment where PII is stored and that allows monitoring of specific events.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

In case a data breach has occurred, i.e. Personally Identifiable Information (PII) has leaked, the data owner must be notified. The notification process in turn may not work correctly, so it has to be monitored.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

A monitoring system logs access to clients' PII along with a time-stamp. A notification process continuously verifies that only authorized access is listed in this log file, and in case of unauthorized access notifies the data owner and logs the notification action in the log file, again accompanied by a time-stamp. A notification monitoring process finally continuously checks that t_n - t_l <= max_np (t_n denoting the time of notification, t_l the time of data leakage, max_np the maximally allowed period of notification). In case t_n - t_l > max_np it alerts the PII Incident Manager.

A formal model can be found [here](http://sit.sit.fraunhofer.de/smv/pattern-models/Data-Breach-Notification-pattern-model.pdf).

<!--goals-->
The pattern goal is to constantly ensure a minimum delay of notification, should a data breach have occurred, and in case a notification exceeds the allowed delay, to indicate this by appropriate means.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--constraints and consequences-->
In order to use the pattern, the personal data processor must have in place an access control mechanism and a monitoring mechanism that allows to monitor every PII access. The pattern cannot ensure that a PII Incident Manager will take adequate actions, hence this process has to be established and controlled by other means.

<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

Assume a company Comp stores all employees' data with a storage service Store. There is a contractual agreement between Comp and Store that each data leakage is reported within one hour. Now Bob, an employee of Store and not authorized to read Comp's data, succeeds in circumventing Store's access control mechanisms and reads Store's data. This represents a data breach of which Comp has to be notified within an hour.

###[Known Uses]
<!-- Pointers to various applications of the pattern.-->

This pattern is based on the privacy principle "Accountability" specified in ISO/IEC 29100 that is also used in Annex A of ISO/IEC 27018. More specifically, it addresses A.9.1 Notification of a data breach involving Personally Identifiable Information (PII). Uses of the pattern as a concrete instantiation of A.9.1 are not known.

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