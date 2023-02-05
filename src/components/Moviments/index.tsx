import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styled'
import { MovimentsProps } from './types'

const Moviments: React.FC<MovimentsProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.current_date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.bvmf}</Text>
        <Text style={styles.value}>{data.current_price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Moviments
