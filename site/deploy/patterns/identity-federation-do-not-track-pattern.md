[TOC]


## Summary

All information has been extracted from
http://blog.beejones.net/the-identity-federation-do-not-track-pattern

The Do Not Track Pattern makes sure that neither the Identity Provider
nor the Identity Broker can learn the relationship between the user
and the Service Providers the user us.
## Problem

When an identity system provides identifying information about a user
and passes this to a third party service, different parties can do
correlation and derive additional information.
## Context

This pattern is focused on identity federation models
## Goals

Avoid the correlation of end user and service provider data
## Solution

Include an orchestrator component, that must act in behalf and be
controlled by the user. The orchestrator makes sure that the identity
broker can’t correlate the original request from the service provider
with the assertions that are returned from the identity provider. The
correlation can only be done within the orchestrator but that’s no
issue because this acts on behalf of the user, possibly on the device
of the user.
## Constraints And Consequences

In practice, the orchestrator could run in the browser of the user as
a javascript program or as an App on his device
## Known Uses

Identity federations and ecosystems