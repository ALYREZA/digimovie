import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import configureStore from '../../configureStore';
import Home from '../Home';
import Category from '../Category';
import Login from '../Login';
import Search from '../Search';
import Movie from '../Movie';

const store = configureStore();
const Stack = createStackNavigator();
const Container = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
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
  </Provider>
);

export default Container;
