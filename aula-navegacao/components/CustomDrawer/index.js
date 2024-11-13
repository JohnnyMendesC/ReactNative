import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView>
            <View style={styles.container}>
                <Image source={require("../../assets/perfil.png")} style={{ width: 65, height:65 }} />
                <Text style={styles.text}>Boas vindas ao APP</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 85,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: "#121212"
    },
});