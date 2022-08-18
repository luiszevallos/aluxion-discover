import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  const options = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerMode: 'float',
  };
  return (
    <Stack.Navigator screenOptions={options} animation="fade">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={DetailsScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
