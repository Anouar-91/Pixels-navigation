import { createStackNavigator } from 'react-navigation-stack';
import Home from "../screens/Home"
import Photo from "../screens/Photo"
import Portfolio from "../screens/Portfolio"
import Four from "../screens/Four"
import { createAppContainer } from 'react-navigation';
import Colors from '../styles/Colors';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Accueil',
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
        headerTintColor: Colors.white,
        headerTitleStyle: {
            fontSize: 30
        }
    }
}
const StackNav = createStackNavigator(screens,defaultNavigationOptions )

export default createAppContainer(StackNav);