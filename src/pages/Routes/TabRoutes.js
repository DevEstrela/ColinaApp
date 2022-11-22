import React from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Satisfacao from '../Satisfacao';
import TabHome from '../TabHome';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',

                tabBarStyle:{
                    backgroundColor: '#04248c',
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name='TabHome'
                component={TabHome}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="home" color={color} size={size} />
                    }
                }}

            />
            <Tab.Screen
                name='Satisfação'
                component={Satisfacao}               
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <Feather name="file-plus" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )    
}