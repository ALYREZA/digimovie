import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Search({navigation}) {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Search Screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text style={{color: colors.text}}> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Search;
