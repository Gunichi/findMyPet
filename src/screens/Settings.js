import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { MaterialIcons, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native' 
import axios from 'axios'
import AppLoading from 'expo-app-loading';
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
} from '@expo-google-fonts/open-sans';

const Settings = () => {

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
  

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const navigation = useNavigation()

  function Logout() {

    axios.post('https://drf-dogs.herokuapp.com/accounts/logout/', {
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }}).then(response => {
      console.log(response)
      navigation.navigate("Login")
    })
    .catch(error => {
      console.log(error.response)
    });
  }

  useEffect(() => {
    axios
      .get(
        `https://drf-dogs.herokuapp.com/accounts/me/
        `,
      )
      .then(
        (response) => {
          console.log(response.data)
          setName(response.data.name)
          setEmail(response.data.email)
          setBirthdate(response.data.birthdate)
          setUsername(response.data.username)
        })
      .catch((err) => {
        console.log(err)
      })
  },[])

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <SafeAreaView style={styles.container}>   
      <View style={styles.header}>
        <Image  
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}} 
          style={styles.logo} 
        />
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.detailsText}>{email}</Text>
       
      </View>
      <TouchableOpacity style={styles.button} onPress={() => (navigation.navigate('EditProfile'))}>
          <Text style={styles.buttonText}> Editar perfil </Text>
      </TouchableOpacity>   
      <View style={styles.body}>
        <View style={styles.bodyTitle}>
          <Text style={styles.titleBody}>Pets</Text>
        </View>
        <TouchableOpacity style={styles.mypets} onPress={() => (navigation.navigate('MyPets'))}>
          <View style={styles.iconLeft}>
            <MaterialIcons 
              name="pets" 
              size={18} 
              color="#5a189a" 
            /> 
          </View>
            <Text style={styles.bodyText}>
              Meus Pets. 
            </Text>
            <View style={styles.icon}>          
              <Ionicons name="chevron-forward-sharp" size={20} color="#5a189a" />
          </View>
        </TouchableOpacity>
        <View style={styles.bodyTitle}>
          <Text style={styles.titleBody}>Extras</Text>
        </View>
        <TouchableOpacity style={styles.mypets} onPress={() => (navigation.navigate('Team'))}>
          <View style={styles.iconLeft}>
            <FontAwesome 
              name="group" 
              size={20} 
              color="#5a189a" 
            />
          </View>
          <Text style={styles.bodyText}> 
            Equipe 
          </Text>
          <View style={styles.icon}>          
            <Ionicons name="chevron-forward-sharp" size={20} color="#5a189a" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mypets} onPress={() => (navigation.navigate('Support'))}>
          <View style={styles.iconLeft}>
            <FontAwesome5 
              name="hands-helping" 
              size={18} 
              color="#5a189a" 
            /> 
          </View>
          <Text style={styles.bodyText}> 
            Suporte. 
          </Text>
          <View style={styles.icon}>          
            <Ionicons name="chevron-forward-sharp" size={20} color="#5a189a" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mypets} onPress={Logout}>
          <View style={styles.iconLeft}>
            <FontAwesome5 
              name="sign-out-alt" 
              size={20} 
              color="#5a189a" 
            />
          </View>
          <Text style={styles.bodyText}> 
             Sair 
          </Text>
          <View style={styles.icon}>          
            <Ionicons name="chevron-forward-sharp" size={20} color="#5a189a" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 30
  },
  detailsText: {
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(158, 150, 150, .5)',
    borderWidth: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    fontFamily: 'OpenSans_400Regular'
  },
  button: {
    backgroundColor: '#5a189a',
    padding: 10,
    borderRadius: 100,
    width: '30%',
    marginTop: 20,
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular'
  },
  body: {
    marginTop: 20,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: '30%',
  },
  titleBody: {
    fontSize: 18,
    marginLeft: '6%',
    fontFamily: 'OpenSans_400Regular'
  },
  mypets: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 8,
    backgroundColor: '#FFF',
  },
  bodyText: {
    fontSize: 16,
    marginLeft: '2%',
    fontFamily: 'OpenSans_400Regular'

  },
  icon: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingLeft: 8
  },
  iconLeft: {
    marginLeft: '5%'
  },
  bodyTitle: {
    height: '15%',
    justifyContent: 'center'  
  }
  
});
export default Settings