import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

const Card = ({
  Name,
  startDate,
  endDate,
  destinations,
  status,
  onPress,
  bgColor,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, {backgroundColor: {bgColor}}]}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLine={1}>
            {Name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.alignLeft}>{startDate}</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.alignRight}>{endDate}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: '#4ecdc4',
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
  alignLeft: {
    justifyContent: 'flex-start',
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
  status: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    color: '#4ecdc4',
    fontWeight: 'bold',
  },
});
