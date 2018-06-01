//
//  RNEnhanceWebviewManager.m
//  RNEnhanceWebview
//
//  Created by barry on 2018/5/24.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNEnhanceWebviewManager.h"

#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#else
#import "RCTBridge.h"
#endif

@implementation RNEnhanceWebviewManager

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}


RCT_EXPORT_MODULE(RNEnhanceWebview)

RCT_REMAP_VIEW_PROPERTY(keyboardDisplayRequiresUserAction, _webView.keyboardDisplayRequiresUserAction, BOOL)

@end


