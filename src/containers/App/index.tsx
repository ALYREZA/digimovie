import {Provider} from 'react-redux';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import configureStore from '../../configureStore';
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

export default () => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
          <Stack.Navigator>
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
              name="Login"
              component={Login}
              options={{title: 'Login'}}
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
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
};
