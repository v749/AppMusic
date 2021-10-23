import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Musicas(props) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>As Melhores {'\n'} Músicas</Text>

      <FlatList
        data={musicas}
        keyExtractor={(item)=>{item.uid.toString()}}        
        renderItem={({item}) =>          
          <View style={estilo.musica}>
          
            <TouchableOpacity onPress={()=>{props.navigation.navigate(item.buttom)}}>
              <Text style={estilo.txtMusica}>{item.nome}</Text>
            </TouchableOpacity>
            
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="headphones"
                  size={20}
                  color={'red'}
                />{' '}
                {item.like} Curtidas
              </Text>
              <Text style={estilo.reproducoes}>
                <MaterialCommunityIcons
                  name="account-check"
                  size={20}
                  color={'green'}
                />{' '}
                {item.reproducoes} Reproduções
              </Text>
            </View>
          </View>
        }
      />
    </View>
  );
}

const musicas = [
  {
    uid: 1,
    nome: 'Quem Chorava Hoje Ri',
    like: 598,
    reproducoes: 8956,
    buttom: 'QuemChorava',
  },
  {
    uid: 2,
    nome: 'Quando o Segundo Sol Chegar',
    like: 895,
    reproducoes: 3694,
    buttom: 'OSegundoSol',
  },
  {
    uid: 3,
    nome: 'Tempo Perdido',
    like: 2369,
    reproducoes: 3610,
    buttom: 'TempoPerdido',
  },
  {
    uid: 4,
    nome: 'Coração Machucado',
    like: 369,
    reproducoes: 1230,
    buttom:'CoracaoMac',
  },
  {
    uid: 5,
    nome: 'Vida loka',
    like: 5454,
    reproducoes: 4878,
    buttom:'VidaLoka',
  },

]

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169E1',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 30,
  },
  musica: {
    backgroundColor: '#87CEFA50',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    textAlign: 'center',
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtMusica: {
    fontSize: 20,
    marginVertical: 15,    
  },
});
