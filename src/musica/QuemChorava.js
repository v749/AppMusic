import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function QuemChorava() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Quem Chorava {'\n'} Hoje Ri</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/quemChorava.jpg')}
            />
            <Text style={estilo.rotulo}>Ábum: Quem Chorava {'\n'} Hoje Ri</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/cantorWesley.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor: Wesley Safadão</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/generoForro.jpg')}
            />
            <Text style={estilo.rotulo}>Gênero: Forró</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Letra da Música: {'\n'} {'\n'} Alguém me disse que você falou (você
          falou) Que se deu mal e que nunca pensou Que eu ia fazer tanta falta
          assim 'Tava bebendo e só falava em mim Tentei demais e você não deixou
          Me expulsou e me mandou sumir Trocou o certo pelo duvidoso Coração
          teimoso só dá nisso aí Tentei demais e você não deixou Me expulsou e
          me mandou sumir Trocou o certo pelo duvidoso Coração teimoso só dá
          nisso aí...
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
