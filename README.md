# HUAWEI Analytics Kit - Capacitor Plugin

A Capacitor Plugin to use the following [HUAWEI Analytics Kit](https://developer.huawei.com/consumer/en/hms/huawei-analyticskit)


## Content
* [Preparation](#preparation)
* [API](#api)


## Preparation
### Console Side Preparation
- Before using Analytics Kit, enable it. For details, please refer to [Enabling Required Services](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-config-agc-0000001050163815).
- Run the keytool command to get the SHA256 fingerprint from the keystore: 
```bash
keytool -list -v -keystore hms_test.jks
```
>Note: Replace **hms_test.jks** with your keystore path
>Note: Make sure to use this keystore even in while debug
- Obtain the SHA256 fingerprint from the result:
![key](https://user-images.githubusercontent.com/61454003/101916607-7a38b700-3bc7-11eb-8ddb-c7746432dea8.png)

- On the AppGallery Connect (AGC) console of [HUAWEI Developer](https://developer.huawei.com/consumer/en/), Select your project or create a new one if you didn't do yet, then:
    -    In to the tab **Project Setting** > **General information** past the obtained SHA256 fingerprint, Click √ to save the fingerprint and download then the `agconnect-services.json` file.
![image](https://user-images.githubusercontent.com/61454003/101918101-3f378300-3bc9-11eb-9633-73beedb855b3.png)

### App Side Preparation (Please refer to the following [Demo](https://github.com/ikamaru/ionic-capacitorHmsAnalyticskit-demo))
- Add the plugin to your project using the following command:
```bash
npm install https://github.com/ikamaru/capacitor-hms-analytics-kit/
``` 
>Note: Sync after installing the plugin using the cmd: `npx cap sync android` 
- After enabling the Analytics Kit make sure to re-download the `agconnect-services.json` and past it to the **android/app** folder of your capacitor project.
- In the **android/build.gradle** file, make sure to  add the following lines: 
```Groovy
buildscript {
    repositories {
        //...
        maven {url 'https://developer.huawei.com/repo/'} //TODO: add this line
    }
    dependencies {
        //...
        classpath 'com.huawei.agconnect:agcp:1.4.1.300' //TODO: add this line
    }
}
allprojects {
    repositories {
        //...
        maven {url 'https://developer.huawei.com/repo/'} //TODO: add this line
    }
}
```
- In the **android/app/build.gradle** file,make sure to add the following code in the bottom:
```Groovy
try {
  def servicesJSON = file('agconnect-services.json')
  if (servicesJSON.text) {
    apply plugin: 'com.huawei.agconnect'
  }
} catch(Exception e) {
  logger.warn("agconnect-services.json not found, agconnect-services plugin not applied.")
}
```

- In the **MainActivity.java** of your android app (android/app/src/main/java/{APP_ID}/MainActivity.java), add the following line inside the bridge init:
```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(AnalyticsKit.class);//Add the following line
}});
```

## Api
The current version of this plugin, doesn't have any API yet, as it serve just to init the Analytics in order to colloct the [following events automatically](https://developer.huawei.com/consumer/en/doc/development/HMSCore-Guides/android-automatic-event-collection-0000001051757143)

