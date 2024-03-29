import { View, Text, Image } from 'react-native'
import React from 'react'

const ComfirmOrderItem = ({price, quantity, image, name}) => {
  return (
    <View style={{ 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
     }}>
      <Image source={{ 
        uri: image
       }}
       style={{ 
        width: 50,
        height: 50,
        resizeMode: "contain"
        }}
       />
       <Text style={{ 
        maxWidth: 150
        }}>
        {name}
       </Text>
       <View style={{ 
        flexDirection: "row",
        }}>
        <Text>{quantity}</Text>
        <Text style={{ 
            marginHorizontal: 10,
         }}>X</Text>
        <Text>${price}</Text>
       </View>
    </View>
  )
}

export default ComfirmOrderItem