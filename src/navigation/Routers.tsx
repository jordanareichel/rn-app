import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './Routers.type';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '@screens/Home';
import {Mega} from '@screens/Mega';

export const Stack = createNativeStackNavigator<StackParamList>();

const screens = {
  Home,
  Mega,
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
