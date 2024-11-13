import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, FlatList } from 'react-native'

export default function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonPress = (item) => {
    setData([...data, { key: inputText }]);
    setInputText("");//para a caixinha ficar vazia depois
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Button
        title="Adicionar"
        onPress={handleButtonPress}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d9d9d9",
  },
  input: {
    height: 40,
    backgroundColor:"#121212",
    color: "#eeeeee",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  }
})