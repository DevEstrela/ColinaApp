/*
  CONTROLE DE ROTAS DO APLICATIVO
*/

import React from 'react';

//importando para estilizar o statusbar
import {StatusBar } from 'react-native';
// importando para contruir a navegação
import {NavigationContainer} from '@react-navigation/native'
//importando o componente que tem as rotas da navegação
import Routes from './src/pages/Routes'

import Satisfacao from './src/pages/Satisfacao';

//primeiro componenete que o app rederiza
export default function App() {
 return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#04248c"} barStyle='light-content'/>
      <Routes/>
      {/* <Satisfacao/> */}
    </NavigationContainer>
  );
}