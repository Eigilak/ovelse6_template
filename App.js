import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import CarDetails from './components/CarDetails';
import { AntDesign } from '@expo/vector-icons';


const StackNavigator = createStackNavigator(
    {
      CarList: { screen: CarList },
      CarDetails: { screen: CarDetails },
    },
    { initialRouteKey: 'CarList' }
);

const TabNavigator = createBottomTabNavigator({
      CarList: {
        screen:StackNavigator,
        navigationOptions: {
          tabBarLabel:"CarList",
          tabBarIcon: ({ tintColor }) => (
              <AntDesign name="car" size={24} color={tintColor} />
          )
        },
      },
      AddCar: {
        screen:AddCar,
        navigationOptions: {
          tabBarLabel:"AddCar",
          tabBarIcon: ({ tintColor }) => (
              <AntDesign name="pluscircleo" size={24} color={tintColor} />
          )
        },
      }
    },
    {
      tabBarOptions: {
        showIcon:true,
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
        size:40
      }
    });
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
        /**
         *
         * INSÆT DIN CONFIG HER
         *
         */

    };
    // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
    // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return <AppContainer />;
  }
}
