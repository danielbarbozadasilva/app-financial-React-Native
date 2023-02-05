import React from 'react'
import { Container, Area, InfoArea, AreaName, CategoryIcon } from './styled'
import { logoutAction } from '../../store/auth/auth.action'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Bar'
import { useAppDispatch } from '../../hooks/index'
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons
} from '@expo/vector-icons'
import { Nav } from '../../types/navigate'

const Profile: React.FC = () => {
  const navigation = useNavigation<Nav>()
  const dispatch = useAppDispatch()

  const handleLogoutClick = () => {
    dispatch(logoutAction())
    navigation.navigate('SignIn')
  }

  return (
    <>
      <Header name="Dados da conta" />
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
