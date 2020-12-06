import React from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useInjectSaga} from '../../utils/injectSaga';
import {useInjectReducer} from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import InputText from '../../components/InputText';
import Btn from '../../components/Button';
const key = 'login';
function Login({navigation}) {
  const {colors} = useTheme();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <InputText value={email} name="email" onChangeText={setEmail} />
      <InputText
        value={password}
        secureTextEntry
        name="password"
        onChangeText={setPassword}
      />
      <Btn
        title="login"
        onPress={() => Alert.alert(`${email} \n${password}`)}
      />
    </View>
  );
}

export default Login;
