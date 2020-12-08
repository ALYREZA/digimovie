import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

export default function Category({title, id}) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{height: 60, width: '100%'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Movie', {title, id})}
        style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          }}>
          <Text style={{color: colors.text, fontSize: 28, paddingLeft: 10}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
