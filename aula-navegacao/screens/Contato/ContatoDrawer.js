import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';


export default function ContatoDrawer() {

  const [exibirModal, setExibirModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
          <Text style={{title}}>Tela de Contato</Text>
        <TouchableOpacity style={styles.button} onPress={() => setExibirModal(true)}        >
          <Text style={{fontSize:20}}>Abrir</Text>
        </TouchableOpacity>
        <Modal visible={exibirModal} onRequestClose={()=>setExibirModal(false)} transparent={true}>
            <Text>Teste Modal</Text>
          </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#889a68",
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: "#121318",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});