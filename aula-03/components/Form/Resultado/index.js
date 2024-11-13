import { View, Text } from 'react-native'
import React from 'react'
import styles from '../style';

export default function Resultado(props) {
    return (
        <View>
            <Text style={{ color: "red", fontSize: 20 }}>{props.mensagemResultado}</Text>
            <Text style={{ color: "#889a68", fontSize: 30 }}>{props.resultadoImc}</Text>
            <Text style={{ color: "#889a68", fontSize: 10 }}>{props.resultadoOMS}</Text>
        </View>
    )
}