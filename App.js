import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CustomText } from './assets/component';
import { leftArrow, logoIcon } from './assets/svgXml';

import Home from './screens/Home';
import User from './screens/User';
import Tab from './assets/BottomTab';
import Detail from './screens/Detail';
import Game from './screens/Game';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Game' component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;