[TOC]

## Summary
This pattern avoids the tracking of visitors of websites via cookies.
It does this by deleting them at regular intervals or by disabling
cookies completely.

## Problem
With every single interaction in the web you leave footmarks and clues
about yourself. Cookies for example enable webservers to gather
information about web users which therefore affects their privacy and
anonymity. Web service providers trace user behavior, which can lead
to user profiling. Also providers can sell the gathered data about
users visiting their pages to other companies.

## Context
This pattern is applicable when personal identifiable information is
tracked through software tools, protocols or mechanisms such as
cookies and the like.

## Goals
Restricting a website to not be able to track any of the user's
personal identifiable informations.

## Motivating Example
Alice wants to buy shoes and she wants to shop online. She heads to an
online shop and searches for shoes but can’t decide which ones she
wants, so she buys neither of them. The next day she finds a couple of
emails in her inbox, giving her suggestions for other shoes and
alerting her that the viewed shoes are now on sale.

## Solution
Restricting usage of cookies on the client side by deleting cookies on
a regular basis e.g. at every start-up of the operating system or
enabling them case-by-case by deciding if the visited website is
trustworthy or not and by accepting a cookie only for the current
session. At the highest level of privacy protection cookies are
disabled, but as a consequence web services are restricted. Another
solution could be that cookies are exchanged between clients, so that
sophisticated user profiles emerge.

## Constraints and Consequences
With cookies disabled there is no access to sites that require enabled
cookies for logging in. Other tracking mechanisms for user
fingerprinting may still work even when cookies are disabled.

## Known Uses
Junkbuster is an old proxy filtering between web server and browser to
block ads and cookies, but it is no longer maintained. A program named
CookieCooker (http://www.cookiecooker.de/) provides protection for
monitored user behaviour and interests by exchanging cookies with
other users or using a random selection of identities. Unfortunately
this project also seems to be not maintained anymore. There is also
the Firefox Add-on Self-Destructing Cookies which deletes cookies of
tabs as soon as they are closed.