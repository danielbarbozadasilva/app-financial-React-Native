import React from 'react'
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormSignUp from '../../components/Auth/SignUp/index'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const submitForm = async (form: object) => {
    dispatch(signUpAction(form)).then((result) => {
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
