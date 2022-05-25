import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const Photo = (props) => {
  console.log(props)
  const handlePress = () => {
    //allow to return at the last screen
    props.navigation.popToTop()
  }
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>Photo</Text> 
      <Button title="Retour"
        onPress={handlePress}
      />
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
