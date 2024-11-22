import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function UsuariosList({ data }) {
    return (
        <View style={styles.container}>
            <Text>Nome: {data.nome}</Text>
            <Text>Email: {data.email}</Text>
            <Text>Cargo: {data.cargo}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: "cyan",
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    }
})