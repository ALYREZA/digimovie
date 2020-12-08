import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Home({navigation}) {
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.text}}>Home Screen</Text>
    </View>
  );
}

export default Home;
