/* 
    TELA INICIAL DE APRESENTAÇÃO DO APLICATIVO 
*/

import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'

export default function Welcome() {
    const navigation = useNavigation();
    
 return (
    <View style={styles.container}>
        <View style={styles.containerImg}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../img/logo/principal.png')}
                style={{ width: '100%' }}
                resizeMode="contain"
            />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Nenhum de nós é tão bom, quanto todos nós juntos.</Text>
            <Text style={styles.text}>Faça o login para começar</Text>

            <TouchableOpacity style={styles.areaBtn} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textBtn}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
   </View>  
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF'
    },
    containerImg:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: '#04248c',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: '5%'
    },
    title:{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#b2c5d9',
    },
    areaBtn:{
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn:{
        fontSize: 18,
        color: '#1d2473',
        fontWeight: 'bold'
    }
  })