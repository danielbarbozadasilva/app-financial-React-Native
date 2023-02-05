import React from 'react'
import { signInAction } from '../../store/auth/auth.action'
import FormSignIn from '../../components/Auth/SignIn/index'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../../hooks/index'
import { Nav } from '../../types/navigate'

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<Nav>()

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
