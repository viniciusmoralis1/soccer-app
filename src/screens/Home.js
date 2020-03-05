import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

function Home(){

  return (
    <View style={styles.mainText}>
      <Text>
        Começando o aplicativo
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#000",
  },
  mainText: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  }
})

export default Home;