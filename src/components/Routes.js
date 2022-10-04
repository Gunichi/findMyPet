import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import LostPets from '../screens/LostPets'
import ButtonNew from './ButtonNew'
import Settings from '../screens/Settings'
import CreatePet from '../screens/CreatePet'
import DetailsPet from '../screens/DetailsPets';
import Login from '../screens/Login'
import MyPets from '../screens/MyPets';

import { Entypo, Ionicons } from '@expo/vector-icons';
import EditProfile from '../screens/EditProfile';
import Create from '../screens/Create';
import Support from '../screens/Support';
import Team from '../screens/Team';

const HomeStack = createStackNavigator();

function HomescreenStack() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#5a189a',
        tabBarInactiveTintColor: '#000',
      }}
    >
      <Tab.Screen 
        name="LostPets" 
        component={LostPets}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Pets',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen 
        name="CreatePet" 
        component={CreatePet} 
        options={{
          tabBarLabel: '',
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Cadastrar Pet',
          headerTintColor: '#fff',
          tabBarIcon: ({ focused, color, size }) => (
            <ButtonNew size={size} color={color} focused={focused} />
          ),
        }}
      />

      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Configurações',
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////


const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <HomeStack.Navigator initialRouteName='Login'>
      <HomeStack.Screen 
        name="LostPets" 
        component={HomescreenStack} 
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="Team"
        component={Team} 
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Equipe',
          headerTintColor: '#fff',
        }}
      />
      <HomeStack.Screen 
        name="EditProfile" 
        component={EditProfile} 
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Editar perfil',
          headerTintColor: '#fff',
        }}
      />
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen 
        name="DetailsPet" 
        component={DetailsPet}
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Detalhes',
          headerTintColor: '#fff',
        }} 
      />
      <HomeStack.Screen 
        name="Settings" 
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          headerTintColor: '#fff',
        }} 
      />
      <HomeStack.Screen 
        name="Support" 
        component={Support}
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Suporte',
          headerTintColor: '#fff',
        }} 
      />
      <HomeStack.Screen 
        name="MyPets" 
        component={MyPets}
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          title: 'Meus pets',
          headerTintColor: '#fff',
        }} 
      />
       <HomeStack.Screen 
        name="Create" 
        component={Create}
        options={{
          headerStyle: {
            backgroundColor: '#5a189a',
          },
          headerTintColor: '#fff',
        }} 
      />
    </HomeStack.Navigator>

  )
}

export default Routes