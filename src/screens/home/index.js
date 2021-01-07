
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.boldText}>Home Screen</Text>
  </SafeAreaView>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
});