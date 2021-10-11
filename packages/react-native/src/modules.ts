import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-text-localizer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const NativeTextLocalizer = NativeModules['TextLocalizer']
  ? NativeModules['TextLocalizer']
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

function getPlatformLanguage(): Promise<string> {
  return NativeTextLocalizer.getCurrentLanguage();
}

export { getPlatformLanguage };
