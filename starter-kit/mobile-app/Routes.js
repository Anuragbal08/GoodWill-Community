import React, { Component } from "react";
//import { createStackNavigator, createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
//import Home from "./src/screens/Home";
import Home from './src/screens/home';
import TestExample from './src/screens/home';
//import Profile from "./src/screens/Profile";
/*const Project= createStackNavigator({
 // Home: {screen: Home}


 Home: {
    screen: Home
   },
   TestExample: {
    screen: TestExample
   }

});
*/




const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator


//const Project = createStackNavigator({

  //  Home: {screen: Home}
//
//});

/*
function MyProject() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
       // <Stack.Screen name="Notifications" component={Notifications} />
        //<Stack.Screen name="Profile" component={Profile} />
        //<Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

/*
function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }
  */

 //export default createAppContainer();