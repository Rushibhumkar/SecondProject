import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainFile from './src/Main/MainFile';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.cont}>
        <Text style={styles.text}>Booking Details</Text>
      </View>
      <MainFile />
      {/* <History/> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5D5FEF',
    width: '100%',
    height: 60,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
