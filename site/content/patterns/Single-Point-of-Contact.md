[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Personal Agent

## Context
<!-- The situations in which the pattern may apply.-->

Many controllers make use of a storage platform (i.e. 'cloud' facilities), such as e-Health services that keep their sensitive patient data in a distributed online storage. The sensitivity of this information raises concern and garners a need for special care. The storage medium in this case rules out typical security approaches.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Effective distributed storage services require specialized privacy management. The deficiencies of traditional means may be expressed through the following:

- traditional security mechanisms are platform dependent;
- typically they are difficult to federate or distribute;
- compliance with protocol can be cumbersome; and
- as such they are often inflexible.

#### Forces/Concerns
- Controllers wish to protect the sensitive or otherwise personal data they are charged with
- They want to acquire genuine [Lawful Consent](Lawful-Consent) in a streamlined fashion
- They need this process to be facilitated, supervised, and provably sound

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Single Point of Contact adopts a claim-based approach for both authentication and authorization similar to a super-peer design, also acting as a (Resource) Security Token Service, an Identity and Attribute Provider, and a Relying Party. It features a tried and proven expressive e-consent language, and can communicate with other SPoCs in a Circle of Trust

#### Rationale
Overcoming the inflexibility of traditional security mechanisms is partly solved by claim-based identity, which _provides a platform-independent way of presenting identity information_.

### [Structure]
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->

_A SPoC is essentially a security authority, which protects patients' privacy in e-Health applications by providing a claim-based authentication and authorisation functionality  (Baier et al. 2010), and facilitating secure communication between an e-Health service and its clients._

SPoC shares characteristics with a Central Medical Registry (CMReg), which performs authentication and manages identifying access to anonymised medical documents in a central repository. SPoC additionally facilitates secure e-Health service development and integration. It is able to share Electronic Health Records (EHRs) through a peer-to-peer network as an overarching, claim-based, super-peer-like representative of the e-Health community. Multiple SPoCs may also communicate, constituting a Circle of Trust.

See Fan et al. (2012) Figure 1 for a visual depiction.

The SPoC features a *Domain Ontology* for providing vocabulary towards claims and policies, a *Policy Engine* for consent syntax using natural language and pseudonym storage, and an *Interface Service*. The interfaces provided include Authentication, Authorisation, and Pseudonym Resolution.

### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

A SPoC is able to issue security tokens as a Security Token Service (STS), authenticate local domain users as an Identity Provider, certify attributes as an Attribute Provider, and accept external claims as a Relying Party. When in a Circle of Trust, the SPoC can also translate the claims of other SPoCs as a Resource STS.

SPoCs' implementation of e-consent features the following levels, based on Coiera et al. (2004):

- general consent [with or without specific exclusions];
- general denial [with or without specific consents];
- service authorisation;
- service subscription; and
- investigation.

As with Pruski's (2010) e-CRL, SPoCs' e-consent also considers _specific grantees, operations, purposes and period of validity_.

For more information see Fan et al. (2012).

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

The SPoC ensures that the privacy of sensitive medical data is protected, and that it is distributed securely and only to the people who are allowed to access the data. However, it requires a reliable credential-based authentication system to be able to validate requests.

<!--### [Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



<!--## Examples-->
<!--Motivational example to see how the pattern is applied.-->



<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _must use_ [Lawful Consent](Lawful-Consent), as it features an expressive e-consent language which aims to provide sufficient means to acquire permission for processing that is valid.

### [Sources]
<!-- References to the original source of the pattern.-->

- Fan, L., Buchanan, W. J., Lo, O., Thuemmler, C., Lawson, A., Uthmani, O., Ekonomou, E., & Khedim, A. S. (2012). SPoC: Protecting Patient Privacy for e-Health Services in the Cloud. Retrieved from http://researchrepository.napier.ac.uk/4992/
    - D. Baier, V. Bertocci, K. Brown, E. Pace, and M. Woloski, A Guide to Claims-based Identity and Access Control, Patterns & Practices. ISBN: 9780735640597, Microsoft Corp., Jan. 2010.
    - E. Coiera and R. Clarke, “e-Consent: the Design and Implementation of Consumer Consent Mechanism in an Electronic Environment,” JAMIA, vol. 11, no. 2, pp. 129–140, 2004.
    - C. Pruski, “e-CRL: A Rule-Based Language for Expressing Patient Electronic Consent,” in Proc. of eTELEMED. IEEE, 2010, pp. 141–146.

- C. Bier and E. Krempel, “Common Privacy Patterns in Video Surveillance and Smart Energy,” in ICCCT-2012, 2012, pp. 610–615.

<!--## General Comments-->
<!-- Separate discussion on the pattern.-->



<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->