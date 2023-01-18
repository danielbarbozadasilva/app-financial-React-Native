import React, { useState } from 'react'
import {
  Container,
  SImage,
  InputArea,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  ContainerButton,
  styles
} from './styled'
import LockIcon from '../../../assets/svg/lock.svg'
import { useNavigation } from '@react-navigation/native'
import imageLogo from '../../../assets/image/header-image.png'
import { TextInput, Alert } from 'react-native'
import CustomButtonComponent from '../../../components/Button/index'
import { TextInputMask } from 'react-native-masked-text'

export interface SignInProps {
  submit: any
}

const SignIn: React.FC<SignInProps> = ({ submit }) => {
  const navigation = useNavigation()
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')

  const handlerSignClick = async () => {
    if (cpf !== '' && password !== '') {
      submit({ cpf, password })
    } else {
      Alert.alert('Atenção', 'Campo(s) não preenchido(s)!')
    }
  }

  const handleSignupButtonClick = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Container>
      <SImage source={imageLogo} />
      <InputArea>
        <TextInputMask
          type={'cpf'}
          placeholder="Digite o seu cpf"
          onChangeText={(t) => setCpf(t)}
          style={styles.input}
        />
        <TextInput
          IconSvg={LockIcon}
          placeholder="Digite a senha"
          value={password}
          onChangeText={(t) => setPassword(t)}
          secureTextEntry={true}
          style={styles.input}
        />
        <ContainerButton>
          <CustomButtonComponent text="LOGAR" onPress={handlerSignClick} />
          <CustomButtonComponent
            text="CADASTRAR"
            onPress={handleSignupButtonClick}
          />
        </ContainerButton>
      </InputArea>
    </Container>
  )
}
export default SignIn
