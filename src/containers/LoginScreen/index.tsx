import React, {memo, useEffect} from 'react';
import {View, Text} from 'react-native';
import isEmpty from 'lodash/isEmpty';
import {useInjectSaga} from '../../utils/injectSaga';
import saga from './saga';
import InputText from '../../components/InputText';
import Btn from '../../components/Button';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {signInRequest} from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectToken,
} from './selectors';

const key = 'user';
export function Login({
  navigation,
  loading,
  token,
  error,
  errorMessage,
  sendSignInRequest,
}) {
  console.log({loading, token, error, errorMessage});
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  useInjectSaga({key, saga});
  useEffect(() => {
    if (!isEmpty(token)) {
      navigation.dispatch(StackActions.replace('Tab', {screen: 'Home'}));
    }
  }, [token]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <InputText value={username} name="email" onChangeText={setUsername} />
      <InputText
        value={password}
        secureTextEntry
        name="password"
        onChangeText={setPassword}
      />
      <Btn
        loading={loading}
        title="login"
        onPress={() => sendSignInRequest({username, password})}
      />
      {!isEmpty(errorMessage) && (
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 22,
          }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  token: makeSelectToken(),
  error: makeSelectError(),
  errorMessage: makeSelectErrorMessage(),
});
export function mapDispatchToProps(dispatch) {
  return {
    sendSignInRequest: (data) =>
      dispatch(signInRequest(data.username, data.password)),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Login);
