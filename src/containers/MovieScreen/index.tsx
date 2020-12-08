import React, {useEffect} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Movie({navigation, route}) {
  const {colors} = useTheme();
  const {title, id} = route.params;
  useEffect(() => {
    navigation.setOptions({title});
  }, [title]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Search Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Search')}>
        <Text style={{color: colors.primary}}> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Movie;
