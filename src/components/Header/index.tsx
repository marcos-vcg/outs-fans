import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>OUTS fans</Text>
                
                <TouchableOpacity>
                    <Feather name="user" size={27} color="#fff"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333399',
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
})