import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const Team = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/03/19/17/23/0985270.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Gunichi
          </Text>
          <Text style={styles.position}>
            Front-end.
          </Text>
        </View>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Eric
          </Text>
          <Text style={styles.position}>
            Badk-end.
          </Text>
        </View>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Lucas
          </Text>
          <Text style={styles.position}>
            Designer.
          </Text>
        </View>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Pedro
          </Text>
          <Text style={styles.position}>
            Coder/Designer.
          </Text>
        </View>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Eric
          </Text>
          <Text style={styles.position}>
            Drawer.
          </Text>
        </View>
        <View style={styles.teamCard}>
          <Image  
            source={{ uri: 'https://st2.depositphotos.com/2166845/5890/i/450/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'}} 
            style={styles.logo} 
          />
          <Text style={styles.name}>
            Saul
          </Text>
          <Text style={styles.position}>
            Support.
          </Text>
        </View>
      </View>
        
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(90, 24, 154, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    borderColor: 'blue',
    margin: 5
  },
  teamCard: {
    margin: 10,
  },
  logo: {
    width: 200,
    height: 250,
    borderRadius: 8,
  },
  name: {
    fontSize: 23,
    marginTop: 5,
    color: '#5a189a'
  },
  position: {
    color: 'rgba(90, 24, 154, 0.5)'
  }
})

export default Team