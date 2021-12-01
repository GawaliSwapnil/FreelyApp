import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
