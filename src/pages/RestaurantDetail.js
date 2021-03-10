import React from 'react';
import {View, Text, FlatList} from 'react-native';

const RestaurantDetail = (props) => {
  const restaurant = props.route.params.restaurant;
  console.log(restaurant);

  return (
    <View>
      <FlatList
        data={restaurant}
        renderItem={({item}) => <Text>{item.AddressLine1}</Text>}
      />
    </View>
  );
};

export {RestaurantDetail};
