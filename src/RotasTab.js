import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Serve para colocar os ícones dentro da noosa aplicação

import Artista from './RotasButtom';
import Home from './Pages/Home';
import Musica from './Pages/Musica';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    //Instrução que deixa a screen como principal independente de sua posição
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}> 
      <Tab.Screen
        name="Artista"
        component={Artista}
        options={{
          tabBarLabel: 'Artista',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-music" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Musica"
        component={Musica}
        options={{
          tabBarLabel: 'Música',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="music" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
