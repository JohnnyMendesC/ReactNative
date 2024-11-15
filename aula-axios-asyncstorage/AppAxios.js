import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import api from './service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppAxios() {
    const [cep, setCep] = useState("");

    const [cepUser, setCepUser] = useState("");

    const inputRef = useRef();

    const limparCep = () => {
        setCep("");
        setCepUser("");
        inputRef.current.focus();
    };

    const buscar = async () => {
        if (cep.length !== 8) {
            Alert.alert("O cep deve conter 8 dígitos")
            inputRef.current.focus();
            return;
        }
        try {
            const response = await api.get(`/${cep}/json`)
            if (response.data.erro) {
                setCepUser({});
                Alert.alert("Cep não encontrado");
                Keyboard.dismiss();
                inputRef.current.focus();
                return;
            }
            await AsyncStorage.setItem("@lastCep", cep)
            inputRef.current.focus();
            setCepUser(response.data);
        } catch (error) {
            console.log("Error" + error);
        }
    };

    useEffect(() => {
        async function loadData() {
            const dadoCep = await AsyncStorage.getItem("@lastCep");
            setCep(dadoCep);
        }
        loadData();
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 25600123"
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    keyboardType='numeric'
                    ref={inputRef}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Teste focus voltar ao 1° input ao limpar"
                    onChangeText={(texto) => setCep(texto)}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.areaBtn}>
                <TouchableOpacity
                    onPress={buscar}
                    style={[styles.botao, { backgroundColor: "#6bb" }]}>
                    <Text style={styles.botaoText}>Buscar CEP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={limparCep}
                    style={[styles.botao, { backgroundColor: "#f12f12" }]}>
                    <Text style={styles.botaoText}>Limpar</Text>
                </TouchableOpacity>
            </View>

            {cepUser ? (
                <View style={styles.resultado}>
                    <Text style={styles.itemText}>Cep:{cepUser.cep}</Text>
                    <Text style={styles.itemText}>UF:{cepUser.uf}</Text>
                    <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
                    <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
                    <Text style={styles.itemText}>Rua:{cepUser.logradouro}</Text>
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
        fontSize: 22,
    },
});