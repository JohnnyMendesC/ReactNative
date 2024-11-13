import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

export default function Contato() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Contato</Text>
            <TouchableOpacity
                title="Home"
                onPress={() => navigation.dispatch(StackActions.popToTop)}
                style={styles.botao}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7a6b2",
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
      borderStyle: "solid", 
      borderWidth: 1, 
      borderColor: "#bfd891",
      padding: 8,
      backgroundColor: "#daf7a6",
    },
})