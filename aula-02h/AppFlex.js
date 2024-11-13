import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex:1, backgroundColor: "#121212" }}>
      <View style={{  flex:0.2, backgroundColor: "cyan" }}>
        <ScrollView>
        <Text>Hello</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>oooo</Text>
        <Text>ooow</Text>
        <Text>wwww</Text>
        </ScrollView>
      </View>
      <View style={{  flex:0.2, backgroundColor: "pink" }}>
        <Text>WWWW</Text>
      </View>
      <View style={{  flex:0.2, backgroundColor: "white" }}>
        <Text>WWWW</Text>
      </View>
      <View style={{  flex:0.2, backgroundColor: "pink" }}>
        <Text>WWWW</Text>
      </View>
      <View style={{  flex:0.2, backgroundColor: "cyan" }}>
        <Text>World!</Text>
      </View>
    </View>
  );
}
