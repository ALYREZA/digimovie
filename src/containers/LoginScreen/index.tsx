import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useInjectSaga} from '../../utils/injectSaga';
import {useInjectReducer} from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
const key = 'login';
function Login({navigation}) {
  const {colors} = useTheme();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.text, fontSize: 33}}>Login Screen</Text>
    </View>
  );
}

export default Login;
