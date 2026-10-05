/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
// import HomeScreen from './src/screen/HomeScreen';
// import DetailScreen from './src/screen/DetailScreen';
import BookingScreen from './src/screen/BookingScreen';
// import TicketScreen from './src/screen/tiketScreen';
// import ProfileScreen from './src/screen/ProfilScreen';

// AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => HomeScreen);
// AppRegistry.registerComponent(appName, () => DetailScreen);
AppRegistry.registerComponent(appName, () => BookingScreen);
// AppRegistry.registerComponent(appName, () => TicketScreen);
// AppRegistry.registerComponent(appName, () => ProfileScreen);

