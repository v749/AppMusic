import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function CoracaoMac() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Coração {'\n'} Machucado</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/coracaoMachucado.jpg')}
            />
            <Text style={estilo.rotulo}>Álbum: Coração Machucado</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/cantorWS.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor: Wesley Safadão</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/forro.jpg')}
            />
            <Text style={estilo.rotulo}>Gênero Musical: {'\n'} Forró</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Letra da Música: {'\n'} {'\n'} Não 'to a fim de relacionamento sério Porque já estou vindo de um bem
          complicado Esse lance de amar por enquanto eu não quero Meu coração
          ainda está tão machucado Mas isso não quer dizer que a gente não fique
          Em uma balada no fim de semana Depois de uns beijos e doses de uísque
          A gente se entregue e acabe na cama É porque quando alguém quebra a
          cara no amor Fica tão assustado com a dor Feito animal ferido com
          medo...
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
