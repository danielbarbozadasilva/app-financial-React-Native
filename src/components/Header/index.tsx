import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styled.ts'

type UserProps = {
  name: string
}

const Header: React.FC<UserProps> = ({ name }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.content}>
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

export default Header
