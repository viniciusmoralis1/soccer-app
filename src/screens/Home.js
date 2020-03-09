import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
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
      <TouchableOpacity style={styles.botaoSelecionar} onPress={() => {
          tipo = 'ucl';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.teams});
        }}>
        <Image
          style={styles.icones}
          source={require('../../assets/champions.png')}
        />
        <Text style={styles.text}>
          UEFA Champions League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoSelecionar} onPress={() => {
          tipo = 'plp';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.teams});
        }}>
        <Image
          style={styles.icones}
          source={require('../../assets/primeira-liga.jpg')}
        />
        <Text style={styles.text}>
          Primeira Liga de Portugal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoSelecionar} onPress={() => {
          tipo = 'prl';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.teams});
        }}>
        <Image
          style={styles.icones}
          source={require('../../assets/premier-league.png')}
        />
        <Text style={styles.text}>
          Premier League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoSelecionar} onPress={() => {
          tipo = 'lls';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.teams});
        }}>
        <Image
          style={styles.icones}
          source={require('../../assets/la-liga.jpg')}
        />
        <Text style={styles.text}>
          La Liga Santander
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoSelecionar} onPress={() => {
          tipo = 'bra';
          loadData(tipo);
          navigation.navigate('Info', {dados: dados.teams});
        }}>
        <Image
          style={styles.icones}
          source={require('../../assets/brasileirao.png')}
        />
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
    backgroundColor: "#FCFCFC",
    flex: 1,
  },
  containerTexto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  textoPrincipal: {
    marginTop: 10,
    fontSize: 20,
  },
  botaoSelecionar: {
    flexDirection: 'row',
    height: 70,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#6E6968",
  },
  icones: {
    width: 50,
    height: 50,
    marginRight: 22,
  },
});

export default Home;