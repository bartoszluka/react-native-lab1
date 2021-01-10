import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  function ScreenOne({ navigation }) {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Screen Two"
          onPress={() => navigation.navigate('Screen Two')}
        />
      </View>
    );
  }

  function ScreenTwo({ navigation }) {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Screen One"
          onPress={() => navigation.navigate('Screen One')}
        />
      </View>
    );
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen One">
        <Stack.Screen name="Screen One" component={ScreenOne} />
        <Stack.Screen name="Screen Two" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 20
  }
});
