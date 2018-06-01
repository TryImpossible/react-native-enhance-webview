
# react-native-enhance-webview

## Getting started

`$ npm install react-native-enhance-webview --save`

### Mostly automatic installation

`$ react-native link react-native-enhance-webview`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-enhance-webview` and add `RNEnhanceWebview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNEnhanceWebview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.enhancewebview.RNEnhanceWebviewPackage;` to the imports at the top of the file
  - Add `new RNEnhanceWebviewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-enhance-webview'
  	project(':react-native-enhance-webview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-enhance-webview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-enhance-webview')
  	```

<!--#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNEnhanceWebview.sln` in `node_modules/react-native-enhance-webview/windows/RNEnhanceWebview.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Enhance.Webview.RNEnhanceWebview;` to the usings at the top of the file
  - Add `new RNEnhanceWebviewPackage()` to the `List<IReactPackage>` returned by the `Packages` method-->


## Usage
```javascript
import RNEnhanceWebview from 'react-native-enhance-webview';

render() {
	 const { width, height } = Dimensions.get("window");
    const pageSource = { uri: 'http://192.168.0.33:8081/html/test.html' };
    // const pageSource = { uri: 'https://www.baidu.com/' };
    return (
      <View style={{ width, height }}>
        <RNEnhanceWebview
            ref={ref => this.webView = ref}
            style={{ flex: 1, width }}
            source={pageSource}
            keyboardDisplayRequiresUserAction={false} //ios自動獲取焦點
	         autoFocus={true} //android自動獲取焦點
            // injectedJavaScript={'alert(123)'}
            automaticallyAdjustContentInsets={false}
            allowFileAccessFromFileURLs={true}
            scalesPageToFit={false}
            mixedContentMode={'always'}
            javaScriptEnabled={true}
            startInLoadingState={true}
            dataDetectorTypes='none'
            onMessage={event => {
              // let ret = JSON.parse(event.nativeEvent.data);
              // console.log(event.nativeEvent.data);
            }}
            onLoad={() => {

            }} />
        </View>
    ) 
}
```

## Description

* `RNEnhanceWebview`繼承`ReactNative`提供的組件`WebView`，支持`WebView` 的所有props 和 static method。 [WebView文檔](https://facebook.github.io/react-native/docs/webview.html)
* 增加`autoFocus`，用於Android自動獲取焦點並彈出鍵盤，默認false；
* 增加`keyboardDisplayRequiresUserAction `， 用於ios自動獲取焦點並彈出鍵盤，默認true；

> 用`ReactNative`開發App時，需要實現一個的功能，即在H5中讓`input`標籤自動獲取焦點並彈出鍵盤。但是，`ReactNative`提供的`WebvView`組件並沒有提供這個屬性或方法。被逼無奈，只好自己去想辦法增實現。為了儘量兼容`ReactNative`提供的`WebvView`，`Native`端採用繼承的方式實現`WebView`，並添加自動獲取焦點和彈出鍵盤的`Props`; `ReactNative`覆寫`WebView.android.js`和`WebView.ios.js`文件，添加`autoFocus ` `keyboardDisplayRequiresUserAction ` props; 目前這種解決方式比較靠譜，既支持了`ReactNative`的`WebView`，又方便自定義`WebView`;

## GIF
![ios效果圖](https://github.com/TryImpossible/react-native-enhance-webview/blob/master/example123/demo/enhance-webview-ios.gif?raw=true)
![android效果圖](https://raw.githubusercontent.com/TryImpossible/react-native-enhance-webview/master/example123/demo/enhance-webview-android.gif)