import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import { styles } from './styled.ts'

type UserProps = {
  name: string
}

export default function Header({ name }: UserProps) {
  const navigation = useNavigation();
  const handleBackButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handleBackButton} >
          <Ionicons name="arrow-back-outline" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.userName}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
