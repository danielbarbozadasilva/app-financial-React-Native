import React from 'react'
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormSignIn from '../../components/auth/SignIn/index'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const submitForm = async (form: object) => {
    dispatch(signInAction(form)).then((result: any) => {
      if (result) {
        navigation.navigate('Home')
      }
    })
  }

  return (
    <>
      <FormSignIn submit={submitForm} />
    </>
  )
}

export default SignIn
