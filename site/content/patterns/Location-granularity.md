[TOC]

##Intent##
Support [minimization](Minimization) of data collection and distribution.

##Context##
When a service is collecting location data from or about a user, or transmitting location data about a user to a third-party.

##Problem##

Many location-based services collect current or ongoing location information from a user in order to provide some contextual service (nearest coffee shop; local weather; etc.). Collecting more information than is necessary can harm the user's privacy and increase the risk for the service (in the case of a security breach, for example), but location data may still need to be collected to provide the service. Similarly, users may want the advantages of sharing their location from your service to friends or to some other service, but sharing very precise information provides a much greater risk to users (of re-identification, stalking, physical intrusion, etc.).

##Solution##

Since much geographic data inherently has different levels of precision (see [geographic ontologies](Geographic ontologies), for example) -- like street, city, county, state, country -- there may be natural divisions in the precision of location data. By collecting or distributing only the necessary level of granularity, a service may be able to maintain the same functionality without requesting or distributing potentially sensitive data. A local weather site can access only the user's zip code to provide relevant weather without ever accessing precise (and therefore sensitive) location information.

A similar pattern is [location fuzzing](Fuzzing) which uses an algorithm to decrease the accuracy of location data without changing its lat/lon precision. This may be useful if the application only functions on latitude/longitude data, but can be vulnerable to attack.

In some cases, less granular data may also better capture the intent of a user (that tweet was about Sproul Plaza in general, not that particular corner) or be more meaningful to a recipient ("Nick is in Berkeley, CA" means more to my DC relatives than the particular intersection). For more along these lines, see, for example, [the Meaningful Location Project](http://www.meloproject.com/team).

###Examples###

####Fire Eagle location hierarchy####

![Fire Eagle granularity screenshot](Fire Eagle granularity.png)

Yahoo! Fire Eagle allows user to provide location information to applications using eight different "levels" of granularity in their [hierarchy](http://fireeagle.yahoo.net/developer/documentation/location): 

* No information
* As precise as possible
* Postal code
* Neighborhood
* Town
* Region
* State
* Country

Fire Eagle specifically requires that recipient applications be written to handle data at any of the levels, and allows updating the user's location at any level of granularity.

####Twitter "place" vs. "exact location"####

[Twitter](https://support.twitter.com/articles/78525-about-the-tweet-location-feature) allows users to tag a tweet with either exact coordinates, a Twitter "place" (a town, neighborhood or venue) or both.

####Geode####

One of the fore-runners to the W3C Geolocation API, Firefox's experimental Geode feature allowed JavaScript access to the current location at four different levels of granularity.{{fact}}

##Forces/Concerns##

Accepting or transmitting location data at different levels of granularity generally requires a location hierarchy or geographic ontology agreed upon by both services and a more complex data storage model than simple digital coordinates.  

Truncating latitude and longitude coordinates to a certain number of decimal places may decrease precision, but is generally not considered a good fuzzing algorithm. (For example, if a user is moving in a straight line and regularly updating their location, truncated location information will occasionally reveal precise location when the user crosses a lat/lon boundary.) Similarly, using "town" rather than lat/lon may occasionally reveal more precise data than expected when the user crosses a border between two towns.