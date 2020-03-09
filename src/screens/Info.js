import React, {useState} from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

function Info({ navigation }){
  const [times, setTimes] = useState([]);  

  async function lerDados(){
    const dados = await(navigation.getParam('dados'));    
    console.log("TIMES");
    setTimes(dados.teams);
    console.log(times);
  }
  lerDados();

  return (
    <View style={styles.container}>
      <FlatList
        data={times}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Text style={styles.textoPrincipal}>
              {item.name}
            </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    backgroundColor: "#F3F3F3",
    flex: 1,
  },
  itemContainer: {
    height: 35,
    flexDirection: 'row'
  },
  textoPrincipal: {
    fontSize: 19,
    padding: 15,
    backgroundColor: "#EEE"
  },
});

export default Info;