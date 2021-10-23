import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function VidaLoka() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Vida Loka {'\n'} Parte 1</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/vidaloka.jpg')}
            />
            <Text style={estilo.rotulo}>Álbum: Vida Loka Parte 1</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/racionaisMcs.jpeg')}
            />
            <Text style={estilo.rotulo}>Banda: Racionais MC's</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/rap.jpg')}
            />
            <Text style={estilo.rotulo}>Gênero Musical: {'\n'} Rap</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Letra da Música: {'\n'} {'\n'} Vagabunda, queria atacar do malucão
          Usou meu nome, o pipoca abraçou Foi na porta da minha casa Lá botou
          pânico em todo mundo 3 hora da tarde E eu nem tava lá, vai vendo! É
          mas aí, Brown, oh, tem uns tipo de mulher, truta Que não dá nem pra
          comentar Eu nem sei quem é os maluco, isso que é foda Aí vamo atrás
          desse pipoca aí e já era Ir atrás de quem e aonde? Sei nem quem é,
          mano Mano, não devo, não temo e dá meu copo que já era E aí, bandido
          mal, como que é, meu parceiro? E aí, Abraão, firmão truta? Firmeza
          total, Brown e a quebrada aí, irmão? Tá pampa, aí fiquei sabendo do
          seu pai Aí, lamentável truta, meu sentimento mesmo, mano! Vai vendo,
          Brown, meu pai morreu E nem deixaram eu ir no enterro do meu coroa
          não, irmão Isso é louco, você tava aonde na hora? Tava batendo uma
          bola, meu, fiquei na mó neurose, irmão...
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
