import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styled'
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Actions = () => {
  const navigation = useNavigation()

  return (
    <>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Deposit')}
        >
          <View style={styles.areaButton}>
            <MaterialIcons name="money" size={24} color="black" />
          </View>
          <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Investment')}
        >
          <View style={styles.areaButton}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </View>
          <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={navigation.navigate('FinancialAssets')}
        >
          <View style={styles.areaButton}>
            <AntDesign name="barschart" size={24} color="black" />
          </View>
          <Text style={styles.labelButton}>Ativos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color="#000" />
          </View>
          <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
          </View>
          <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default Actions
