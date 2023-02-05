import React from 'react'
import { signUpAction } from '../../store/auth/auth.action'
import { useAppDispatch } from '../../hooks/index'
import FormSignUp from '../../components/Auth/SignUp/index'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Nav } from '../../types/navigate'

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<Nav>()

  const submitForm = async (form: object) => {
    dispatch(signUpAction(form)).then((result: any) => {
      if (result?.data?.token) {
        navigation.navigate('Home')
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
      }
    })
  }

  return (
    <>
      <FormSignUp submit={submitForm} />
    </>
  )
}

export default SignUp
