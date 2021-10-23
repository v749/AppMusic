import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function RaulSeixas() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Raul {'\n'} Seixas</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/raulSeixas.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor Raul Seixas</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/raulSeixas2.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor e compositor Raul Seixas</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/raulSeixas3.jpg')}
            />
            <Text style={estilo.rotulo}>Rock</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Raul Seixas (1945-1989) foi um cantor, compositor, guitarrista e
          produtor brasileiro, um dos mais importantes nomes do rock no Brasil.
          Entre suas músicas destacam-se: Maluco Beleza, Eu Nasci Há 10 Mil Anos
          Atrás, Mosca na Sopa e Ouro de Tolo. Raul Santos Seixas nasceu em
          Salvador, Bahia, no dia 28 de junho de 1945.
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  img: {
    width: 330,
    height: 300,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#00FA9A',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom:20
  },
  rotulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0000',
    marginTop: 20,
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#008B8B50',
  },
  textoResumo: {
    fontSize: 20,
    color: '#48D1CC',
  },
});
