import * as React from 'react';
//Importando a tela "RotasTab" que, dentro dela, irá abrir as demais
import RotasTab from './src/RotasTab';
import {NavigationContainer} from '@react-navigation/native'; 
export default function App() {
  return (
    <NavigationContainer>  
      <RotasTab />
    </NavigationContainer>
  );
}
