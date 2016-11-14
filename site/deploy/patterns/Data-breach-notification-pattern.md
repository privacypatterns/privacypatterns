[TOC]


## Summary

This pattern assures that a certain minimum data breach notification delay is not exceeded.
## Problem

In case a data breach has occured, i.e. Personally Identifiable Information (PII) has leaked, the data owner must be notified. The notification process in turn may not work correctly, so it has to be monitored.
## Context

This pattern is applicable in any environment where PII is stored and that allows monitoring of specific events.
## Goals

The pattern goal is to constantly ensure a minimum delay of notification, should a data breach have occured, and in case a notification exceeds the allowed delay, to indicate this by appropriate means.
## Motivating Example

Assume a company Comp stores all employees' data with a storage service Store. There is a contractual agreement between Comp and Store that each data leakage is reported within one hour. Now Bob, an employee of Store and not authorized to read Comp's data, succeeds in circumventing Store's access control mechanisms and reads Store's data. This represents a data breach of which Comp has to be notified within an hour.
## Solution

A monitoring system logs access to clients' PII along with a timestamp. A notification process continuously verifies that only authorized access is listed in this log file, and in case of unauthorized access notifies the data owner and logs the notification action in the log file, again accompanied by a timestamp. A notification monitoring process finally continously checks that t_n - t_l <= max_np (t_n denoting the time of notification, t_l the time of data leakage, max_np the maximally allowed period of notification). In case t_n - t_l > max_np it alerts the PII Incident Manager.

A formal model can be found [here](http://sit.sit.fraunhofer.de/smv/pattern-models/Data-Breach-Notification-pattern-model.pdf).
## Constraints And Consequences

In order to use the pattern, the personal data processor must have in place an access control mechanism and a monitoring mechanism that allows to monitor every PII access. The pattern cannot ensure that a PII Incident Manager will take adequate actions, hence this process has to be established and controlled by other means.
## Known Uses

This pattern is based on the privacy principle "Accountability" specified in ISO/IEC 29100 that is also used in Annex A of ISO/IEC 27018. More specifically, it addresses A.9.1 Notification of a data breach involving Personally Identifiable Information (PII). Uses of the pattern as a concrete instantiation of A.9.1 are not known.