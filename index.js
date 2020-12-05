import 'react-native-gesture-handler';
import {AppRegistry, View, Text, TouchableHighlight} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Details')}>
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

const Stack = createStackNavigator();
const Container = () => (
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
);
AppRegistry.registerComponent(appName, () => Container);
