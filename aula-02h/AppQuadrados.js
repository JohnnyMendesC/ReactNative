import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
            {/*estilo.incorporado {estilo inline} */}
      <View style={[styles.box, {alignSelf:"flex-end"}]}></View>
      <View style={styles.box}></View>
      <View style={[styles.box, {alignSelf:"center"}]}></View>

      {/* O estilo inline tem prioridade sobre o estilo incorporado */}
    </View>
  )
}
//estilos incorporados:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  box: {
    //flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "gray",
    margin: 10,
  },
})