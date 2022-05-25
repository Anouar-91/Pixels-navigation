import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native'
import { globalStyles } from '../styles/AppStyles';
import MaterialIconsHeader from '../components/MaterialIconsHeader';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import React from 'react'

const Logo = () => {
  return (<Image
    source={require('../assets/logo_tiktok.png')}
    style={{ width: 30, height: 30 }}
  />)
}
const Portfolio = (props) => {

  const handlePress = () => {
    props.navigation.navigate('Photo')
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
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {

  }
})


Portfolio.navigationOptions = {
  headerTitle: "Profil",
  headerStyle: {
    backgroundColor: "lightgreen"
  },
  headerTintColor: 'yellow',
  headerTitleStyle: {
    fontStyle: 'italic'
  }
}

Portfolio.navigationOptions = (navigationData) => {
  const name = navigationData.navigation.getParam('name')
  const favColor = navigationData.navigation.getParam('favColor')
  return {
    headerTitle: `Profil de ${name}`,
    headerStyle: {
      backgroundColor: favColor
    },
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={MaterialIconsHeader}
      >
        <Item title="Info"
          iconName='Info-outline'
          onPress={() => alert('info')}
        />
      </HeaderButtons>
    ),
    headerTintColor: 'yellow',
    headerTitleStyle: {
      fontStyle: 'italic'
    }
  }
}
export default Portfolio
