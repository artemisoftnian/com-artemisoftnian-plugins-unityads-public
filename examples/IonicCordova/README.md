## NOTES FOR IONIC - CORDOVA

Use only "ionic cordova" commands, to add plugins, platforms, build, etc..
Reference: [https://ionicframework.com/docs/cli/commands/cordova-build](https://ionicframework.com/docs/cli/commands/cordova-build)


If Got Error: "does not exist import android.support.annotation.RequiresApi"

On Android Studio nagivate to IonicWebViewEngine.java:
- comment the line: import android.support.annotation.RequiresApi; 
- Aprox Line 137 on IonicWebViewEngine.java: Change @RequiresApi(Build.VERSION_CODES.LOLLIPOP) to @TargetApi(Build.VERSION_CODES.LOLLIPOP)
- Buil Normally, and Voila!!!