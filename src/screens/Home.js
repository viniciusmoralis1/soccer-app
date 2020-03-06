import React from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';

function Home(){

  return (
    <View style={styles.container}>
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
  botaoucl: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#EEE",
  },
  botaouel: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  botaobra: {
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#EEE",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#111",
  },  
});

export default Home;