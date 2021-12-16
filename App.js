
import React from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentScreen from './src/screens/ComponentScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer >
    <Stack.Navigator initialRouteName="Component">
      <Stack.Screen name="Home"  style={styles.container} component={HomeScreen} />
      <Stack.Screen name="Component"  style={styles.container} component={ComponentScreen} />

    </Stack.Navigator>
  </NavigationContainer>
    
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
