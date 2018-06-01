/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import RNEnhanceWebview from 'react-native-enhance-webview';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width } = Dimensions.get("window");

type Props = {};
export default class App extends Component<Props> {
  render() {
    const pageSource = { uri: 'http://192.168.0.13:8081/html/test.html' };
    // const pageSource = { uri: 'https://www.baidu.com/' };
    return (
      <RNEnhanceWebview
          ref={ref => this.webView = ref}
          style={{ flex: 1, width }}
          source={pageSource}
          keyboardDisplayRequiresUserAction={false}
          // injectedJavaScript={'alert(123)'}
          automaticallyAdjustContentInsets={false}
          autoFocus={true}
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
    ) 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
