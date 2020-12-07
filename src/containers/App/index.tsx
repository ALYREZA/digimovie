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
import initialState from '../../initialState';

const lightMe = {
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

export default function Container() {
  const navigationRef = React.useRef(null);
  const stateOf = navigationRef.current?.getRootState();
  const scheme = useColorScheme();
  const [state, setState] = React.useState<string | null>(null);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        userToken = null;
      }

      setState(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer
          ref={navigationRef}
          theme={scheme === 'dark' ? DarkTheme : lightMe}>
          <Stack.Navigator>
            {state == null ? (
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
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
      </AppearanceProvider>
    </Provider>
  );
}
