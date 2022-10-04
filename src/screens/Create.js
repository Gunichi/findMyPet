import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Touchable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native' 
import moment from 'moment'

const Create = () => {

  const navigation = useNavigation()
  const [name, setName] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [birthdate, setBirthdate] = useState()
  const [email, setEmail] = useState()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [cellphone, setCellphone] = useState()

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setBirthdate(date)
    hideDatePicker();
  };

  function createUser() {

    const formData = new FormData();

    formData.append("name", name)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("email", email)
    formData.append("birthdate", moment(birthdate).format('YYYY-MM-DD'))
    formData.append("cellphone", cellphone)
    {/*formData.append('images', {
      uri: images.uri,
      type: 'image/jpeg',
      name: 'profile-picture'
    })*/}

    axios.post('https://drf-dogs.herokuapp.com/accounts/register/', formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }
    )
    .then(response => {
      alert('Cadastro realizado')
      console.log(response.data)
      navigation.navigate("Login")
    })
    .catch(error => {
      console.log(error.response)
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.createAccount}>
        <Text style={styles.create}>Criar conta</Text>
        <Text style={styles.textCreate}>Crie sua conta e aproveite todos os benefícios do app</Text>
      </View>
      <View style={styles.register}>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}> Nome </Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}> Nome de usuário </Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Email</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}

          />
        </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Data de nascimento</Text>
          </View>
          <TextInput style={styles.textInput} value={birthdate ? birthdate.toLocaleDateString() : 'Selecione sua data de nascimento'} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              style={styles.datePicker}
              mode="date"
              date={birthdate}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
              <Text style={styles.textDate}> Data </Text>
            </TouchableOpacity>         
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.labelContainer}>
            <Text style={styles.textLabel}>Telefone</Text>
          </View>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setCellphone(text)}
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
        <TouchableOpacity style={styles.buttonCreate} onPress={() => createUser()}>
          <Text style={styles.textButton}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (navigation.navigate('Login'))}>
        <Text style={styles.text}>
          Já possui uma conta?
          <Text style={{ color: '#5a189a'}}> Logar</Text>
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

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
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    marginTop: '2%',
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
    color: '#5a189a',
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
  textCreate: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  }
})

export default Create