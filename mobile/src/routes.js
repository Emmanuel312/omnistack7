import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import Feed from './Pages/Feed'
import New from './Pages/New'
import { Image } from 'react-native'
import logo from './assets/logo.png'

const stackConfig = 
{
    initialRouteName: 'Feed',
    defaultNavigationOptions :
    {
        headerTintColor: '#000',
        headerTitle: <Image source={logo} style={{ marginHorizontal : 20 }} />,
        headerBackTitle: null, // tira a string voltar do icone
    },
    mode: 'modal'
    
}

const routes = createStackNavigator(
{
    Feed,
    New,
}, stackConfig) 



export default createAppContainer(routes)