import React from 'react';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './pages/HomeScreen';
import Todo from './pages/Todo';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home Screen',
      headerStyle: {backgroundColor: 'powderblue'},
      headerTintColor: '#000',
    },
  },

  Todo: {
    screen: Todo,
    navigationOptions: {
      title: 'Todo Page',
      headerStyle: {backgroundColor: 'powderblue'},
      headerTintColor: '#fff',
    },
  },
});

export default createAppContainer(App);