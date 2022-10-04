import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, Dimensions, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native' 
import axios from 'axios';


const Login = () => {

  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  function LoginExecute() {

    axios.post('https://drf-dogs.herokuapp.com/accounts/login/', {
      password: password,
      email: email,
    }, {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }}).then(response => {
      console.log(response)
      console.log('Login feito')
      navigation.navigate("LostPets")
    })
    .catch(error => {
      console.log(error.response)
    });
  }
  
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.logotipo} source={require('../img/essatamelhor.png')} />
      </View>
      <View style={styles.telaLogin}>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Email</Text>
          </View>
          <TextInput 
            style={styles.textInput} 
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Senha</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => LoginExecute()}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#5a189a'}} />
          <View>
            <Text style={{ textAlign: 'center', color: '#5a189a'}}> Não possui uma conta?</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#5a189a'}} />
        </View>
        <TouchableOpacity style={styles.createButton} onPress={() => (navigation.navigate('Create'))}>
          <Text style={styles.textCreate}>Criar uma conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.noRegisterText} onPress={() => (navigation.navigate('LostPets'))}>Continuar sem cadastro</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%'
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -8,
    left: 25,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    flex: 1, 
    borderWidth: 2, 
    borderColor: "#CDC9C9",
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FFF',
    width: '80%',
    paddingHorizontal: 25,
    borderRadius: 5
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 60, 
    backgroundColor: '#FFF',
    position: 'relative',
    color: '#5a189a',
    marginTop: '5%',
  },
  textLabel: {
    color: '#5a189a',
    fontSize: 15
  },
  telaLogin: {
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  logotipo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: 130
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#5a189a',
    borderWidth: 2,
    marginTop: '5%',
    padding: '2%',
    fontSize: 20,
    color: '#5a189a',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    borderRadius: 100
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#5a189a',
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  createButton: {
    width: '80%',
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    borderWidth: 2,
    borderColor: '#5a189a'
  },
  textCreate: {
    color: '#5a189a',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  noRegisterText: {
    color: '#5a189a',
    fontSize: 14,
    fontFamily: 'Roboto',
  }
});

export default Login