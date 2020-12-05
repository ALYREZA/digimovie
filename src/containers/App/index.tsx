import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import configureStore from '../../configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../HomeScreen';
import Category from '../CategoryScreen';
import Login from '../LoginScreen';
import Search from '../SearchScreen';
import Movie from '../MovieScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const store = configureStore();
const Stack = createStackNavigator();
const AuthContext = React.createContext();

export default () => {
  const scheme = useColorScheme();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
            <Stack.Navigator>
              {state.userToken == null ? (
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{title: 'Login'}}
                />
              ) : (
                <>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Home'}}
                  />
                  <Stack.Screen
                    name="Category"
                    component={Category}
                    options={{title: 'Category'}}
                  />

                  <Stack.Screen
                    name="Movie"
                    component={Movie}
                    options={{title: 'Movie'}}
                  />
                  <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{title: 'Search'}}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      </AppearanceProvider>
    </Provider>
  );
};
