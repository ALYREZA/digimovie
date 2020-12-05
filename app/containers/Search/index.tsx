import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Search({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Search;
