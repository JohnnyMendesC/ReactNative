import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");

  async function gravarNome() {
    //a key geralmente vai com @ e depois o input
    await AsyncStorage.setItem('@chaveNome', input);
    setNome(input);
  }
  async function removerNome() {
    await AsyncStorage.removeItem("@chaveNome");
    setNome("");
  }

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@chaveNome").then((value) => {
        setNome(value);
      })
    }
    loadData();
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.viewInput}>
        <TextInput
          value={input}
          onChangeText={(texto) => setInput(texto)}
          style={styles.input}
          placeholder='Insira seu nome'
        />
      </View>
      <View style={styles.viewInput}>
        <TouchableOpacity style={styles.botao} onPress={gravarNome}>
          <Text>Adicionar Nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={removerNome}>
          <Text>Remover Nome</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome ? nome: "Nenhum nome salvo"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#f12f12",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
    marginTop:10,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});

