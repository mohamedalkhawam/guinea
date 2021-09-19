/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './locales/i18n';
import App from './App';
import {name as appName} from './app.json';
import Fullscreen from './FullScreen';
Fullscreen.enable();
AppRegistry.registerComponent(appName, () => App);
