import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Resultado from './Resultado'
import { useState } from 'react';
import styles from './style';


export default function Form() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(0);
    const [mensagemImc, setMensagemImc] = useState("Preencha o peso e a altura");
    const [mensagemOMS, setMensagemOMS] = useState("");
    const [textButton, setTextButton] = useState("Calcular");

    function calcular() {
        const imcVar = ((peso / (altura * altura)).toFixed(2));
        setImc(imcVar);
        if (peso > 0 && altura > 0) {
            if (imcVar < 18.5) {
                setMensagemOMS('Baixo peso')
            } else if (imcVar <= 24.9) {
                setMensagemOMS('Peso adequado')
            } else if (imcVar <= 29.9) {
                setMensagemOMS('Sobrepeso')
            } else if (imcVar <= 34.9) {
                setMensagemOMS('Obesidade grau 1')
            } else if (imcVar <= 39.9) {
                setMensagemOMS('Obesidade grau 2')
            } else {
                setMensagemOMS('Obesidade extrema')
            }
        } else {
            setMensagemOMS('Preencha os campos')
        }
        return imcVar, setAltura(""), setPeso("")
    };

    function validarImc() {
        if (peso > 0 && altura > 0) {
            calcular();
            setPeso("");
            setAltura("");
            setMensagemImc("O seu valor de IMC é:");
            setTextButton("Novo calculo");
            return;
        } else {
            setImc(0);
            setMensagemImc("Preencha o peso e a altura");
            setTextButton("Calcular");
        }

    };

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.label}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.: 1.68'
                    keyboardType='numeric'
                    onChangeText={(text) => setAltura(text)}
                    value={altura.toString()}
                />
                <Text style={styles.label}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.: 55.00'
                    keyboardType='numeric'
                    onChangeText={(text) => setPeso(text)}
                    value={peso.toString()}
                />
                <TouchableOpacity
                    style={styles.calculator}
                    title={textButton}
                    onPress={validarImc}
                >
                    <Text style={styles.calculatorText}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <Resultado
                mensagemResultado={mensagemImc}
                resultadoImc={imc}
                resultadoOMS={mensagemOMS}
            />
        </View>
    )
}