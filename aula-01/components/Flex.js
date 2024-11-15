//rnfs para criar a 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flex() {
    return (
        <View style={{ flex: 1, backgroundColor: "#505050" }}>
            <View style={{ backgroundColor: "yellow", width: 50, height: 40 }}>
                <Text>oi</Text>
                <Text>oi</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})