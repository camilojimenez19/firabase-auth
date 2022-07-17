import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {

    return (
        <KeyboardAvoidingView
            style={ styles.container }
            behavior="padding"
        >
            <View>

            </View>
            <Text>HomeScreen</Text>
        </KeyboardAvoidingView>

    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red'
    }
})