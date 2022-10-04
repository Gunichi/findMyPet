import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native' 
import moment from 'moment'
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

const MyPets = () => {
  
  const [loading, setLoading] = useState(true);
  const [Dogs, setDogs] = useState([])
  const navigation = useNavigation()

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

  useEffect(() => {
    axios
      .get(
        `https://drf-dogs.herokuapp.com/dog/my-posts/`,
      )
      .then(
        (response) => {
          console.log(response.data)
          setDogs(response.data)
          setLoading(false)
        })
      .catch((err) => {
        console.log(err)
      })
  },[])

  if(loading && !fontsLoaded) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#5A189A" />
      </View>
    )
  } else { 
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{justifyContent:"center", alignItems:"center"}}        
          keyExtractor={(item) => item.id}
          data={Dogs}
          numColumns={2}
          renderItem={ ({ item }) => {
            return (
              <>
                <View style={styles.row}>
                  <TouchableOpacity 
                    style={styles.card} 
                    onPress={() => (navigation.navigate('DetailsPet', { item }))}
                  >
                    <Image 
                      style={styles.foto} 
                      source={{ uri: item.images[0].image }} 
                    />
                    <View style={styles.dogInfo}>
                      <View style={styles.containerr}>
                        <Text style={styles.nome}>
                          {item.name}
                        </Text>
                        {item.adoption == true ? 
                          <Text style={styles.adocaoPet}>
                            Adoção
                          </Text> 
                          : 
                          <Text style={styles.desaparecidoPet}>
                            Desaparecido
                          </Text>
                        }
                      </View>
                      <Text style={styles.detalhes}>
                        <Ionicons name="location-sharp" size={16} color="#5A189A" /> 
                        {item.localization} 
                      </Text>
                      <Text style={styles.detalhes}>
                        <Feather name="clock" size={16} color="#5A189A" /> 
                        <Text> {moment(item.missingDate).format('DD/MM/YYYY')} </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )
          }}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    borderColor: 'blue',
    margin: 5
  },
  foto: {
    width: 191,
    height: 138,
    borderRadius: 15,
  },
  card: {
    backgroundColor: 'whitesmoke',
    width: 191,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    margin: 5,
    shadowColor: "#5a189a",
    color: '#FFF',
    borderRadius: 15,
    fontFamily: 'OpenSans_400Regular'

  },
  dogInfo: {
    width: 161,
    height: 104,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: -5
  },
  nome: {
    color: '#5A189A',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    fontFamily: 'OpenSans_700Bold',
  },
  detalhes: {
    marginTop: 0,
    color: '#000',
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'OpenSans_400Regular'
  },
  desaparecido: {
    backgroundColor: '#FFABAB',
    color: '#F41919',
    fontFamily: 'OpenSans_400Regular'
  },
  containerr: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
  },
  desaparecidoPet: {
    backgroundColor: '#FFABAB',
    color: '#F41919',
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    height: 25,
    fontFamily: 'OpenSans_700Bold',
  },
  adocaoPet: {
    backgroundColor: '#FFD379',
    color: '#C78500',
    marginLeft: 5,
    marginTop: 20,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    textAlign: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    height: 25,
    fontFamily: 'OpenSans_700Bold',
  }

})
export default MyPets