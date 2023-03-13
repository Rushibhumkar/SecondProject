import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainFile from './MainFile'
import OngoingData from '../components/OngoingData'
import MoreInfo from '../components/MoreInfo'

const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: '#5D5FEF' }, tabBarStyle: { backgroundColor: '#5D5FEF' }, headerTitleAlign: 'center' }}
        >
            <Stack.Screen name="MainFile" component={MainFile} />
            {/* <Stack.Screen name="OngoingData" component={OngoingData} /> */}
            <Stack.Screen name="MoreInfo" component={MoreInfo} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})