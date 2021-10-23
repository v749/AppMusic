import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EngeHawai from './artista/EngeHawai';
import MamonasAssassina from './artista/MamonasAssassina';
import RaulSeixas from './artista/RaulSeixas';
import ZeRamalho from './artista/ZeRamalho';
import Artista from './Pages/Artista';

import CoracaoMac from './musica/CoracaoMac';
import OSegundoSol from './musica/OSegundoSol';
import QuemChorava from './musica/QuemChorava';
import TempoPerdido from './musica/TempoPerdido';
import VidaLoka from './musica/VidaLoka';
import Musica from './Pages/Musica';

const Stack = createStackNavigator();

export default function RotasButtom() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Artista"
        component={Artista}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EngeHawai"
        component={EngeHawai}
        options={{ title: 'Engenheiros do Hawai' }}
      />
      <Stack.Screen
        name="MamonasAssassina" component={MamonasAssassina}
        options={{ title: 'Mamonas Assasinas' }}
      />
      <Stack.Screen
        name="RaulSeixas"
        component={RaulSeixas}
        options={{ title: 'Raul Seixas' }}
      />
      <Stack.Screen
        name="ZeRamalho"
        component={ZeRamalho}
        options={{ title: 'Zé Ramalho' }}
      />

       <Stack.Screen
        name="Musica"
        component={Musica}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="CoracaoMac"
        component={CoracaoMac}
        options={{ title: 'Coração Machucado' }}
        />
      <Stack.Screen
        name="OSegundoSol"
        component={OSegundoSol}
        options={{ title: 'O Segundo Sol' }}
      />
      <Stack.Screen
        name="QuemChorava"
        component={QuemChorava}
        options={{ title: 'Quem Chorava Hoje Ri' }}
      />
      <Stack.Screen
        name="TempoPerdido"
        component={TempoPerdido}
        options={{ title: 'Tempo Perdido' }}
      />
      <Stack.Screen
        name="VidaLoka"
        component={VidaLoka}
        options={{ title: 'Vida Loka Parte 1' }}
      />      
      </Stack.Navigator>      
  );
}
