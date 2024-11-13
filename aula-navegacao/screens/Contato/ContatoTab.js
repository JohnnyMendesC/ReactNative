import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";


export default function ContatoTab() {
  const navigation = useNavigation();

  function navigationHome() {
    navigation.navigate("Home");
  }
  function navigationSobre() {
    navigation.navigate("Sobre");
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity style={styles.botao} title="Home" onPress={navigationHome}
        >
          <Text style={{fontSize:20}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} title="Sobre" onPress={navigationSobre}        >
          <Text style={{fontSize:20}}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7a6b2",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: "#889a68",
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  botao: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfd891",
    padding: 8,
    backgroundColor: "#daf7a6",
  },
})