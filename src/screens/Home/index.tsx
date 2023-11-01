import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import React from 'react';

export function Home() {
    return (
        <View style={styles.mainView}>
            <Header />
            
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo ao Outs Fans</Text>

                <TouchableOpacity>
                    <Feather name="home" size={27} color="blue"></Feather>
                </TouchableOpacity>
                
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    header: {

    }
});