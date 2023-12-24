import 'react-native-gesture-handler'

import React from 'react';

import "./styles.css"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Settings} from './src/Pages';
import { HomeRouteProps } from './src/Pages/Home';
import { SettingsRouteProps } from './src/Pages/Settings';
import Modal, { ModalRouteProps } from './src/Layout/Modal';

export type RootStackParamList = {
  Home: HomeRouteProps,
  Settings: SettingsRouteProps
  Modal: ModalRouteProps
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{title: 'Modal', presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}