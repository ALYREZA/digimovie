import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Login({navigation}) {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Login Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Movie')}>
        <Text style={{color: colors.primary}}> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Login;
