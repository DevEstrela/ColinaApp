import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import firebase from '../../firebase/firebaseConnection'
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'

export default function SignIn() {
  const [nome, setNome] = useState('Bem vindo (a)');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  function navegaHome(){
    navigation.navigate('Home')
  }

    async function logar(){

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then ( (value) => {
      alert('Bem vindo');
      navegaHome();
    })
    .catch ( (error) => {
      alert('OPS ALGO DEU ERRADO');
      return;
    })

    setEmail('')
    setPassword('')

}


 return (
    <View style={styles.container}>


        <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerTitulo}>
          <Text style={styles.title}>{nome}</Text>
        </Animatable.View>

        <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder='Digite seu email ...'
              placeholderTextColor={'#8091a5'}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />

            <Text style={styles.label} >Senha</Text>
            <TextInput
              placeholder='Digite sua senha ...'
              placeholderTextColor={'#8091a5'}
              onChangeText={ (text) => setPassword(text)}
              style={styles.input}
            />

            <TouchableOpacity style={styles.bottom} onPress={logar}>
              <Text style={styles.textBottom}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.textCadastro}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
              

            <Image
              source={require('../../img/logo/re.png')}
              style={styles.foolter}
              resizeMode='contain'
            />

        </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFF'
    },
    containerForm:{
      flex: 3,
      backgroundColor: '#04248c',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingStart: '5%',
      paddingEnd: '8%',
      paddingTop: '8%'
    },
    containerTitulo:{
      flex: 1,
      paddingLeft: 15
    },
    title:{
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: '20%'
    },
    input:{
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      borderBottomColor: '#FFF'

    },
    label:{
      color: '#FFF',
      fontSize: 16
    },
    bottom:{
      backgroundColor: '#FFF',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textBottom:{
      color: '#1d2473',
      fontSize: 18,
      fontWeight: 'bold'
    },
    textCadastro:{
      color: '#FFF',
      fontSize: 14,
      marginTop: 3
    },
    foolter:{
      width: '100%',
    }

  })