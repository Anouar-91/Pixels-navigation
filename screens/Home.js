import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
const Home = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('Portfolio')

  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home test</Text> 
      <Button title="Vers Portfolio"
        onPress={handlePress}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightblue",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontFamily: "InriaSans_700Bold_Italic",
        fontSize:20
    }
})
export default Home