[TOC]

## Summary
This pattern aggregates multiple entities into a set, such that they
cannot be distinguished anymore.

## Problem
In a system with different users we have the problem that we can often
distinguish between them. This enables location tracking, analyzing
the behaviour of the users or other privacy-infringing practices.

## Context
This pattern is applicable in a messaging scenario, where an attacker
can track routing information. Another possible scenario would be the
storage of personal information in a database.

## Goals
The goal of this pattern is to aggregate different entities into a
set, such that distinguishing between them becomes infeasible.

## Motivating Example
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

## Solution
There are multiple ways to apply this pattern. One possibility is, to
strip away any distinguishing features from the entities. If we do not
have enough entities, such that the anonymity set would be too small,
then we could even insert fake identities.

## Constraints and Consequences
One factor to keep in mind is that this pattern is useless if there
are not many entities, such that the set of probable suspects is too
small. What "too small" means depends on the exact scenario. Another
factor is a possible loss of functionality.

## Known Uses
Anonymity sets are in use in various routing obfuscation mechanisms
like Onion Routing. Hordes is a multicast based protocol, that makes
use of multicast routing like point-to-multipoint de- livery, so that
anonymity is provided. Mix Zone is a location-aware application that
anonymizes user identity by limiting the positions where users can be
located.