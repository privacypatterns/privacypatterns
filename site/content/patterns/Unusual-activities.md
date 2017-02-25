[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->


##Summary
<!-- One short paragraph summarising the pattern.-->

Use additional factors to notify users of unusual activities and authenticate 
when accounts may have been compromised.

<!--intent-->
For Internet services, prevent suspicious access to the account, and/or 
make the account owner aware of unusual activities.

##Context
<!-- The situations in which the pattern may apply.-->

Many Internet services are using password-based authentication which is
really convenient (compared to strong authentication) but has apparent
drawbacks:

-   The password itself does not change.

    Unless the account owner changes the password, all sign-ins use the
    same identity-password combination. If the password is stolen by a
    malicious party through some means, it can be reused until it is
    changed.

-   The password can be cracked.

    Many account owners tend to use weak passwords that can be
    brute-force attacked online. Sometimes the hacker can obtain the
    database dump which contains hashed passwords, which can be
    brute-forced offline.

-   The account owner has no way to ensure their exclusive possession of
    the password.

    The account owner has no evidence if the password is stolen by a
    malicious party.

-   The only way to control who can access is to reset the password.

    As a result, if the account owner want to ensure only they have the
    password, they can only reset the password. In some scenarios,
    resetting the password is not enough.

-   The password can be seen by people around.

    When the account owner enters the password on a computer keyboard or
    the screen of a mobile device (mobile phone / tablet), people around
    have the ability to snoop the password and record it.

Thus, a service can't tell if the user is legitimate even if the
identity-password combination provided by the user is correct.
Fortunately, a service can usually receive some meta information to help
determine if an activity is unusual. In case of such unusual activities,
a service needs to prevent suspicious access to an account, and/or
inform the account owner of the unusual activities.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

How can a service that uses username-password authentication and
involves a lot of privacy identify unusual sign-ins, confirm the
identify of the user, and inform the account owner of such unusual
activities?

<!--forces/concerns-->
The pattern described here is a tradeoff between pure password
authentication which is insecure, and pure multi-factor authentication
which is inconvenient. It increases privacy at the cost of usability.

The fallback multi-factor authentication should be picked carefully with
the understanding of the service.

-   In the above example, Facebook makes use of its resource of
    friendship and photos. Their decision is based on the assumption
    that it is very unlikely for a hacker to recognize the friends.
    Actually the assumption may not hold true in some scenarios, because
    many of the photos are public and can be viewed under another
    account, or can be identified with the help from a large-scale
    tagged photo collection and machine learning.
-   Persuading the user into carrying a hardware token everywhere only
    for occasional multi-factor authentication may be difficult, but it
    might worth the effort for financial services.

The strategy to identify unusual activities should also be considered
seriously. It should be also to identify most of the activities, with a
false positive rate that is not too high. It should balance the cost of
multi-factor authentication.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

First, the service should be able to identify unusual sign-ins. Then the
service may use multi-factor authentication to confirm the identity of
the user.

The user should be informed of unusual activities, or have some ways to
see recent events, and even do something.

* Identify Unusual Activities

Today, a web service may appear as a website or an application on the
user's devices (including mobile devices and the PCs). The service can
use meta information to determine if a sign-in with the correct
username-password combination is suspicious.

The strategies described here has both false positives and false
negatives.

* A Website

Typically, a sign-in to a website is in the form of an HTTP request,
which contains many customized settings of the browser, including the
type of the browser and operating system as well as the architecture
(`User-Agent` header), the Cookie (`Cookie` header), language
preferences (`Accept-Languages` header). Apart from these, the website
can get the IP address of the user, which may be mapped to a certain
country/area through GeoIP.

The above meta information can be used to tell if a browser is *new* to
the website. The website can have its rules to determine if an access is
*suspicious*, for example, an access from a new country / browser /
operating system is considered suspicious.

* An Application

By running native code, the application can collect some identifiers of
the machine, including the operating system environment settings (e.g.
the list of running processes), the hardware parameters (such as the ID
of the CPU), and device UUIDs (provided by mobile operating systems like
iOS). By completing a network request, the service also retrieves the IP
address of the machine.

The above meta information can be used to tell if a machine is *new* to
the service. The service can have its rules to determine if a sign-in is
*suspicious*, for example, an access from a new country / machine /
operating system is considered suspicious.

* Require Multi-factor Authentication

In case of a suspicious sign-in, multi-factor authentication may be a
way to let the legitimate user in. The service can request one more
authentication except password, such as:

-   A software token

    Examples include Google Authenticator which runs on mobile phones
    and implements RFC6238 TOTP security tokens..

-   A hardware token (disconnected)

    Examples include a token issued by a bank which displays digits,
    which is similar to a software token.

-   A hardware token (connected)

    The token may exchange a longer secondary password than the previous
    one, which means it's safer.

-   Personal data like date of birth, SSN

    Obviously not a good choice here because it cannot be changed.

-   An one-time password (OTP) sent to the registered E-mail address /
    mobile phone

    Depending the type of the service, maybe the user uses the same
    password for the E-mail address, or maybe the mobile phone is stolen
    and the service runs on the mobile phone.

Using multi-factor authentication only in case of suspicious sign-ins is
more convenient to using it all the time, but is less secure.

* Notify Account Holders of Unusual Activities

When an suspicious sign-in is detected, it may be a sign that the
password has already been leaked. Depending on the type of the service,
it can notify the user about the suspicious sign-in through E-mail,
telephone, or other means.

Here the immediate notification can also be used in the multi-factor
authentication.

For services that can be logged on from multiple devices at the same
time, the user should be able to check the existence of other sessions,
and review recent sign-in events.

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



##Consequences
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



###[Constraints]
<!-- limitations as a consequence of applying the pattern.-->

This pattern has some limitations. For example, it relies on accurate
identification of suspicious sign-ins based on meta information, where
the meta information including the IP address can be spoofed by an
experienced attacker.

If the fallback multi-factor authentication only happens occasionally to
the legitimate account owner, they may be unprepared to such
authentication, leading to a decreased usability.


##Examples
<!--Motivational example to see how the pattern is applied.-->

1. Gmail

 Gmail displays information about other sessions (if any) in the footer,
 linking to a page named "Activity on this account" which lists other
 sessions and recent activities to the Gmail account. The user has the
 option to sign out other sessions.

 In case of annoying false positives, the user may choose to disable the
 alert for unusual activity. The disable takes about a week, "to make
 sure the bad guys aren't the ones who turned off your alerts."

2. Facebook

 When Facebook detects an unusual sign-in, it shows *social
 authentication* that displays a few pictures of the user's friends and
 asks the user to name the person in those photos.

3. Dropbox

 The *Security* tab of the *Settings* of the Dropbox website displays all
 web browser sessions logged in to the account, and enables the user to
 log out one or more of them. The name of the browser, operating system,
 and the IP address and corresponding country are displayed to help the
 user make a choice.

 It also displays all devices that are linked to the account, and allows
 the user to unlink one or more of them.

<!--###[Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--##See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



<!--###[Related Patterns]-->
<!-- Supporting and conflicting patterns-->



###[Sources]
<!-- References to the original source of the pattern.-->

-   Polakis, I., Lancini, M., Kontaxis, G., Maggi, F., Ioannidis, S.,
    Keromytis, A. D., & Zanero, S. (2012, December). **All Your Face are
    Belong to Us: Breaking Facebook's Social Authentication**. In
    *Proceedings of the 28th Annual Computer Security Applications
    Conference* (pp. 399-408). ACM.

##General Comments
<!-- Separate discussion on the pattern.-->

* Determining the Scope

I started with Gmail's display of account activities. It displays
unusual activities regarding an account, which involves identifying
unusual activities where the password entered is correct. For some other
services, correct passwords can be rejected from a new device /
location.

So, the scope of this pattern is to handle unusual activities (including
sign-ins).

* Relevant Information

This pattern includes multi-factor authentication and two-step
authentication, which are well studied. But the general topic about
informing the user of unusual activities seems to be lack of literature.


<!--##Tags-->
<!-- User definable descriptors for additional correlation.-->