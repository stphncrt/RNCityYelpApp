import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const RestaurantItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image style={style.image} source={{uri: props.restaurant}} />
        <Text style={style.name}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdbdbd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
