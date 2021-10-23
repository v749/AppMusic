import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function OSegundoSol() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>O Segundo {'\n'} Sol</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/oSegundoSol.jpg')}
            />
            <Text style={estilo.rotulo}>Álbum: O Segundo Sol</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/cassiaEller.jpg')}
            />
            <Text style={estilo.rotulo}>Cantora: Cássia Eller </Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/generoRockPop.jpeg')}
            />
            <Text style={estilo.rotulo}>Gênero Musical: {'\n'} Rock/Pop</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Letra da música: {'\n'} {'\n'} Quando o segundo sol chegar Quando o
          segundo sol chegar Quando o segundo sol chegar Para realinhar as
          órbitas dos planetas Derrubando com assombro exemplar O que os
          astrônomos diriam se tratar De um outro cometa Quando o segundo sol
          chegar Para realinhar as órbitas dos planetas Derrubando com assombro
          exemplar O que os astrônomos diriam se tratar De um outro cometa...
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
    marginTop: 30,
    marginBottom: 20,
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
