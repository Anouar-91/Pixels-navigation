import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>Portfolio</Text> 
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

export default Portfolio
