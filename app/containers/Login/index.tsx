import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Movie')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Login;
