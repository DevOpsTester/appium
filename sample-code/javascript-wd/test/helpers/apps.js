if (process.env.DEV && !process.env.SAUCE_LABS) {
  exports.iosTestApp = "sample-code/apps/TestApp.app.zip";
  exports.androidApiDemos = "sample-code/apps/ApiDemos-debug.apk";
} else {
  // TODO: Change thes URL's to 'master' locations
  exports.iosTestApp = "https://github.com/appium/appium/raw/dpgraham-create-session/sample-code/apps/TestApp.app.zip";
  exports.androidApiDemos = "https://github.com/appium/appium/raw/dpgraham-create-session/sample-code/apps/ApiDemos-debug.apk";
}
