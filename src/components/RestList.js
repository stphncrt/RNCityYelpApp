import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const RestList = (props) => {
  return (
    <TouchableOpacity onPress={props.nextPage}>
      <View style={styles.container}>
        <Text style={styles.text}> {props.Restaurant} </Text>
        <View style={styles.seperator} />
      </View>
    </TouchableOpacity>
  );
};

export default RestList;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ffe0b2',
    margin: 5,
  },
  text: {
    fontSize: 20,
    color: '#212121',
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: '#484848',
  },
});
