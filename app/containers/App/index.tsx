import {View, Text, TouchableHighlight} from 'react-native';
import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import configureStore from '../../configureStore';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableHighlight onPress={() => navigation.push('Details')}>
        <Text> Options </Text>
      </TouchableHighlight>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const store = configureStore();
const Stack = createStackNavigator();
const Container = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Options'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default Container;
