import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Sobre({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Tela Sobre</Text>
      <Text>{route.params?.nome ?? "Nome não inserido"}</Text>
      <Text>{route.params?.email ?? "Email não inserido"}</Text>
      <Text>
        {route.params?.nome} {route.params?.email}
      </Text>

      <TouchableOpacity
        title="Contato"
        onPress={() => navigation.navigate("Contato")}
        style={styles.botao}
      >
        <Text>Contato</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7a6b2",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfd891",
    padding: 8,
    backgroundColor: "#daf7a6",
  },
});