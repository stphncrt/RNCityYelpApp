import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const CityItem = (props) => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={props.func}>
        <Text style={styles.text}>{props.cityName} </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  text: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'ubuntu',
    fontSize: 20,
  },
  container: {
    backgroundColor: '#607d8b',
    margin: 5,
    borderRadius: 10,
  },
});
