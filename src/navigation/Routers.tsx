import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '@screens/Home';
import {Mega} from '@screens/Mega';
import {Calculator} from '@screens/Calculator';

import {StackParamList} from './Routers.type';

export const Stack = createNativeStackNavigator<StackParamList>();

const screens = {
  Home,
  Mega,
  Calculator,
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {Object.keys(screens).map(key => (
        <Stack.Screen
          key={key}
          name={key as keyof StackParamList}
          component={screens[key]}
        />
      ))}
    </Stack.Navigator>
  );
};

function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default Routes;
