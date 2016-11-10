[TOC]

## Summary
A messaging service is enhanced by using a trusted third party to
exchange the identifiers of the communication partners by pseudonyms.

## Problem
Messaging includes all forms of communication through emails,
articles, message boards, newsgroups etc. This information could be
stored and used to build sophisticated user profiles. Sometimes it can
also be used to prosecute people.

## Context
This pattern can be used for online communications by email, through
message boards, and newsgroups.

## Goals
The goal of this pattern is to prevent unforeseen ramifications of the
use of online messaging services.

## Motivating Example
Alice is a political activist and tries to organize a political
demonstration. Since her government does not like free speech, her
communication channels are intensely monitored and one day, she simply
disappears into a labor camp and is never seen again.

## Solution
A message is send by a user to the server, which exchanges the
sender's address with a pseudonym. Replied messages are sent back to
the pseudonymous address, which will then be swapped back to the
original.

## Constraints and Consequences
Users can communicate more freely. Pseudonym servers can be misused to
send offensive messages, for spam mails or by criminals for illegal
activities. Under those circumstances it could be necessary to revoke
the pseudonymity of the corresponding parties.

## Known Uses
nym.alias.net a pseudonymous email system with the goal to provide
secure concealment of the user's identity. A Type I Anonymous Remailer
forwards emails by modifing the message header and removing
sender-related information.