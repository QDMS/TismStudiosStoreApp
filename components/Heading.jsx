import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({text1="TismStudios", text2="Products"}) => {
  return (
    <View style={{ 
        paddingTop: 70, marginLeft: 35,
     }}>

     <Text style={{ 
        fontSize: 25
      }}>{text1}</Text>
     <Text style={{ 
        fontSize: 25, fontWeight: "900"
      }}>{text2}</Text>

    </View>    
  )
}

export default Heading