import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Text style={styles.headerText}>Voltar</Text>
        </View>
        <View style={styles.nav}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.nav}>
          <Text style={styles.headerText}>Detalhes</Text>
        </View>
        {/* <Button style={styles.button} title={"Voltar"} />
        <Button style={styles.button} title={"Home"} />
        <Button style={styles.button} title={"Detalhes"}></Button> */}
      </View>
    </View>
  )
}
//estilos incorporados:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  header: {
    height: "10%",
    backgroundColor: "#303030",
    flexDirection: "row",
    direction: "ltr",    
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  nav: {
    backgroundColor: "#303030",
    height: "50%",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    justifyContent: 'flex-end',
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "grey",
    flexDirection: "row",
    height: 50,
    width: 1,
    margin: 10,
  },
})