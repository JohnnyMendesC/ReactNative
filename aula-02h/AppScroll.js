import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.text}>Exemplo1</Text>
        <Text style={styles.text}>Exemplo2</Text>
        <Text style={styles.text}>Exemplo3</Text>
        <Text style={styles.text}>Exemplo4</Text>
        <Text style={styles.text}>Exemplo5</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a6f7d7",
  },

  text: {
    color: "#f7a6b2",
    fontSize: 28,
    padding: 20,
    marginTop: 40,
  },

  scroll: {
    backgroundColor: "#DAF7A6",
    height: 130,
  },

})