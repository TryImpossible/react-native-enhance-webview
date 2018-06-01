
package com.enhancewebview;

import android.webkit.WebView;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.webview.ReactWebViewManager;

public class RNEnhanceWebviewManager extends ReactWebViewManager {

  @Override
  public String getName() {
    return "RNEnhanceWebview";
  }

  @Override
  protected WebView createViewInstance(ThemedReactContext reactContext) {
    WebView root = super.createViewInstance(reactContext);
    return root;
  }

  @ReactProp(name = "allowFileAccessFromFileURLs")
  public void setAllowFileAccessFromFileURLs(WebView root, boolean allows) {
    root.getSettings().setAllowFileAccessFromFileURLs(allows);
  }

  @ReactProp(name = "autoFocus")
  public void setAutoFocus(WebView root, boolean autoFocus) {
    if (autoFocus) {
      root.requestFocus();
    }
  }
}