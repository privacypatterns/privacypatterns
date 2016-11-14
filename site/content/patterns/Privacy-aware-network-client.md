[TOC]

## Summary
A privacy policy which is hard to understand is in an automated way
converted into a more easy to read format.

## Problem
Many websites have privacy policies which are hard to understand for
the general audience.

Many people enter websites with different intentions like shopping,
research, etc. At the same time those responsible collect, use and
release information about a user by explaining it through statements
called privacy policies. These privacy policies are not easy to read
and to understand.

## Context
This pattern is limited to the web browsing domain.

## Goals
Expand the awareness of the user towards privacy policies of a
website.

## Motivating Example
Alice uses several web services but is not aware of the their privacy
policies. Even when she reads the policies, she is still not aware of
the actual implications of the legal description. In the absence of
other solutions, she does not read the policies and does not
understand the ramifications.

## Solution
The problem can be solved by designing and implementing a privacy
proxy that can parse and interpret policies. Afterwards it translates
the policies into a human-readable format to present them in a
user-friendly way.

## Constraints and Consequences
The user's awareness of the privacy policy rises so that more informed
decisions can be made. The proxy is able to automatically detect
changes of the privacy policy. A separate secure connection is needed
for the proxy for every access to an area which is secured by a
privacy policy. Policy constraints need to allocate local storage
in the client. An attack on this could lead the user to decisions
which he would otherwise not do. If there are any breaches of
privacy it can be blamed on the client if he did use a
privacy-aware client for a particular access.

## Known Uses
JRC P3P Proxy Version 2.0 is a P3P user agent acting like an
intermediary. Depending on the specified privacy preferences of a
user, it controls the access to web servers. Another known P3P user
agent is AT&T Privacy Bird. Privacy Bird is a tool warning users if
privacy policies of visited websites are not matching with their
invidual privacy preferences.