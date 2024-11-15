import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Exemplo() {
    const [nome, setNome] = useState("Mendes");
    const [idade, setIdade] = useState(25);
    const [contador, setContador] = useState(0);

    //mais de uma linha {}
    const handleModificar = () => {
        setNome("Carmo")
        setIdade(24)
    };

    //uma unica linha ()
    const incrementar = () => setContador(contador + 1);

    return (
        <View>
            <Button
                title="Alterar Nome" onPress={handleModificar}
            />

            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>

            <TouchableOpacity style={styles.button} onPress={incrementar}>
                <Text style={styles.text}>Incrementar</Text>
            </TouchableOpacity>
                <Text style={styles.text}>{contador}</Text>

            <TextInput keyboardType='numeric' placeholder='Preencha o número' placeholderTextColor={'green'} style={styles.input} />
        </View>
    )
}

export const styles = StyleSheet.create({

    container: {
        display: "flex",
        backgroundColor: "#000",
        alignItens: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 30,
        color: "#000000",
        textAlign: "center"
    },

    button: {
        backgroundColor: "blue",

    },

    input: {
        backgroundColor: "#121212",
        color: "yellow",
        fontSize: 20,
    }
});