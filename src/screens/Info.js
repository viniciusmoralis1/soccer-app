import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

function Info({ navigation }){
  const dados = navigation.getParam('dados');

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
          <Text style={styles.textoPrincipal}>
            {item.name}
          </Text>
          <View style={styles.itemContainer}>
            <Text style={styles.textoComplemento}>
              {item.venue ? item.venue : 'Nâo tem o estádio especificado'}
            </Text>
            <Text style={styles.textoComplemento}>
              {item.founded ? item.founded : 'Não tem o ano de fundação especificado'}
            </Text>
            <Text style={styles.textoComplemento}>
              {item.website ? item.website : 'Não tem website especificado'}
            </Text>
          </View>
          </>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: "#EEEEEE"
  },
  textoPrincipal: {
    fontSize: 19,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F1F1F1"
  },
  textoComplemento: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 8,
    color: "#999",
  },
});

export default Info;