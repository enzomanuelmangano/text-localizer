#import "TextLocalizer.h"

@implementation TextLocalizer

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(getCurrentLanguage,
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSString* language = [[NSLocale preferredLanguages] objectAtIndex:0];
  resolve(language);
}

@end
