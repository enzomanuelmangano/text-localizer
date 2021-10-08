import { NativeTextLocalizer } from './modules';

export function getCurrentLanguage(): Promise<string> {
  return NativeTextLocalizer.getCurrentLanguage();
}

export * from 'react-text-localizer';
