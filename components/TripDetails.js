import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Screen from './Screen';

const TripDetails = props => {
  const {name, destinations} = props.route.params.data;
  return (
    <Screen>
      <View style={styles.MainContainer}>
        <Text style={styles.Title}>{name}</Text>
        {destinations.map((item, key) => (
          <Text key={key} style={styles.TextStyle}>
            {' '}
            {item}{' '}
          </Text>
        ))}
        <View style={styles.MainContainer}></View>
      </View>
    </Screen>
  );
};

export default TripDetails;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
  Title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
