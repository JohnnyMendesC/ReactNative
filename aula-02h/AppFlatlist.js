import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function App() {
  const dadosAlunos = [
    { matricula: 112, nome: "Maria" },
    { matricula: 121, nome: "Jose" },
    { matricula: 133, nome: "Ana" },
    { matricula: 124, nome: "Mauricio" },
    { matricula: 115, nome: "Flavia" },
    { matricula: 126, nome: "Alberto" },
  ];
  const funcaoRenderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.nome}</Text>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dadosAlunos}
        renderItem={funcaoRenderItem}
        keyExtractor={(item) => item.matricula}
      >
        a
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "#373e2a",
  },
  item: {
    backgroundColor: "#a6f7eb",
    padding: 20,
    marginVertical: 50,
    marginHorizontal: 16,
  },
})