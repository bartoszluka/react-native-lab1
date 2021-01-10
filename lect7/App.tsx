import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const addingMessagesToConsoleHandler = (message: string) => {
    console.log(`Message reads: ${message}`);
  }

  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
      <Button title="Press me" onPress={() => addingMessagesToConsoleHandler('Test message') } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
