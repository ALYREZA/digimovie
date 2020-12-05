import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Category')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Home;
