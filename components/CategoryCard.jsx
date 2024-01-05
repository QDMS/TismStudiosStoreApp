import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper';

const CategoryCard = ({name, id, deleteHandler}) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{name}</Text>
     <TouchableOpacity
     onPress={() => deleteHandler(id)}
     >
        <Avatar.Icon icon={"delete"} style={{ 
            backgroundColor: colors.color1
         }} size={30}/>
     </TouchableOpacity>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.color2,
        elevation: 5,
        margin: 10,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },
    cardText: {
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 1

    }
})