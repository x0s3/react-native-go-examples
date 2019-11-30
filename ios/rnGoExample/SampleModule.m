//
//  SampleModule.m
//  rnGoExample
//
//  Created by xose on 22/11/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTLog.h>
#import "SampleModule.h"
#import "RnSample/RnSample.h"

@implementation SAMPLE_MODULE

RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(syncSum:(nonnull NSNumber *)x y:(nonnull NSNumber *)y) {
  NSNumber *result = [NSNumber numberWithInt:RnSampleSyncSum(x.intValue, y.intValue)];
  
  return result;
}

RCT_EXPORT_METHOD(asyncSum:(nonnull NSNumber *)x
                  y:(nonnull NSNumber *)y
                  sleepMs:(nonnull NSNumber *)sleepMs
                  fetchQueueBooksWithResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT,0), ^{
    NSNumber *result = [NSNumber numberWithInt:RnSampleAsyncSum(x.intValue, y.intValue, sleepMs.longValue)];
    
    resolve(result);
  });
}

@end
