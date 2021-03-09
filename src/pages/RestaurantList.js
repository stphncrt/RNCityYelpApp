import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import RestList from '../components/RestList';

const RestaurantList = (props) => {
  const {selectedCity} = props.route.params;
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://wyre-data.p.rapidapi.com/restaurants/town/${selectedCity}`,
      headers: {
        'x-rapidapi-key': '4f43c877bfmsh06f700aec3fc9f8p1ccf35jsn1ee0c02f0bed',
        'x-rapidapi-host': 'wyre-data.p.rapidapi.com',
      },
      params: {
        town: selectedCity,
      },
    };
    const response = await axios.request(options);
    // console.log(response);
    setList(response.data);
    console.log(list);
    setIsloading(false);
  };
  const [isloading, setIsloading] = useState(true);
  const renderList = ({item}) => (
    // isloading ? (
    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //     <ActivityIndicator />
    //   </View>
    // ) :

    <RestList Restaurant={item.BusinessName} />
  );
  // };
  // const renderList = console.log('naber');
  return (
    <View>
      <TouchableOpacity onPress={fetchData}>
        <Text
          style={{
            fontSize: 40,
            backgroundColor: '#ff5722',
            margin: 5,
            borderRadius: 10,
            textAlign: 'center',
          }}>
          Restaurant List
        </Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(_, index) => index.key}
        data={list}
        renderItem={renderList}
      />
    </View>
  );
};

export {RestaurantList};
