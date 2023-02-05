import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styled'
import { NavProps } from '../../types/navigate'
import { InvestmentAssetProps } from './types'

const InvestmentAsset: React.FC<InvestmentAssetProps> = ({ data }) => {
  const navigation = useNavigation<NavProps>()

  const handleClick = () => {
    navigation.navigate('FinancialAssetDetails', { asset: data })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.date}>{data.current_date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.bvmf}</Text>
        <Text style={styles.value}>{data.current_price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default InvestmentAsset
