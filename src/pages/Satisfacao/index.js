/* TELA ONDE VAMOS COLOCAR O FORMULARIO DE SATISFAÇÃO
    
*/

import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Satisfacao() {

 return (
   <View style={styles.container}>

      <View style={styles.header}>
          
          <Text style={styles.title}> Começar avaliação </Text>
        
      </View>

        <View style={styles.form}>

          <Text>Como o agente funerario atendeu você?</Text>
  
          <Text>Qual seu nivel de satisfação do serviço?</Text>
          <Text>Você foi bem atendida pela nossa equipe?</Text>
          <Text>Como estava a limpeza do ambiente?</Text>

        </View>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    title:{
      color: '#FFF',
      textAlign: 'center',
      marginTop: '10%',
      fontSize: 39,
      fontWeight: 'bold'
    },
    form:{
      marginTop: '10%',
      paddingLeft: 80
      
    },
    header:{
      backgroundColor: '#04248c',
      height: '18%'
    }
})