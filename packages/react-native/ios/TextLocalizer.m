#import "TextLocalizer.h"

@implementation TextLocalizer

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(getCurrentLanguage,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSString* languageCode = [[NSLocale preferredLanguages] objectAtIndex:0];
  NSArray *wordsArray  = [languageCode componentsSeparatedByString:@"-"];
  resolve([wordsArray firstObject]);
}

@end
