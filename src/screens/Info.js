import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Info({ navigation }){
  
  const dados = navigation.getParam('dados')

  console.log(dados);

  return (
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>
        {dados}
      </Text>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    backgroundColor: "#F3F3F3",
    flex: 1,
  },
  textoPrincipal: {
    fontSize: 19,

  },
});

export default Info;