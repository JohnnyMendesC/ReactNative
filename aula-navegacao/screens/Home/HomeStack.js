import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  function navigationSobre() {
    // para passar informações para outra pagina, igual os props de componentes em web
    navigation.navigate("Sobre", { nome: undefined, email: undefined })
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