import path from 'path';

const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: 'iPhone 6 Simulator' || process.env.IOS_DEVICE_NAME,
  platformVersion: '11.1' || process.env.IOS_PLATFORM_VERSION,
  app: undefined, // Will be added in tests
};

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'Android' || process.env.ANDROID_DEVICE_NAME,
  app: undefined, // Will be added in tests
};

const serverConfig = process.env.SAUCE_LABS ? {
  host: 'ondemand.saucelabs.com',
  port: 80
} : {
  host: process.env.APPIUM_HOST || 'localhost',
  port: process.env.APPIUM_PORT || 4723
};

export { iosCaps, androidCaps, serverConfig };