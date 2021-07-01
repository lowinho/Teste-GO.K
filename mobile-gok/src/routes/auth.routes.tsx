import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import  { Login }  from '../screens/Login';
import  { Users }  from '../screens/Users';
import  { Repositories }  from '../screens/Repositories';
import  { ListTags }  from '../screens/ListTags';
import  { AddTags }  from '../screens/AddTags';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondaryWhite
        }
      }}
    >
      <Screen 
        name="Login"
        component={Login}
      />

      <Screen 
        name="Users"
        component={Users}
      />

      <Screen 
        name="Repositories"
        component={Repositories}
      />

      <Screen 
        name="ListTags"
        component={ListTags}
      /> 

      <Screen 
        name="AddTags"
        component={AddTags}
      /> 

    </Navigator>
  )
}