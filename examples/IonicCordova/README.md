## NOTES FOR IONIC - CORDOVA

Use only "ionic cordova" commands, to add plugins, platforms, build, etc..

Reference: [https://ionicframework.com/docs/cli/commands/cordova-build](https://ionicframework.com/docs/cli/commands/cordova-build)


If You Got Error: <span class="text-red">"does not exist import android.support.annotation.RequiresApi"</span>:

- Using Android Studio nagivate to IonicWebViewEngine.java :
- comment the line: import android.support.annotation.RequiresApi; 
- Aprox Line 137 on IonicWebViewEngine.java: Change @RequiresApi(Build.VERSION_CODES.LOLLIPOP) to @TargetApi(Build.VERSION_CODES.LOLLIPOP)
- Buil Normally, and Voila!!!