## UnityAds 3 Plugin 

Cordova / PhoneGap Plugin for UnityAds ver 3.x

## Contents

1.  [Description](#description)
2.  [Plugin Background](#plugin-background)
3.  [Features](#features)
4.  [Quick Start](#quick-start)
5.  [Installation](#installation)
6.  [Usage](#usage)
7.  [Methods](#methods)
8.  [Android ARCore Setup](#android-arcore-setup)
9.  [Credits](#credits)
10. [Donations](#donations)
11. [Legal](#legal)

## DESCRIPTION

This Cordova / PhoneGap plugin enables the integration of Unity Ads video ads into your cordova mobile games or apps in a way that both increases player engagement and puts more money in your pocket over the gamer’s lifetime. Unity Ads offers the highest Average Revenue Per User (ARPU) of any global rewarded video ad network.

## PLUGIN BACKGROUND

A couple of years ago, and after a great mistake, I got banned from Google AdsMob network. After appels to the mercy of Google, explaining what happens... I remain banned for life.  This put me on a very bad situation those days, with a very short list of good monetizing alternatives.  This ends the day I learn about UnityAds

After the end of the UnityAds 1.x and 2.x Api era, I have to move forward and Implement UnityAds 3.x on my projects. Implement it on the Unity Game Engine was a breeze, But then I didn't found any solutions to implement version 3.x on my html5, cordova, construct 2 or 3 projects.  That my friends, makes this cordova plugin a reality. Oh well, it was basically, necessity!

## FEUTURES

Platforms supported:
- [x] iOS, via SDK v3.x.x (see [Release Notes](https://github.com/Unity-Technologies/unity-ads-ios))
- [x] Android, via Android SDK v2.x.x (see [Release Notes](https://github.com/Unity-Technologies/unity-ads-android))

Ad Types:
- [x] Non Rewarded Video
- [x] Rewarded Video
- [x] Banner Ads
- [x] AR Ads


## QUICK START
```bash
	# create a demo project
    cordova create test1 com.yournamehere.test1 Test1
    cd test1
    cordova platform add android
    cordova platform add ios

    # now add the plugin, cordova CLI will handle dependency automatically
    cordova plugin add com-artemisoftnian-plugins-unityads3

    # now remove the default www content, copy the demo html file to www
    rm -r www/*;
    cp plugins/com-artemisoftnian-plugins-unityads3/example/basic/* www/;

	# now build and run the demo in your device or emulator
    cordova prepare; 
    cordova run android; 
    cordova run ios;
    # or import into Xcode / eclipse
```

## INSTALLATION

* If use with Cordova CLI:
```bash
cordova plugin add com-artemisoftnian-plugins-unityads3
```

* Using NPM
npm install com-artemisoftnian-plugins-unityads3


## USAGE

Step 1: Go and create a new project for the desire platform in [UnityAds portal](https://operate.dashboard.unity3d.com), 
Step 2: Write the specified id's in your javascript code.

```javascript
// select the right Ad Id according to platform
var gameId = "Android or iOS Game ID";
var videoAdPlacementId = "Video Placement ID";
var rewardedVideoAdPlacementId = "Rewarded Placement ID";
var arAdPlacementId = "AR AD Placement ID";
```

* Important: Enabling AR content through Unity:
  Contact [Unity Ads](mailto:ads-ar-support@unity3d.com) to enable AR content, providing the following information:

- Your Project ID
- The ID for the dedicated Placement to display AR content



After playing around and complete your tests, remember to put `isTest = false` when building for production.

## METHODS

```javascript
// Initialize UnityAds
UnityAdsInit(gameId, isTest, isDebug, fn);

// Video Ads Related (Regular Placement ID|Rewarded Placement ID)
ShowVideoAd(videoPlacementId, fn);
GetPlacementState(videoAdPlacementId, fn);

//Banner Related
ShowBannerAd(bannerAdPlacementId, bannerPosition,  fn);

//Manually Set UnityAds Privacy and GDPR consent (true|false)
ManualGdprOpts( consent, fn);
ManualCcpaOpts( consent, fn);
ManualCustomAgeGates( useroveragelimit, fn);
```

## Android ARCore Setup

UnityAds SDK Allows AR Ads on Android, but for this to work You will need to manually add the following entries on the AndroidManifest.xml on your project.

Permissions:
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

ARCore Entries inside the <application> section
```xml
<application>
  <meta-data android:name="com.google.ar.core.min_apk_version" android:value="24" />
  <meta-data android:name="com.google.ar.core" android:value="optional" />
</application>
```

Note: Before You can use any Related AR Ads you need to ask to permissions to the Unity Teams. Use the following guide as reference:
[UnityAds AR Ads Documentation](https://docs.unity3d.com/Packages/com.unity.ads@3.4/manual/MonetizationArAdsAndroid.html)

## Credits

This project is created and maintained by Waldemar Medina.
Available for project outsourcing and or consulting services. [Let me hear about it](mailto:waldemar_medina@hotmail.com). I can help in your project.

Check Out my [UnityAds addon for Construct 3](https://www.construct.net/en/make-games/addons/444/unityads)


## Legal

[Unity, GDPR and Data Privacy – FAQ](https://unity3d.com/legal/gdpr)



## Donations

Now that You end your reading, (I know You where curious) please consider supporting Artemisoftnian with a donation, a cup of coffee or maybe a slice of pizza :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/paypalme/WaldemarMedina)

or You can become a Patreon and support even more deeply, mysterious and secret stuff:

[![patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/artemisoftnian)

- Get acess to the Cordova Plugin Source Code
- Get acess to the Construct 3 UnityAds3 Plugin Source Code

* Important DON'T GET BANNED (Remember my little mistake): Please read carfully the [Unity Monetization Services Terms of Service](https://unity3d.com/legal/monetization-services-terms-of-service). And most important: DON'T CLICK ON YOUR OWN APP ADS. Don't said I haven't warn You!