/* TELA ONDE VAMOS COLOCAR O FORMULARIO DE SATISFAÇÃO
    
*/

import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Satisfacao() {

 return (
   <View style={styles.container}>

      <View style={styles.header}>
          
          <Text style={styles.title}> Começar avaliação </Text>
        
      </View>

        <View style={styles.form}>

               <Text style={{fontSize: 20, fontWeight: 'bold'}}>Como o agente funerario atendeu você?</Text>
           <View style={{flexDirection:'row'}}>
              <TouchableOpacity><MaterialIcons name="star" color={'red'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'darkorange'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#e7d84b'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#beed80'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#59d999'} size={20}  /></TouchableOpacity>

          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Qual seu nivel de satisfação do serviço?</Text>
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity><MaterialIcons name="star" color={'red'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'darkorange'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#e7d84b'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#beed80'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#59d999'} size={20}  /></TouchableOpacity>

          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Você foi bem atendida pela nossa equipe?</Text>
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity><MaterialIcons name="star" color={'red'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'darkorange'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#e7d84b'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#beed80'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#59d999'} size={20}  /></TouchableOpacity>

          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Como estava a limpeza do ambiente?</Text>
          <View style={{flexDirection:'row'}}>
              <TouchableOpacity><MaterialIcons name="star" color={'red'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'darkorange'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#e7d84b'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#beed80'} size={20}  /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="star" color={'#59d999'} size={20}  /></TouchableOpacity>

          </View>

        
          

        </View>

        <View style={{alignItems: 'center', marginTop: 100}}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textBtn}>ENVIAR</Text>
          </TouchableOpacity>
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
      marginTop: '15%',
      paddingLeft: 30
      
    },
    header:{
      backgroundColor: '#04248c',
      height: '18%'
    },
    botao:{
      backgroundColor: '#04248c',
      width: '50%',
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textBtn:{
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
    }
})