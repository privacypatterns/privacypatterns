[TOC]

### [Also Known As]
<!-- All other names the pattern is known by.-->

Handling unusual account activities with multiple factors

## Context
<!-- The situations in which the pattern may apply.-->
<!-- Aspects which constrain the solution, but are not modified by it. They affect the impact of different forces.-->

Services (or products), particularly over the Internet, tend to use username and password based authentication. This security mechanism proves most convenient for users, as it is commonplace and simple compared to the more secure alternatives. It is also subject to common shortcomings, however. Passwords become less secure the longer they remain unchanged, are often vulnerable to brute force, snooping, and phishing attacks, and cannot be proven to be held solely by the user.

This complicates the certainty of the authentication, and thereby the authenticity of any decision made by the user, including consent. Controllers may also derive additional factors, however, such as device or access specific information. If location is provided, for example, it may hint at unlikely account activity.

## Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Username and password authentication alone has varying reliability for proving decisions taken by a user, especially when concerning more sensitive actions. Controllers need to enhance their certainty that any consent provided is legitimate.

#### Forces and Concerns
<!-- Implications in this problem which affect the appropriateness of a solution, and are affected by this pattern.-->
<!-- Forces should be highly visible for easy reference, where less obvious a dedicated section is recommended.-->

- Users want to be able to authenticate easily and quickly, but also do not want controllers to accept decisions made by intruders
- Users want to know that their password is compromised, so that they can change it, especially if they use derivatives elsewhere
- Controllers want to protect user accounts from unauthorized access
- Controllers do not want to allow actions which the user did not truly consent to

<!-- Concerns -->
A balance should be made between the insecurity of username and password authentication and the inconvenience of multi-factor authentication. If measures affect usability or privacy too greatly, users will stop using the system. While the rate of false positives must not be too high, they are far preferable to undetected intrusions.

- _In the provided example, Facebook makes use of its resource of friendship and photos. Their decision is based on the assumption that it is very unlikely for a hacker to recognize the friends. Actually the assumption may not hold true in some scenarios, because many of the photos are public and can be viewed under another account, or can be identified with the help from a large-scale tagged photo collection and machine learning._
- _Persuading the user into carrying a hardware token everywhere only for occasional multi-factor authentication may be difficult, but it might worth the effort for financial services._

## Solution
<!-- A concise description of how the pattern addresses the problem.-->

Analyze the available information for which there is consent to establish an access norm. Test this against future access to identify unusual activities. When this occurs, alert the user and use multi-factor authentication while re-establishing certainty. The authenticated user should be able to review and take further action.

<!--### [Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



### [Implementation]
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->

_Typically, a sign-in to a website is in the form of an HTTP request, which contains many customized settings of the browser, including the type of the browser and operating system as well as the architecture (`User-Agent` header), the Cookie (`Cookie` header), language preferences (`Accept-Languages` header). Apart from these, the website can get the IP address of the user, which may be mapped to a certain country/area through GeoIP. [These] can be used to tell if a browser is 'new' to the website. The website can have its rules to determine if an access is 'suspicious', for example, an access from a new country / browser / operating system is considered suspicious._

_By running native code, the application can [consensually] collect some [device identifiers], including the operating system environment settings (e.g. the list of running processes), the hardware parameters (such as the ID of the CPU), and device UUIDs (provided by mobile operating systems like iOS). By completing a network request, the service also retrieves the IP address of the [device]. [These] can be used to tell if a [device] is 'new' to the service. The service can have its rules to determine if a sign-in is 'suspicious', for example, an access from a new country / [device] / operating system is considered suspicious._

* _Require Multi-factor Authentication_

_In case of a suspicious [activity], multi-factor authentication may be a way to let the legitimate user in. The service can request [further authentication], such as:_

- _A software token_
    - _Examples include Google Authenticator which runs on mobile phones and implements RFC6238 TOTP security tokens._
- _A hardware token (disconnected)_
    - _Examples include a token issued by a bank which displays digits, which is similar to a software token._
- _A hardware token (connected)_
    - _The token may exchange a longer secondary password than the previous one, which means it's safer._
- _Personal data like date of birth, [or civil identification]._
    - _Obviously not a good choice here because it cannot be changed._
- _An one-time password (OTP) sent to the registered E-mail address / mobile phone_
    - _Depending [on] the type of the service, [the user may use] the same password for the E-mail address, or [may lose their mobile phone]._

_Using multi-factor authentication only in case of suspicious [activity] is more convenient [than] using it all the time, but is less secure._

* _Notify Account Holders of Unusual Activities_

_When a suspicious sign-in is detected, it may be a sign that the password has already been leaked. Depending on the type of the service, it can notify the user about the suspicious sign-in through E-mail, telephone, or other means._

_Here the immediate notification can also be used in the multi-factor authentication._

_For services that can be logged on from multiple devices at the same time, the user should be able to check the existence of other sessions, and review recent [activity]._

## Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->

Users will be able to use an easier, more familiar method of authentication in most scenarios, only having to resort to multi-factor authentication when there is potential cause for concern.

### [Constraints]
<!-- limitations as a consequence of applying the pattern.-->

_This pattern has some limitations. For example, it relies on accurate identification of suspicious [activity] based on meta information, where the meta information including the IP address can be spoofed by an experienced attacker._

_If the fallback multi-factor authentication only happens occasionally to the legitimate account owner, they may be unprepared to [handle] such authentication, leading to [decreased] usability._


## Examples
<!--Motivational example to see how the pattern is applied.-->

1. _Gmail_
    - _Gmail displays information about other sessions (if any) in the footer, linking to a page named "Activity on this account" which lists other sessions and recent activities to the Gmail account. The user has the option to sign out other sessions._
    - _In case of annoying false positives, the user may choose to disable the alert for unusual activity. The disable takes about a week, "to make sure the bad guys aren't the ones who turned off your alerts."_
2. _Facebook_
    - _When Facebook detects an unusual sign-in, it shows 'social authentication' that displays a few pictures of the user's friends and asks the user to name the person in those photos._
3. _Dropbox_
    - _The 'Security' tab of the 'Settings' of the Dropbox website displays all web browser sessions logged in to the account, and enables the user to log out one or more of them. The name of the browser, operating system, and the IP address and corresponding country are displayed to help the user make a choice._
    - _It also displays all devices that are linked to the account, and allows the user to unlink one or more of them._

<!--### [Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--## See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



### [Related Patterns]
<!-- Supporting and conflicting patterns-->

This pattern _complements_ the [Data Breach Notification](Data-breach-notification-pattern) pattern. These patterns work in an overlapping context. While this pattern  focuses on detecting and dealing with unauthorized access, [Data Breach Notification](Data-breach-notification-pattern) focuses on informing and reacting when a data breach has occurred. The patterns can work together to handle unauthorized access to personal data.

This pattern also _complements_ [Informed Secure Passwords](Informed-Secure-Passwords). While this pattern establishes access norms for authentication, the latter focuses on encouraging better use of password-based authentication. The patterns may work together to aid in detection and response to compromised access, and in users learning from these instances.

Finally this pattern _complements_ [Impactful Information and Feedback](Impactful-Information-and-Feedback). Unusual Activities provides important information which can be used with [Impactful Information and Feedback](Impactful-Information-and-Feedback) to better inform the user, and allow the user to better protect their personal data.

### [Sources]
<!-- References to the original source of the pattern.-->

N. Doty, M. Gupta, and J. Zych, “privacypatterns.org - Privacy Patterns,” privacypatterns.org, 2017. [Online]. Available: http://privacypatterns.org/. [Accessed: 26-Feb-2015].

J. Polakis, M. Lancini, G. Kontaxis, F. Maggi, S. Ioannidis, A. Keromytis, and S. Zanero, “All Your Face Are Belong to Us: Breaking Facebook’s Social Authentication,” Proceedings of the Annual Computer Security Applications Conference (ACSAC), no. i, pp. 399–408, 2012.

## General Comments
<!-- Separate discussion on the pattern.-->

* _Determining the Scope_

_[Gmail] displays unusual activities regarding an account, which involves identifying unusual activities where the password entered is correct. For some other services, correct passwords can be rejected from a new device / location._

_So, the scope of this pattern is to handle unusual activities (including sign-ins)._

* _Relevant Information_

_This pattern includes multi-factor authentication and two-step authentication, which are well studied. But the general topic about informing the user of unusual activities seems to be [lacking in] literature._


<!--## Tags-->
<!-- User definable descriptors for additional correlation.-->