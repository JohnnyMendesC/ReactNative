import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef, useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from './service/api';

export default function App() {
  const [cnpj, setCnpj] = useState("");

  const [cnpjUser, setCnpjUser] = useState("");

  const inputRef = useRef();

  const limpar = () => {
    setCnpj("");
    setCnpjUser("");
    inputRef.current.focus();
  };

  const buscar = async () => {
    if (cnpj.length !== 14) {
      Alert.alert("O CNPJ deve conter 14 dígitos")
      inputRef.current.focus();
      return;
    }
    try {
      const response = await api.get(`/${cnpj}/`)
      if (response.data.erro) {
        setCnpjUser({});
        Alert.alert("Cnpj não encontrado");
        Keyboard.dismiss();
        inputRef.current.focus();
        return;
      }
      await AsyncStorage.setItem("@lastCnpj", cnpj)
      inputRef.current.focus();
      setCnpjUser(response.data);
    } catch (error) {
        console.log("Error"+error);
    }
  };

  useEffect(() => {
    async function loadData() {
      const dadoCnpj = await AsyncStorage.getItem("@lastCnpj");
      setCnpj(dadoCnpj);
    }
    loadData();
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TextInput
          style={styles.input}
          placeholder="Ex. 22228888777733"
          value={cnpj}
          onChangeText={(texto) => setCnpj(texto)}
          keyboardType='default'
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.botao, { backgroundColor: "#6bb" }]}>
          <Text style={styles.botaoText}>Buscar CNPJ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limpar}
          style={[styles.botao, { backgroundColor: "#f12f12" }]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cnpjUser ? (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CNPJ:{cnpjUser.cnpj}</Text>
          <Text style={styles.itemText}>Nome:{cnpjUser.nome}</Text>
          <Text style={styles.itemText}>NJ:{cnpjUser.natureza_juridica}</Text>
          <Text style={styles.itemText}>UF:{cnpjUser.uf}</Text>
          <Text style={styles.itemText}>Abertura:{cnpjUser.abertura}</Text>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
    marginTop: 50,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "space-evenly"
  },
  textoResultado: {
    flexDirection: "row"
  },
  itemText: {
    fontSize: 15,
    textAlign:'center'
  },
});