import React, { useState } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native' 
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { RadioButton } from 'react-native-paper';
import moment from 'moment';

const CreatePet = () => {

  const [images, setImages] = useState()
  const [nome, setNome] = useState()
  const [raca, setRaca] = useState()
  const [descricao, setDescricao] = useState()
  const [dataSumiu, setDataSumiu] = useState()
  const [localization, setLocalization] = useState()
  const [adoption, setAdoption] = useState(false)
  const navigation = useNavigation()

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDataSumiu(date)
    hideDatePicker();
  };

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

  function updatePrice() {
    
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
  }

  console.log(adoption)

  return (
    <ScrollView style={styles.scroll}>
    <SafeAreaView style={styles.container}>
      <View style={styles.createAccount}>
        <Text style={styles.create}>Criar conta</Text>
        <Text style={styles.textCreate}>Crie sua conta e aproveite todos os benefícios do app</Text>
      </View>
      <View style={styles.register}>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Nome do Pet</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Localização</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setLocalization(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Raça</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setRaca(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Descricao</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setDescricao(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Desaparecimento</Text>
          </View>
          <TextInput style={styles.textInput} value={dataSumiu ? dataSumiu.toLocaleDateString() : 'Nenhuma data selecionada'} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            style={styles.datePicker}
            mode="date"
            date={dataSumiu}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
            <Text style={styles.textDate}> Data </Text>
          </TouchableOpacity>         
        </View>
        <View style={styles.container2}>
          <Text>Selecione uma opção.</Text>
          <RadioButton.Group   
            style={{flexDirection: "row"}}
            onValueChange={(value) => setAdoption( value === "true" )} 
            value={adoption ? "true" : "false"}
          >
            <RadioButton.Item label="Adoção" value="true" color='#5a189a' />
            <RadioButton.Item label="Perdido" value="false" color='#5a189a' />
          </RadioButton.Group>
        </View>   
        <TouchableOpacity style={styles.buttonPhoto} onPress={pickImage}> 
          <Text style={styles.textButton}> Enviar foto </Text> 
        </TouchableOpacity>
        { images && <Image source={{ uri: images.uri }} style={{ width: 150, height: 150, borderRadius: 100 }} /> }
        <TouchableOpacity style={styles.buttonCreate} onPress={updatePrice}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      
       
      </View>
    </SafeAreaView>
    </ScrollView>


)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a189a',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  register: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10
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
    marginTop: '6%',
  },
  buttonCreate: {
    width: '80%',
    backgroundColor: '#5a189a',
    height: 58,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  textButton: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  textLabel: {
    color: '#CDC9C9',
    fontSize: 14
  },
  createAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5a189a',
    height: '10%',
    width: Dimensions.get('window').width,
  },
  create: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%'
  },
  textCreate: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonPhoto: {
    width: '80%',
    backgroundColor: '#AF6CF1',
    height: 58,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '1%'
  },
  datePicker: {
    backgroundColor: '#5a189a',
    height: 55, 
    borderRadius: 5,
    marginLeft: 5,
    justifyContent: 'center',
    width: 60
  },
  textDate: {
    color: "#FFF",
    fontSize: 15,
    textAlign: 'center',
  },
  scroll: {
    backgroundColor: '#FFF'
  }

})

export default CreatePet