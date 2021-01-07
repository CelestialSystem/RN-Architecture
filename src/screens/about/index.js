import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const AboutScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.boldText}>About Screen</Text>
  </SafeAreaView>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
});