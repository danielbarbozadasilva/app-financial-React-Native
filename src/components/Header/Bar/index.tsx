import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styled'
import { Nav } from '../../../types/navigate'
import { UserProps } from '../types'

const Bar: React.FC<UserProps> = ({ name }) => {
  const navigation = useNavigation<Nav>()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.userName}>{name}</Text>
      </View>
    </View>
  )
}

export default Bar
