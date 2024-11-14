import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useRef, useState } from 'react'
import api from './service/api';

export default function AppAxios() {
    const [cep, setCep] = useState("");

    const[cepUser, setCepUser] = useState({});

    const inputRef = useRef();

    const limparCep = () => {
        setCep("");
        inputRef.current.focus();
    };

    const buscar = async () => {
        if (cep.length !== 8) {
            Alert.alert("O cep deve conter 8 dígitos")
            return;
        }
        try {
            const response = await api.get(`/${cep}/json`)
            if (response.data.error){
                setCepUser({});
                Alert.alert("Cep não encontrado");
                Keyboard.dismiss();
            }
            setCepUser(response.data);
        } catch (error) {
            console.log ("Error" + error);
        }
    };
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
                    placeholder=""
                    value={cep}
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

            <View style={styles.resultado}>
                <Text style={styles.itemText}>Cep:{cepUser.cep}</Text>
                <Text style={styles.itemText}>UF:{cepUser.uf}</Text>
                <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
                <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
                <Text style={styles.itemText}>Rua:{cepUser.logradouro}</Text>
            </View>
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
    },
    itemText: {
        fontSize: 22,
    },
});