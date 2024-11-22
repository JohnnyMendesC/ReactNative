import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation='bounce'
        //iterationCount={5}
        iterationCount={Infinity}
        duration={5000}>Teste de Animação
      </Animatable.Text>
      <ButtonAnimated animation="fadeInUp" style={styles.button}>
        <Text>TESTE COM TOUCHABLE OPACITY CRIADO COMO VARIAVEL DE BUTTON POIS ANIMATED SO ACEITA BUTTON</Text>
      </ButtonAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    color:"#FFF",
    backgroundColor:"black",
    width:"80%",
    height:30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  texto: {
    fontSize: 28,
  },
})