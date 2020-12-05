import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Movie({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Search')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Movie;
