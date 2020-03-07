import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

function Home({ navigation }){
  const [dados, setDados] = useState(null);
  let tipo = "";

  async function loadData(tipo){
    let response = "";
    if (tipo == "ucl"){
      response = await(api.get('/ucl'));
    } else if (tipo == "uel"){
      response = await(api.get('/uel'));
    } else if (tipo == "bra"){
      response = await(api.get('/bra'));
    }
    setDados(response);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.textoPrincipal}>
          Selecione um campeonato para visualizar
        </Text>
      </View>
      <TouchableOpacity style={styles.botaoucl} onPress={() => {
          tipo = 'ucl';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.data});
        }}>
        <Text style={styles.text}>
          UEFA Champions League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaouel} onPress={() => {
          tipo = 'uel';
          loadData(tipo);
        }}>
        <Text style={styles.text}>
          UEFA Europa League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaobra} onPress={() => {
          tipo = 'bra';
          loadData(tipo);
        }}>
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