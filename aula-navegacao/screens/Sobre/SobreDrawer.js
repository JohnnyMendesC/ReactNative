import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SobreDrawer() {
    
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <TouchableOpacity style={styles.botao} title="Home"
                >
                    <Text style={{ fontSize: 20 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} title="Contato"       >
                    <Text style={{ fontSize: 20 }}>Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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