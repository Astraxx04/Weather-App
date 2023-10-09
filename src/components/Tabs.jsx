import React from 'react';
import CurrentWeather from '../Screens/CurrentWeather'
import UpcomingWeather from '../Screens/UpcomingWeather';
import City from '../Screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs({ weather }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 35,
                    color: 'white'
                }
            }}
        >
            <Tab.Screen
                name={'Current'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'sun'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#6b8e2f'
                    },
                    headerStyle: {
                        backgroundColor: '#42d6e7',
                    }
                }}
            >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={'Upcoming'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#38261c'
                    },
                    headerStyle: {
                        backgroundColor: '#f47328',
                    }
                }}
            >
                {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>
            <Tab.Screen
                name={'City'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'tomato' : 'white'}
                        />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#095c85'
                    },
                    headerStyle: {
                        backgroundColor: '#81d2e5',
                    },
                }}
            >
                {() => <City weatherData={weather.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
};

export default Tabs;