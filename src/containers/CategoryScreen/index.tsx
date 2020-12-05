import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Category({navigation}) {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Category</Text>
      <TouchableHighlight onPress={() => navigation.push('Login')}>
        <Text style={{color: colors.text}}> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Category;
