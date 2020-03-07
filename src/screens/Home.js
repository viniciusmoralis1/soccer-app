import React from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';

function Home(){

  return (
    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.textoPrincipal}>
          Selecione um campeonato para visualizar
        </Text>
      </View>
      <TouchableOpacity style={styles.botaoucl}>
        <Text style={styles.text}>
          UEFA Champions League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaouel}>
        <Text style={styles.text}>
          UEFA Europa League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaobra}>
        <Text style={styles.text}>
          Campeonato Brasileiro Serie A
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    backgroundColor: "#F3F3F3",
    flex: 1,
  },
  containerTexto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  textoPrincipal: {
    fontSize: 19,

  },
  botaoucl: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

  },
  botaouel: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

  },
  botaobra: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,

  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#111",
  },  
});

export default Home;