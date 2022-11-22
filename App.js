import React from 'react';

import {StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/pages/Routes'
import TabRoutes from './src/pages/Routes/TabRoutes';
export default function App() {
 return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#04248c"} barStyle='light-content'/>
      <Routes/>
      {/* <TabRoutes/> */}
    </NavigationContainer>
  );
}