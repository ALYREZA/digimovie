import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Category({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Category</Text>
      <TouchableHighlight onPress={() => navigation.push('Login')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Category;
