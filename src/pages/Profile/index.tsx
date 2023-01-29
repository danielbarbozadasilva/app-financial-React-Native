import React from 'react'
import { Container, Area, InfoArea, AreaName, CategoryIcon } from './styled'
import { logoutAction } from '../../store/auth/auth.action'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Bar'
import { useDispatch } from 'react-redux'
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons
} from '@expo/vector-icons'

const Profile: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    dispatch(logoutAction())
    navigation.navigate('SignIn')
  }

  return (
    <>
      <Header name={'Minha conta'} />
      <Container>
        <Area>
          <CategoryIcon>
            <MaterialIcons name="account-circle" size={26} color="#636262" />
          </CategoryIcon>
          <InfoArea>
            <AreaName>Meus dados</AreaName>
          </InfoArea>
        </Area>

        <Area>
          <CategoryIcon>
            <FontAwesome name="newspaper-o" size={26} color="#636262" />
          </CategoryIcon>
          <InfoArea>
            <AreaName>Regulamentos</AreaName>
          </InfoArea>
        </Area>

        <Area>
          <CategoryIcon>
            <Entypo name="star" size={26} color="#636262" />
          </CategoryIcon>
          <InfoArea>
            <AreaName>Avalie nosso aplicativo</AreaName>
          </InfoArea>
        </Area>

        <Area>
          <CategoryIcon>
            <AntDesign name="exclamationcircleo" size={26} color="#636262" />
          </CategoryIcon>
          <InfoArea>
            <AreaName>Sobre o aplicativo</AreaName>
          </InfoArea>
        </Area>

        <Area onPress={handleLogoutClick}>
          <CategoryIcon>
            <Ionicons name="exit" size={26} color="#636262" />
          </CategoryIcon>
          <InfoArea>
            <AreaName>Sair</AreaName>
          </InfoArea>
        </Area>
      </Container>
    </>
  )
}
export default Profile
