import React, {useEffect, useState} from 'react';
import {StyleSheet, View, AppState} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PreLoader from './PreLoader';
var data = require('../trip-list.json');
import Screen from './Screen';
import Card from './Card';

const Trips = ({navigation}) => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#fff');

  setTimeout(() => {
    setLoading(false);
    setListing(data);
  }, 2000);

  useEffect(() => {
    AppState.addEventListener('change', handleChange);
  }, []);

  const handleChange = newState => {
    if (newState === 'active') {
      setColor('#C6FBF8');
    }
  };

  return (
    <>
      <PreLoader visible={loading} />
      <Screen>
        <FlatList
          data={listing}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({item}) => (
            <Card
              Name={item.name}
              startDate={item.startDate}
              endDate={item.endDate}
              status={item.status}
              bgColor={item.status === 'NOT_STARTED' ? color : '#fff'}
              onPress={() => navigation.navigate('TripDetails', {data: item})}
            />
          )}
        />
      </Screen>
    </>
  );
};

export default Trips;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: '#f8f4f4',
  },
});
