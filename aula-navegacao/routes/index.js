import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawer from "../screens/Home/HomeDrawer";
import SobreDrawer from "../screens/Sobre/SobreDrawer";
import ContatoDrawer from "../screens/Contato/ContatoDrawer";
import CustomDrawer from "../components/CustomDrawer";

//"expo": "~52.0.3"
//    "expo": "~51.0.28",
// npx expo install expo-status-bar@~2.0.0 react@18.3.1 react-native@0.76.1 react-native-gesture-handler@~2.20.2 react-native-safe-area-context@4.12.0 react-native-screens@~4.0.0 react-native-reanimated@~3.16.1
export default function RoutesDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerActiveBackgroundColor: "#0088",
                drawerInactiveBackgroundColor: "gray",
                drawerActiveTintColor: "green",
                drawerInactiveTintColor: "#454",
                drawerStyle: {
                    backgroundColor: "#d9d9d9",
                    width: 250,

                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeDrawer} />
            <Drawer.Screen name="Sobre" component={SobreDrawer} />
            <Drawer.Screen name="Contato" component={ContatoDrawer} />
        </Drawer.Navigator>
        // npm install @react-navigation/drawer@^6.x

        // npx expo install react-native-gesture-handler react-native-reanimated
    )
}