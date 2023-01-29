import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styled'

type MovimentsProps = {
  data: {
    current_date: string
    bvmf: string
    current_price: string
  }
}

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
