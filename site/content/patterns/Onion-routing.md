[TOC]

## Summary
This pattern provides unlinkability between senders and receivers by
encapsulating the data in different layers of encryption, limiting the
knowledge of each node along the delivery path.

## Problem
When delivering data, the receiver has to be known. If the system
provides the functionality that the receiver of data should be able to
answer, than the receiver should also know the address of the sender.
When forwarding information over multiple stations then, in a naive
implementation, each station on the delivery path knows the sender and
the final destination.

## Context
A system in which data is routed between different nodes.

## Goals
The goal of this pattern is to achieve unlinkability between senders
and receivers.

## Motivating Example
Alice is a whistleblower and tries to forward data to Bob who works at
the press. She sends the corresponding documents as an
e-mail-attachment. Eve monitors the traffic and can see who sent this
mail to whom. The next day, police raids Alices apartment and sends
her to jail. Bobs mailaccount gets seized.

## Solution
The solution is to encrypt the data in layers such that every station
on the way can remove one layer of encryption and thus get to know the
immediate next station. This way, every party on the path from the
sender to the receiver only gets to know the immediate successor and
predecessor on the delivery path.

## Constraints and Consequences
If there are too few hops, the anonymity set is not big enough and the
unlinkability between sender and receiver is at risk. The same problem
occurs when there is too few communication going on in the network.
The multiple layers of encryption will bloat up the data and consume
bandwidth. If all nodes on the delivery path collaborate in deducing
the sender and the receiver, the pattern becomes useless.

## Known Uses
The TOR-browser, a web-browser specifically designed to ensure
anonymity makes heavy use of onion routing.