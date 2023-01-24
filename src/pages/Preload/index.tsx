import React, { useEffect } from 'react'
import { Container, LoadingIcon } from './styled'
import { Image } from 'react-native'
import { getStorageItem } from '../../config/auth'
import { useNavigation } from '@react-navigation/native'
import { checkTokenAction } from '../../store/auth/auth.action'

const Preload: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const checkToken = async () => {
      const token = await getStorageItem('token')      
      if (token) {
        const result = await checkTokenAction({ token })
        if (result) {
          navigation.navigate('Home')
        } else {
          navigation.navigate('SignIn')
        }
      } else {
        navigation.navigate('SignIn')
      }
    }
    checkToken()
  }, [])

  return (
    <Container>
      <Image
        source={require('../../assets/image/header-image.png')}
        style={{ width: 330, height: 380 }}
      />
      <LoadingIcon size="large" color="#ccc" />
    </Container>
  )
}
export default Preload
