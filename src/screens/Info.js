import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

function Info({ navigation }){

  const dados = navigation.getParam('dados')
  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
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