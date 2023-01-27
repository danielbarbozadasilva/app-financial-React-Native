import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styled.ts'

type UserProps = {
  name: string
}

const Bar: React.FC<UserProps> = ({ name }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.userName}>{name}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonUser}
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Bar
