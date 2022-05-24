import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles } from '../styles/AppStyles'

import React from 'react'

const Logo = () => {
  return (<Image 
  source={require('../assets/logo_tiktok.png')}
  style={{width:30, height:30 }}
/>)
}
const Portfolio = (props) => {

  const handlePress = () => {
    navigation.navigate('Photo')
  }
  return (
    <View style={globalStyles.container}>
      <Text styles={globalStyles.text}>{props.navigation.getParam('name')}</Text> 
      <Text styles={globalStyles.text}>{props.navigation.getParam('country')}</Text> 
      <Text styles={globalStyles.text}>{props.navigation.getParam('totalImg')}</Text> 
      <Button title="Vers Photo"
        onPress={handlePress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "orange",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        
    }
})

Portfolio.navigationOptions = {
  headerTitle: "Accueil",
  headerStyle: {
    backgroundColor: "red"
  },
  headerTintColor: 'yellow',
  headerTitleStyle: {
      fontStyle: 'italic'
  }
}
export default Portfolio
