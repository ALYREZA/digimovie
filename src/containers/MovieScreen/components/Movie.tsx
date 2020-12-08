import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Movie({item}) {
  const {colors} = useTheme();
  return (
    <View style={{height: 60, width: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}>
        <Text
          lineBreakMode="middle"
          numberOfLines={1}
          style={{color: colors.text, fontSize: 28, paddingLeft: 10}}>
          {item.title}
        </Text>
      </View>
    </View>
  );
}
