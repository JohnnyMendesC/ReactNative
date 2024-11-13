import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/HomeStack';
import Sobre from '../screens/Sobre/SobreStack';
import Contato from '../screens/Contato/ContatoStack';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* TELA HOME */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela de Início",
          headerStyle: {
            backgroundColor: "#333333",
          },
          headerTintColor: "#eeeeee",
        }}
        />

        {/* TELA SOBRE */}
      <Stack.Screen name="Sobre" component={Sobre} />

        {/* TELA CONTATOS */}
      <Stack.Screen name="Contato" component={Contato} />

    </Stack.Navigator>
  )
}