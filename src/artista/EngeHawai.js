import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function EngenheiroHawai() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Engenheiros do {'\n'} Hawai</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/engeHawai.jpg')}
            />
            <Text style={estilo.rotulo}>Banda Engenheiros do Hawai</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/engeHawai2.jpg')}
            />
            <Text style={estilo.rotulo}>Integrantes da banda Engenheiros do Hawai</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/engeHawai3.jpg')}
            />
            <Text style={estilo.rotulo}>Rock and Roll</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          O que significa Engenheiro do Hawaii? Escolheram o nome Engenheiros do
          Hawaii para satirizar os estudantes de engenharia que andavam com
          bermudas de surfista, com quem tinham uma certa rivalidade. ... Meses
          passaram, e os Engenheiros do Hawaii gravam o seu primeiro álbum:
          Longe Demais das Capitais, em 1986.
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
    color:'#FF0000',
    marginTop: 20,
    fontSize: 20,
  },
  resumo:{
    marginTop:20,
    marginHorizontal:10,
    borderRadius:10,
    backgroundColor:'#008B8B50',
    
  },
  textoResumo:{
    fontSize:20,
    color:'#48D1CC',
    
  },
});
