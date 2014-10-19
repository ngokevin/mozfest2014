Mozfest Ionic App
=================

A sample app based off of the Ionic ```tabs``` starter template.

Demonstrates cross-platform device API functionalities.

## Setup

Add the following Cordova plugins to enable device APIs:

    cordova plugin add org.apache.cordova.camera

## Building

### FirefoxOS

    cordova platform add firefoxos
    cordova prepare

### iOS

    ionic platform add ios
    ionic build ios
    ionic emulate ios

### Android

    ionic platform add android
    ionic build android
    ionic emulate android
