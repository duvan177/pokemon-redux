/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import {name as appName} from './app.json';

import configureStore from './src/store/store'

const Root = () => 
    <Provider store={configureStore()}>
        <App/>
    </Provider>

AppRegistry.registerComponent(appName, () => Root);
