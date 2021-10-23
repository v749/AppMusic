import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function TempoPerdido() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Tempo Perdido</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/tempoPerdido.jpg')}
            />
            <Text style={estilo.rotulo}>Álbum: Tempo Perdido</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/cantorRenato.jpg')}
            />
            <Text style={estilo.rotulo}>Cantor: Renato Russo</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/rockPop.jpg')}
            />
            <Text style={estilo.rotulo}>Gênero Musical: {'\n'} Rock/Pop</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Letra da Música: {'\n'} {'\n'} Eu lembro do cheirinho quando você
          nasceu Ainda tenho a roupinha que você vestiu De cada mamada Os seus
          olhos procurando os meus Das madrugadas em claro só você e eu Tempo
          que eu nem vi passar Tempo vai com calma Que todo tempo é pouco O
          tempo vale ouro Com você Eu vi despertar As coisas da alma E eu só
          queria mais mil anos Pra viver seu primeiro ano Outra vez...
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
