import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const PreLoader = ({visible = false}) => {
  if (visible == false) return null;
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default PreLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
