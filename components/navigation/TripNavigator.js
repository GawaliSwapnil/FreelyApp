import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Trips from '../Trips';
import TripDetails from '../TripDetails';

const Stack = createStackNavigator();

const TripNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, presentation: 'card'}}>
    <Stack.Screen name="Listings" component={Trips} />
    <Stack.Screen name="TripDetails" component={TripDetails} />
  </Stack.Navigator>
);

export default TripNavigator;
