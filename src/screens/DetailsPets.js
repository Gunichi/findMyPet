import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, Dimensions, Linking, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
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

const DetailsPet = (props) => {

  const {id, name, ownerName, breed, description, localization, images, missingDate, adoption, ownerPhone} = props.route.params.item
  
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
        <View style={styles.photoBackground}>
          {adoption == true ? 
            <>
              <Image source={{uri: images[0].image}} style={styles.photo} />
              <View style={styles.adocao}>
                <Text style={styles.adocaoPet}>
                  Adoção
                </Text> 
              </View>
              </>
            : 
            <>
            <Image source={{uri: images[0].image}} style={styles.photoLost} />
            <View style={styles.lost}>
              <Text style={styles.lostPet}>
                Desaparecido
              </Text> 
            </View>
            </>
          }
        </View>
        <View style={styles.info}>
          <View style={styles.infoHeader}>
            <Text style={styles.infoHeaderText}>  {name} </Text>
              <EvilIcons name="location" size={20} color="#5a189a"><Text style={styles.detailsText}> {localization} </Text></EvilIcons>
          </View>
          <View style={styles.infoBody}>
            <View style={styles.square}>
              <Text style={styles.detailsGridText}> {ownerName} </Text>
              <Text style={styles.detailsGridTitleText}>Dono</Text>
            </View>
            <View style={styles.square}>
              <Text style={styles.detailsGridText}> {missingDate} </Text>
              <Text style={styles.detailsGridTitleText}>Desaparecimento</Text>
            </View>
            <View style={styles.square}>
              <Text style={styles.detailsGridText}> {breed} </Text>
              <Text style={styles.detailsGridTitleText}>Raça</Text>
            </View>
          </View>
          <View style={styles.infoFooter}>
            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>Descrição</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </View>
          <View style={styles.finded}>
            <TouchableOpacity style={styles.findedButton} onPress={ownerPhone}>
              <Text style={styles.findedText}>Entrar em contato</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%'
  },
  photoBackground: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%', 
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'rgba(199, 133, 0, .5)',
    borderWidth: 10,
  },
  photoLost: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'rgba(244, 25, 25, .7)',
    borderWidth: 10,
  },
  info: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100,
    shadowRadius: 20,
    elevation: 15,
  },
  infoHeader: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    padding: 30,
  },
  infoHeaderText: {
    fontSize: 20,
    color: '#626262',
    marginBottom: 10,
    fontFamily: 'OpenSans_700Bold'

  },
  detailsText: {
    fontSize: 16,
    color: '#626262',
    marginBottom: 10,
    fontFamily: 'OpenSans_400Regular'

  },
  infoBody: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
    marginTop: 20,
  },
  square: {
    backgroundColor: "#FFF",
    width: 120,
    height: 70,
    margin: 10,
    borderRadius: 10,
    borderColor: '#CDC9C9',
    borderWidth: 2,
    alignContent: 'center',
    justifyContent: 'center',
  },
  detailsGridText: {
    fontSize: 16,
    color: '#626262',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_700Bold'
  },
  infoFooter: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 30,
  },
  findedButton: {
    width: '100%',
    backgroundColor: '#5a189a',
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  detailsGridTitleText: {
    fontSize: 12,
    color: '#626262',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular'
  },
  descriptionTitle: {
    fontSize: 20,
    color: '#626262',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular'
  },
  descriptionText: {
    fontSize: 14,
    color: '#626262',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular'
  },
  findedText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular',
  },
  finded: {
    flex: 1,
    backgroundColor: '#FFF',  
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },
  header: {
    backgroundColor: '#000',
    width: '100%',
    height: 5,
    flex: 1,
  },
  adocao : {
    backgroundColor: '#FFD379',
    marginTop: 20,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40,
    width: '20%',
    fontFamily: 'OpenSans_400Regular',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  adocaoPet: {
    color: '#C78500',
    fontFamily: 'OpenSans_700Bold',
  },
  lost : {
    backgroundColor: '#FFABAB',
    marginTop: 20,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 40,
    width: '20%',
    fontFamily: 'OpenSans_400Regular',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lostPet: {
    color: '#F41919',
    fontFamily: 'OpenSans_700Bold',
  }

});
export default DetailsPet