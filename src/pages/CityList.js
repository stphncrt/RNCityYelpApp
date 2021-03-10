import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import {CityItem} from '../components/CityItem';
import {SearchBar} from '../components/SearchBar';

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);

  const fetchCityData = async () => {
    const options = {
      method: 'GET',
      url: 'https://wyre-data.p.rapidapi.com/restaurants/town',
      headers: {
        'x-rapidapi-key': '4f43c877bfmsh06f700aec3fc9f8p1ccf35jsn1ee0c02f0bed',
        'x-rapidapi-host': 'wyre-data.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    console.log(response);
    setCityList(response.data);
    let originalList = [...response.data];
    // originalList = [...response.data];
    console.log(originalList);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => (
    <CityItem
      cityName={
        item.AddressLine3 == true ? item.AddressLine3 : item.LocalAuthorityName
      }
      func={() =>
        props.navigation.navigate('Restaurants', {
          selectedCity:
            item.AddressLine3 == true
              ? item.AddressLine3
              : item.LocalAuthorityName,
        })
      }
    />
  );
  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );
  // useEffect(() => {
  //   nextPage();
  // }, []);
  function searchCity(search) {
    const filteredCity = originalList.filter((city) => {
      const text = search.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });
    setCityList(filteredCity);
  }
  return (
    <View>
      {/* <TouchableOpacity
        onPress={nextPage}
        style={{backgroundColor: '#b3e5fc', margin: 10}}>
        <Text style={{fontSize: 30, alignSelf: 'center'}}>next page</Text>
      </TouchableOpacity>
      <Text style={Styles.headerText}> City List </Text> */}
      <SearchBar
        placeholder="Search for a city.."
        onSearch={(value) => searchCity(value)}
      />
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

export {CityList};

const Styles = StyleSheet.create({
  headerText: {
    margin: 5,
    color: 'white',
    fontSize: 30,
    // alignSelf: 'center',
    backgroundColor: '#00796b',
  },
});
