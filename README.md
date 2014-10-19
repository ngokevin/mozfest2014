Pushing Hybrid Mobile Apps to the Forefront
===========================================

The hacking portion of the session. Join #hybridapps on irc.mozilla.org to help
or get help.

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
that you can try testing on different devices.

Some useful resources that might help you along the way:

- [Ionic UI Components](http://ionicframework.com/docs/components) - just stick
  them into the HTML to make your app pretty
- [Mozilla Cordova Developer Site](http://mozilla-cordova.github.io/) - compatibility
  of Cordova plugins for FirefoxOS and links to usage

## Emulate and Test

To build the app for different environments:

- ```ionic platform add ios``` or ```ionic platform add android``` or ```ionic platform add firefoxos```
- ```ionic build ios``` or ```ionic build android``` or ```ionic build firefoxos```
- ```ionic emulate ios``` or ```ionic emulate android```

Each respective platform has its own emulator for testing:

- Android: adbtools
- FirefoxOS: WebIDE
- OSX: XCode

I will have several laptops with XCode and adbtools set up so you don't have to
install gigabytes of software yourself. There will probably be some attendees
with laptops conveniently set up as well.

## Share

Try zipping and swapping apps with another platform's team. Run it on your
respective emulator or device, see how well it runs despite being developed for
another platform.

- Take an app from another platform's team
- Run it on your respective emulator or device
- See how well it runs despite being developed on a different target
