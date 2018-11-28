IOS and Android examples of [detox](https://github.com/wix/Detox) usage

## Install
 - git clone git@github.com:ss18/e2e-tests-mobile-native.git
 - [XCode 9.4.1](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_9.4.1/Xcode_9.4.1.xip)
 - [Android Studio 3.2.1](https://developer.android.com/studio/)
 - Install the latest version of [Homebrew](https://brew.sh/)
 - Install [Node.js](https://nodejs.org/en/)
 - Install [applesimutils](https://github.com/wix/AppleSimulatorUtils)
```
brew tap wix/brew
brew install applesimutils
```
- Install Detox command line tools
```
npm install -g detox-cli
```
 - Add ANDROID_HOME and ANDROID_SDK_ROOT to bash profile (https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x/37990108)

## Usage
```
detox build -c ios.sim.debug
detox test -c ios.sim.debug
detox build -c android.emu.debug
detox test -c android.emu.debug
```

