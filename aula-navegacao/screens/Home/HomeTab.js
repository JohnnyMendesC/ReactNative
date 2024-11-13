import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeTab() {

    const navigation = useNavigation();

    function navigationSobre() {
        // para passar informações para outra pagina, igual os props de componentes em web
        navigation.navigate("Sobre")
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text></Text>
            <TouchableOpacity
                title="Sobre"
                onPress={navigationSobre}
                style={styles.botao}
            >
                <Text>Sobre</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Contato"
                onPress={() => navigation.navigate("Contato")}
                style={styles.botao}
            >
                <Text>Contato</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7a6b2",
        alignItems: "center",
        justifyContent: "center",
    },
    botao: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfd891",
        padding: 8,
        backgroundColor: "#daf7a6",
    },
});