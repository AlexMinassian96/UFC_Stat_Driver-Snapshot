import media from './Media';

// Device Size
export type DeviceSize = keyof typeof media;
export const isDeviceSize = (test: any): test is DeviceSize => test in media;

// Media Query
export type MediaQuery = { deviceSize: DeviceSize; styles: string[] };
export const isMediaQuery = (test: any): test is MediaQuery => {
  if (typeof test !== 'object') return false;
  return 'deviceSize' in test && 'styles' in test;
};

// Custom Media
export type CustomMediaQuery = { styles: string | string[]; mediaQuery: string };
export const isCustomMedia = (test: any): test is CustomMediaQuery => {
  if (typeof test !== 'object') return false;
  return 'styles' in test && 'mediaQuery' in test;
};
