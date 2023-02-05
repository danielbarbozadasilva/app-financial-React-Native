import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styled'
import { MovimentDepositProps } from './types'

const MovimentDeposit: React.FC<MovimentDepositProps> = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.date}>{data.current_date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.bank_name}</Text>
        <Text style={styles.label}>{data.origin_cpf}</Text>
        <Text style={styles.value}>{data.deposit_value}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MovimentDeposit
