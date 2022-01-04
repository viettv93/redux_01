/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import MainScreen from './src/screens/MainScreen';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/configureStore';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <MainScreen />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
