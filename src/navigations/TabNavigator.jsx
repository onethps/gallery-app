import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import {FavoriteIcon, HomeIcon, SearchIcon} from '../constants/icons';
import {colors, sizes} from '../constants/themes';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;

  const tabs = [
    {
      id: 1,
      name: 'Home',
      Icon: HomeIcon,
      screen: HomeScreen,
    },
    {
      id: 2,
      name: 'Favorite',
      Icon: FavoriteIcon,
      screen: FavoriteScreen,
    },
    {
      id: 3,
      name: 'Search',
      Icon: SearchIcon,
      screen: SearchScreen,
    },
  ];

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({id, name, Icon, screen}, index) => {
          return (
            <Tab.Screen
              key={id}
              name={name}
              component={screen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({focused}) => (
                  <Icon
                    style={{
                      color: focused ? colors.primary : colors.gray,
                    }}
                  />
                ),
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    width: 10,
    height: 2,
    left: sizes.width / 3 / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
