import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function ZeRamalho() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Zé {'\n'} Remalho</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/zeRamalho.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor Zé Ramalho</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/zeRamalho2.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor e compositor Zé Ramalho</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/zeRamalho3.jpg')}
            />
            <Text style={estilo.rotulo}>MPB</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Zé Ramalho (1949) é um cantor e compositor brasileiro, uma das grandes
          vozes da geração nordestina dos anos 70. José Ramalho Neto nasceu em
          Brejo da Cruz, Paraíba, no dia 3 de outubro de 1944. Filho de Antônio
          De Pádua Ramalho, um seresteiro, e de Estelita Torres Ramalho,
          professora primária.
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
