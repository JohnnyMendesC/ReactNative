import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import Message from './components/Message';


export default function App() {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      {show && <Message />}
      <Button 
      title={show ? "Fechar" : "Abrir"}
      onPress={() => setShow((prevState) => !prevState)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

