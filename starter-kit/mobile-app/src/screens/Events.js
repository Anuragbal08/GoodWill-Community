import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const EventsScreen = props => {
  return (
    <View style = {styles.screen}>
      <Text> Hello from Event Screen</Text>
    </View>
  );
};

export default EventsScreen;
