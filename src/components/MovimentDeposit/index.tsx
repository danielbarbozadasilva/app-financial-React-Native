import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styled'

type MovimentDepositProps = {
  data: {
    current_date: string
    bank_name: string
    origin_cpf: string
    deposit_value: string
  }
}

export default function MovimentDeposit({ data }: MovimentDepositProps) {
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
