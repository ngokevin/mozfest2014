Mozfest Ionic App
=================

A sample app based off of the Ionic ```tabs``` starter template.

Demonstrates cross-platform device API functionalities.

## Setup

Add the following Cordova plugins to enable device APIs:

    cordova plugin add org.apache.cordova.camera

## Building and Running

### FirefoxOS

FirefoxOS is easiest to test. It only requires Firefox.

    cordova platform add firefoxos
    cordova prepare

- Open WebIDE from the Web Developer menu in Firefox.
- Select the app in ```platforms/firefoxos/www``` to open and run.

### iOS

iOS requires an Apple Developer Program membership and iOS certificates. One
laptop and iPhone will have everything ready to go.

    ionic platform add ios
    ionic build ios
    ionic emulate ios

- Open the project in ```platforms/ios/``` in xCode.
- Select the phone from the dropdown, and press the Play button to install.

### Android

Android requires a lot of setup with SDK and paths. Two laptops will have
everything all ready to go.

    ionic platform add android
    ionic build android

- Go into ```platforms/android/```
- Run ```adb install bin/<app>.apk```
