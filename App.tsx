/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Headers from './src/components/Header';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/components/Login';
import Password from './src/components/Password';
import Code from './src/components/Code';
import Password2 from './src/components/Password2';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar backgroundColor={"#999999"} /> */}
      <View>
        <Login/>

        {/* <Password/> */}

        {/* <Code/> */}

        {/* <Password2/> */}

      </View>
    </SafeAreaView>
  );
}



export default App;
