import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import { TouchableOpacity } from 'react-native';
import axios from 'axios';

const EditProfile = () => {

  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [birthdate, setBirthdate] = useState()
  const [email, setEmail] = useState()
  const [createdAt, setCreatedAt] = useState()
  const [Images, setImages] = useState()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(result);
    }
  };

  {/*function updateProfile() {
    
    const formData = new FormData();

    formData.append("adoption", adoption)
    formData.append("name", nome)
    formData.append("breed", raca)
    formData.append("description", descricao)
    formData.append("missingDate", moment(dataSumiu).format('YYYY-MM-DD'))
    formData.append("localization", localization)
    formData.append('images', {
      uri: images.uri,
      type: 'image/jpeg',
      name: 'profile-picture'
    })

    axios.post('https://drf-dogs.herokuapp.com/dog/add/', formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    )
    .then(response => {
      alert('Cadastro realizado')
      console.log(response.data)
      navigation.navigate("LostPets")
    })
    .catch(error => {
      console.log(error.response)
    });
  }*/}

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
          setCreatedAt(response.data.createdAt)
        })
      .catch((err) => {
        console.log(err)
      })
  },[])

  return (
    <SafeAreaView style={styles.container}>   
     <View style={styles.header}>
      <Image  
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}} 
        style={styles.logo} 
      />
      </View>
      <View style={styles.body}>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Nome</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Nome de usuário</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Email</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Data de nascimento</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setBirthdate(text)}
            value={birthdate}
          />
        </View>
        <Text>Contra criada em: {createdAt}</Text>
      </View>
      {/*<TouchableOpacity style={styles.updateInfos}>
        <Text style={styles.updateText}> Atualizar dados </Text>
  </TouchableOpacity>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: 'rgba(158, 150, 150, .5)',
    borderWidth: 20,
  },
  svgCurve: {
    width: Dimensions.get('window').width,
    height: 160,
    position: 'absolute',
    zIndex: -1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
    height: '20%'
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
  EditProfile: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: '5%',
    marginBottom: '5%',
  },
  updateInfos: {
    width: '80%',
    backgroundColor: '#5a189a',
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  updateText: {
    color: '#FFF',
  }
});
export default EditProfile