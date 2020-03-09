import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import api from '../services/api';

function Home({ navigation }){
  const [dados, setDados] = useState([]);
  let tipo = "";

  async function loadData(tipo){
    let response = "";
    if (tipo == "ucl"){
      response = await(api.get('/ucl'));
    } else if (tipo == "plp"){
      response = await(api.get('/plp'));
    } else if (tipo == "prl"){
      response = await(api.get('/prl'));
    } else if (tipo == "lls"){
      response = await(api.get('/lls'));
    } else if (tipo == "bra"){
      response = await(api.get('/bra'));
    }
    setDados(JSON.parse(response.data));
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
          navigation.navigate('Info', {dados: dados});
        }}>
        <Text style={styles.text}>
          UEFA Champions League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaouel} onPress={() => {
          tipo = 'plp';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados});
        }}>
        <Text style={styles.text}>
          Primeira Liga de Portugal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaouel} onPress={() => {
          tipo = 'prl';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados});
        }}>
        <Text style={styles.text}>
          Premier League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaouel} onPress={() => {
          tipo = 'lls';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados});
        }}>
        <Text style={styles.text}>
          La Liga Santander
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaobra} onPress={() => {
          tipo = 'bra';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados});
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