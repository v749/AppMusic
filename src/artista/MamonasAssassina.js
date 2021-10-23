import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function MamonasAssassina() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Mamonas {'\n'} Assassina</Text>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/mamonasAssassina.jpg')}
            />
            <Text style={estilo.rotulo}>Banda Mamonas Assassina</Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/mamonasAssassina2.jpg')}
            />
            <Text style={estilo.rotulo}>
              Integrantes da banda Mamonas Assasina
            </Text>
          </View>

          <View>
            <Image
              resizeMode={'stretch'}
              style={estilo.img}
              source={require('../../assets/mamonasAssassina3.jpg')}
            />
            <Text style={estilo.rotulo}>Rock/Pop</Text>
          </View>
        </ScrollView>
      </View>

      <View style={estilo.resumo}>
        <Text style={estilo.textoResumo}>
          Quem foi o grupo Mamonas Assassinas? A história da banda com o nome
          Mamonas Assassinas começou em 1989 quando ainda era a Utopia. Na
          formação estavam Bento Hinoto e os irmãos Samuel e Sérgio Reoli. Em
          1990 Dinho se juntaria e Júlio Rasec seria o último a integrar a trupe
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
