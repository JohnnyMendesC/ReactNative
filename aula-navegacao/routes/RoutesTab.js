import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../screens/Home/HomeTab';
import SobreTab from '../screens/Sobre/SobreTab';
import ContatoTab from '../screens/Contato/ContatoTab';
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#daf7a6",
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "#889a68",
        tabBarInactiveTintColor: "#1b1f15",
        tabBarShowLabel: true,
      }}
    >
      {/* TELA HOME */}
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />
          }
        }}
      />

      {/* TELA SOBRE */}
      <Tab.Screen
        name="Sobre"
        component={SobreTab}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file-text" color={color} size={size} />
          }
        }}
      />

      {/* TELA CONTATOS */}
      <Tab.Screen
        name="Contato"
        component={ContatoTab}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="phone" color={color} size={size} />
          }
        }}
      />

    </Tab.Navigator >
  )
}