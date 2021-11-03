import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigator';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
    <Drawer.Navigator>
        <Drawer.Screen name = "Home" component = {TabNavigator}/>
        <Drawer.Screen name = "Profile" component = {Profile}/>
    </Drawer.Navigator>
    )
}

export default DrawerNavigator
