[TOC]

##Intent##
Enable sharing and re-sharing without wide public visibility or cumbersome authenticated access control.

Supports [user control](User-control) and [distribution](Distribution).

##Context##
When private content is accessible online, especially granular resources, and users want to share (and enable re-sharing) using existing communication mechanisms. Also particularly relevant when users are sharing with contacts who can't easily authenticate.

##Problem##

How do you share a private resource with unauthenticated users in a way that respects its sensitivity?
The solution must not allow unauthenticated users to access resources that weren't intended to be shared. 

##Solution##

Provide the user a _private link_ or _unguessable URL_ for a particular set of their personal information (their current location, an album of photos). Anyone who has the link may access the information, but the link is not posted publicly or easily guessable by an outsider, so the information is not shared with all. The user can share the private link with friends, family or other trusted contacts who can in turn forward the link to others who will be able to access it, without any account authentication or access control lists.

Services may also allow users to revoke existing private links or change the URL to effectively re-set who can access the resource.

###Examples###

#### Flickr "Guest Pass" ####

#### Google "anyone with the link" sharing ####

#### Tripit "Get a link" ####

#### Dropbox "Share Link" ####

##Forces/Concerns##

Be sure the link is unguessable (within some bounds) so that an outsider can't easily find all (or any) of the unlisted links either by brute force or by knowing when information was stored or what its name might be.

Note that the URL will be retained in recipients' browser history and could easily be inadvertently shared with others. Services should help users understand these limitations.