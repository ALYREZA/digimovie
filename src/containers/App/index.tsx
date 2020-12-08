import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import configureStore from '../../configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../HomeScreen';
import Category from '../CategoryScreen';
import Login from '../LoginScreen';
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
const store = configureStore(initialState);
const LoginStack = createStackNavigator();
const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
function Guest() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
}
function Tab() {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <TabStack.Screen
        name="Home"
        options={{
          headerTitle: 'home',
          tabBarLabel: 'Home',
          title: 'Home',
        }}
        component={Home}
      />
      <TabStack.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          title: 'Category',
        }}
      />
    </TabStack.Navigator>
  );
}
export default function App() {
  const scheme = useColorScheme();
  const [state, setState] = React.useState<string | null>(null);

  React.useEffect(() => {
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
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : lightMe}>
          <AppStack.Navigator>
            <AppStack.Screen name="Guest" component={Guest} />
            <AppStack.Screen
              name="Tab"
              component={Tab}
              options={{headerShown: false}}
            />
            <AppStack.Screen
              name="Movie"
              component={Movie}
              options={{
                title: 'Movie',
                headerBackTitle: 'Categories',
              }}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </Provider>
  );
}
