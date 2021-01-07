import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, StyleSheet} from 'react-native';

const LoginScreen = ({navigation}) => (
  <SafeAreaView
    style={styles.container}>
    <Text style={styles.boldText}>Screen: Login</Text>
    <TouchableHighlight
      onPress={() => navigation.navigate('Home')}
      style={styles.goToHomebutton}>
      <Text style={[styles.goToHomeText, styles.boldText]}>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  goToHomebutton: {
    backgroundColor: '#68a0cf',
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  goToHomeText: {
    color: 'white'
  },
  boldText: {
    fontWeight: 'bold'
  },
});
