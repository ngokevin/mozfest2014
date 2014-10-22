Pushing Hybrid Mobile Apps to the Forefront
===========================================

The hacking portion of the session.

Join #hybridapps on irc.mozilla.org for the back-channel.

**Check out the pre-built app in the [mozfest2014](https://github.com/ngokevin/mozfest2014/tree/master/mozfestApp) directory.**

## Create an Idea

Think of something really, really simple that demonstrates the use of a device
API. These might include:

- [Camera](https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md)
- [Accelerometer](http://cordova.apache.org/docs/en/2.5.0/cordova_accelerometer_accelerometer.md.html)
- [Geolocation](http://cordova.apache.org/docs/en/2.5.0/cordova_geolocation_geolocation.md.html#Geolocation)

For example, an app that tweets to #mozfest your current GPS coordinates that
says something cheesy like *come hug a hybrid mobile app lover!*.

## Set Up Ionic

Install Ionic.

- ```npm install -g cordova ionic```

Create a bootstrap template. Choose from one of the below:

- ```ionic start myApp tabs``` - navigation via tabs on the bottom (iOS)
- ```ionic start myApp sidemenu``` - navigation via sidemenu (Android)
- ```ionic start myApp blank``` - blank template (FirefoxOS)

## Build

Start hacking. If you aren't in the coding mood, you can skip down to the
*Emulate and Test* section; I have a prebuilt app demonstrating device APIs
that you can try testing on different devices on laptops that are already set
up.

Some useful resources that might help you along the way:

- [Ionic UI Components](http://ionicframework.com/docs/components) - just stick
  them into the HTML to make your app pretty
- [Mozilla Cordova Developer Site](http://mozilla-cordova.github.io/) - compatibility
  of Cordova plugins for FirefoxOS and links to usage

## Emulate and Test

Each respective platform has its own emulator for testing:

- Android: adbtools
- FirefoxOS: WebIDE (available in Firefox 33)
- OSX: XCode

If you are developing on your own machine, I highly recommend developing with
WebIDE and testing with Firefox. It would take too long to set up iOS and
Android environments within the time of this session.

Once you have something, I have several laptops with XCode and adbtools set up
for you to test on real devices (i.e., Nexus 7, Firefox Flame, iPhone 6). The
```mozfest2014``` directory has another README that has instructions on
installing your app on the different devices using the provided laptops.
