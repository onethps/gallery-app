import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {DetailsScreen} from '../screens/DetailsScreen';
import {TabNavigator} from './TabNavigator';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            headerShown: false,
            useNativeDriver: true,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
          sharedElements={route => {
            const {item} = route.params;
            return [`item.${item.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
