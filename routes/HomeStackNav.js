import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Home from "../screens/Home"
import Photo from "../screens/Photo"
import Portfolio from "../screens/Portfolio"
import Four from "../screens/Four"
import { createAppContainer } from 'react-navigation';
import Colors from '../styles/Colors';
import {Button} from 'react-native';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil',
            headerRight: () => (
                <Button 
                onPress={() => alert('Dans Route')}
                title="Info"
                color="white"
                />
            )
/*             headerStyle: {
                backgroundColor: Colors.lightBrown
            } */
        }
    }, 
    Photo: {
        screen: Photo
    }, 
    Portfolio: {
        screen: Portfolio,        
        navigationOptions: {
            title: 'Portfolio',
/*             headerStyle: {
                backgroundColor: Colors.lightBrown
            } */
        }
    },
    Four: {
        screen: Four
    }
}

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.lightBrown
        },
        headerRight: () => (
            <Button 
            onPress={() => alert('Dans Route')}
            title="Info"
            color="white"
            />
        ),
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontSize: 30
        }
    }
}
const StackNav = createStackNavigator(screens,defaultNavigationOptions )

export default createAppContainer(StackNav);