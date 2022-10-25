import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './Routers.type';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '@screens/Home';

export const Stack = createNativeStackNavigator<StackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
