[TOC]


## Summary

Subjects keep control on their personal data that are stored on a
personal device.
## Problem

Data subjects actually lose control over their data when they are
stored on a server operated by a third party.
## Context

The pattern is applicable to any data produced by the data subject (or
originally under his control) as opposed to data about him produced by
third parties.
## Goals

Enhance the control of the subjects on their personal data.
## Motivating Example

Patients want to keep control over their health data but also to grant
specific access to some health professionals.
## Solution

A solution consists in combining a central server and secure personal
tokens. Personal tokens, which can take the form of USB keys, embed a
database system, a local web server and a certificate for their
authentication by the central server. Data subjects can decide on the
status of their data and, depending on their level of sensitivity,
choose to record them exclusively on their personal token or to have
them replicated on the central server. Replication on the central
server is useful to enhance sustainability and to allow designated
third parties (e.g. health professionals) to get access to the data.
## Constraints And Consequences

Data subjects need to be equipped with a personal data store.
## Known Uses

It has even been deployed for certain types of services, in
particular, in the health sector.