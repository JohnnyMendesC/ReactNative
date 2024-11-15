import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo from './components/Exemplo';
import Flex from './components/Flex';

export default function App() {
  return (
    <View>
      {/* <StatusBar />
      <Text>View</Text>
      <Text style={{color:'red', fontSize:30}}>Hello World!</Text>
      <Exemplo /> */}
      <Flex />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
