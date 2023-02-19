import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cancelled from '../components/Cancelled';
import Ongoing from '../components/Ongoing';
import Completed from '../components/Completed';
import Recent from '../components/Recent'
// import { TabBarIndicator } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

const MainFile = () => {
  return (
      <Tab.Navigator
        screenOptions={{tabBarIndicatorContainerStyle:{columnGap:1}}}
      >
        {/* <Tab.Screen name="Recent" component={Recent} /> */}
        <Tab.Screen name="Ongoing" component={Ongoing} />
        <Tab.Screen name="Cancelled" component={Cancelled} />
        <Tab.Screen name="Completed" component={Completed} />
      </Tab.Navigator>
  )
}

export default MainFile

const styles = StyleSheet.create({})
