import React, {memo} from 'react';
import {View} from 'react-native';
import {useInjectSaga} from '../../utils/injectSaga';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {useInjectReducer} from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import InputText from '../../components/InputText';
import Btn from '../../components/Button';
import {signInRequest} from './actions';
import {createStructuredSelector} from 'reselect';
import {makeSelectLoading} from './selectors';
const key = 'user';

export function Login({navigation, sendSignInRequest, load}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
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
        title="login"
        onPress={() => sendSignInRequest({username, password})}
      />
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  load: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    sendSignInRequest: (data) =>
      dispatch(signInRequest(data.username, data.password)),
  };
}

const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect, memo)(Login);
