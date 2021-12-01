import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import TripNavigator from './TripNavigator';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarActiveBackgroundColor: '#000',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trips" component={TripNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
