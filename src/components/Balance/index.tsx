import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styled'

type BalanceProps = {
  data: {
    balance: string
    total_assets: string
    consolidated: string
  }
}

const Balance = ({ data }: BalanceProps) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.itemTitle}>Saldo em C/C</Text>
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>{data.balance}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.itemTitle}>Total Investido</Text>
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.patrimony}>{data.total_assets}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.itemTitle}>Patrimônio Total</Text>
          <View style={styles.content}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.patrimony}>{data.consolidated}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default Balance
