import {createDrawerNavigator} from '@react-navigation/drawer';
import Faq from '../screens/Faq';
import { createAppContainer } from 'react-navigation';
import StackNav from './HomeStackNav'


const RouteConfig = {
    Home: {
        screen: StackNav
    },
    Faq: {
        screen: Faq
    }

}

const MainNavigator =  createDrawerNavigator(RouteConfig);
export default createAppContainer(MainNavigator);