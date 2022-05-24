import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Photo = () => {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>Photo</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightgreen",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        
    }
})
export default Photo
