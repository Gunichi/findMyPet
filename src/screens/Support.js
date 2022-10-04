import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans'

const Support = () => {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.howHelp}>
          <FontAwesome5 
            name="headphones-alt" 
            size={100} 
            color="#5a189a" 
          />
          <Text style={styles.textTitle}>
            Como podemos te ajudar?
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonContact}>
            <View style={styles.iconLeft}>
              <FontAwesome5 
                name="headphones-alt" 
                size={16} 
                color="#5a189a" 
              />
            </View>
            <Text style={styles.textContact}> Entrar em contato via whatsapp</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.sendEmail}>
          <Ionicons 
            name="mail" 
            size={40} 
            color="#5a189a" />
          </View>
          <Text style={styles.sendUs}>Nos envie um email:</Text>
          <Text style={styles.emailOwner}>gunichi297@gmail.com</Text>
      </SafeAreaView>
    )
  }
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
  howHelp: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: '10%',
    borderColor: 'green',
    marginBottom: '50%'
  },
  logotipo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  texto: {
    fontSize: 20,
    marginTop: 10,
    color: '#5a189a',
    fontFamily: 'OpenSans_400Regular'
  },
  textTitle: {
    fontSize: 25,
    color: '#5a189a',
    fontFamily: 'OpenSans_400Regular'
  },
  buttonContact: {
    backgroundColor: 'rgba(90, 24, 154, 0.1)',
    width: '80%',
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#5a189a',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContact: {
    color: '#5a189a',
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular'
  },
  iconLeft: {
    marginLeft: '10%'
  },
  button: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 60,
    textAlign: 'center'
  },
  sendEmail: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(90, 24, 154, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: '10%'
  },
  sendUs: {
    color: '#CDC9C9',
    marginTop: 10,
    fontFamily: 'OpenSans_400Regular'
  },
  emailOwner: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular'
  }
})

export default Support