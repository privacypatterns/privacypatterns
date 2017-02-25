[TOC]

<!--###[Also Known As]-->
<!-- All other names the pattern is known by.-->



##Summary
<!-- One short paragraph summarising the pattern.-->

Strip potentially sensitive metadata that isn't directly visible to the end user.

<!--intent-->


##Context
<!-- The situations in which the pattern may apply.-->

When a service requires a user to import data from external sources (eg.
pictures, tweets, documents) different types of metadata may be 
transmitted. Users may not be aware of the metadata as it can be
automatically generated or not directly visible. Services might be
inadvertently responsible for exposing private metadata, or going
against users' expectations.

##Problem
<!-- The problem a pattern addresses, including a list of forces describing why a problem might be difficult to solve.-->

Users are not always fully aware of the various kinds of metadata
attached to files and web resources they share with online services.
Much of this data is automatically generated, or not directly visible to
users during their interactions. This can create situations where, even
though users share information explicitly with services, they may be
surprised to find this data being revealed. In certain cases where the
data is legally protected, the service could be held responsible for any
leakage of sensitive information. 

How should services that need users to share data and upload files
treat additional metadata attached with files? In case of uploading
documents and images, which parts of the metadata can be treated as
explicitly shared information.

##Solution
<!-- A concise description of how the pattern addresses the problem.-->

Stripping all metadata that is not directly visible during upload time,
or during the use of the service can help protect services from
leaks and liabilities. Even in cases where the information is not
legally protected, the service can protect themselves from surprising
their users and thus alienating them. 

Additionally when users share data with services, they can be presented
with a preview of the data obtained by the service, including any
metadata ``[[Preview Shared Data]]``. This allows users to be more aware
of information that they are sharing with the services, and in many
cases with other entities on the Internet.

To summarize: user metadata that can not be made visible to users
clearly should be stripped to avoid overstepping the users' expectations. 

<!--###[Structure]-->
<!--A detailed specification of the structural aspects of the pattern. A class diagram if applicable.-->



<!--###[Implementation]-->
<!--Guidelines for implementing the pattern; code fragments; suggested PETS; policy fragments.-->



<!--##Consequences-->
<!--The advantages (benefits) and disadvantages (liabilities) of applying the pattern.-->



<!--###[Constraints]-->
<!-- limitations as a consequence of applying the pattern.-->



##Examples
<!--Motivational example to see how the pattern is applied.-->

1. Uploading images to twitter.com

 Twitter.com removes EXIF data from images uploaded to their image
 sharing service. Previously there have been many breaches of personal
 location by using EXIF data shared by image sharing services. 

2. Hiding EXIF data on Flickr.com

 In certain cases services might build features based on
 metadata, or the metadata sharing could be an important part of the
 community of users. Flickr.com allows users to hide their EXIF data from
 public display, and also provides an interface for users to easily see
 whether they are sharing location as part of uploading their images. 

 _TODO: add screenshots_

<!--###[Known Uses]-->
<!-- Pointers to various applications of the pattern.-->



<!--##See Also-->
<!-- Any pointers to relevant information, not contained in the subfields below.-->



<!--###[Related Patterns]-->
<!-- Supporting and conflicting patterns-->



<!--###[Sources]-->
<!-- References to the original source of the pattern.-->



<!--##General Comments-->
<!-- Separate discussion on the pattern.-->



<!--##Tags-->
<!-- User definable descriptors for additional correlation.-->