import React from 'react'
import { TextInputMask } from 'react-native-masked-text'
import { TextInput } from 'react-native'
import { VStack, ScrollView, Select } from 'native-base'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import ufCityFile from '../../../utils/state-city.json'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaSignUp } from '../../../utils/validations/form-signup'
import Title from '../../Title/index'
import CustomButtonComponent from '../../Button/index'
import {
  CustomButton,
  CustomButtonText,
  ErrorMessage,
  SelectArea,
  Container,
  styles
} from './styled'
import Header from '../../Header/Bar'

export interface SignUpProps {
  submit: any
}

const SignUp: React.FC<SignUpProps> = ({ submit }) => {
  type FormValues = {
    name: string
    email: string
    cpf: string
    gender: string
    birth_date: string
    password: string
    phone: string
    address: string
    uf: string
    city: string
    zip_code: string
    complement: string
  }

  const [uf, setUf] = React.useState([])
  const [city, setCity] = React.useState([])
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schemaSignUp) })

  React.useEffect(() => {
    const localization = ufCityFile.states.map(({ name, uf }) => ({ name, uf }))
    setUf(localization)
  }, [])

  React.useEffect(() => {
    const result = ufCityFile.states.find((item) => item.uf === watch('uf'))
    if (result) {
      setCity(result.city)
    }
  }, [watch('uf')])

  const handleSignUp: SubmitHandler<FormValues> = async (form) => {
    console.log(form)

    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      gender: form.gender,
      birth_date: form.birth_date,
      password: form.password,
      phone: form.phone,
      address: form.address,
      uf: form.uf,
      city: form.city,
      zip_code: form.zip_code,
      complement: form.complement
    }

    submit(nform)
  }

  return (
    <Container>
      <Header name="Crie sua conta" />
      <ScrollView>
        <VStack flex={1} p={10}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <>
                <TextInput
                  placeholder="Digite o seu nome"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.name?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <>
                <TextInput
                  placeholder="Digite o seu e-mail"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.email?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange } }) => (
              <>
                <TextInputMask
                  type={'cpf'}
                  placeholder="Digite o seu cpf"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.cpf?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <>
                <SelectArea>
                  <Select
                    placeholder="Sexo"
                    _selectedItem={{
                      bg: 'teal.900'
                    }}
                    style={styles.inputSelect}
                    onValueChange={onChange}
                    selectedValue={value}
                  >
                    <Select.Item label={'M'} value={'M'} />
                    <Select.Item label={'F'} value={'F'} />
                  </Select>
                  <ErrorMessage>{errors.gender?.message || ''}</ErrorMessage>
                </SelectArea>
              </>
            )}
          />

          <Controller
            control={control}
            name="birth_date"
            render={({ field: { onChange } }) => (
              <>
                <TextInputMask
                  placeholder="Digite a sua data de nascimento"
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                  style={styles.input}
                  onChangeText={onChange}
                />
                <ErrorMessage>{errors.birth_date?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <>
                <TextInput
                  placeholder="Digite a sua senha"
                  onChangeText={onChange}
                  style={styles.input}
                  secureTextEntry={true}
                />
                <ErrorMessage>{errors.password?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange } }) => (
              <>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  placeholder="Digite o seu telefone"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.phone?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="address"
            render={({ field: { onChange } }) => (
              <>
                <TextInput
                  placeholder="Digite o seu endereço"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.address?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="uf"
            render={({ field: { onChange, value } }) => (
              <>
                <SelectArea>
                  <Select
                    placeholder="Selecione a sua uf"
                    _selectedItem={{
                      bg: 'teal.900'
                    }}
                    style={styles.inputSelect}
                    onValueChange={onChange}
                    selectedValue={value}
                  >
                    {uf?.map(({ name, uf }, i) => (
                      <Select.Item key={i} label={uf} value={uf} />
                    ))}
                  </Select>
                  <ErrorMessage>{errors.uf?.message || ''}</ErrorMessage>
                </SelectArea>
              </>
            )}
          />

          <Controller
            control={control}
            name="city"
            render={({ field: { onChange, value } }) => (
              <>
                <Select
                  placeholder="Selecione a sua cidade"
                  style={styles.inputSelect}
                  value={value}
                  selectedValue={value}
                  onValueChange={onChange}
                >
                  {city?.map((city, i) => (
                    <Select.Item key={i} label={city} value={city} />
                  ))}
                </Select>
                <ErrorMessage>{errors.city?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="zip_code"
            render={({ field: { onChange } }) => (
              <>
                <TextInputMask
                  type={'zip-code'}
                  placeholder="Digite o seu cep"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.zip_code?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="complement"
            render={({ field: { onChange } }) => (
              <TextInput
                placeholder="Digite o complemento (opcional)"
                onChangeText={onChange}
                style={styles.input}
              />
            )}
          />

          <CustomButtonComponent
            text="Cadastrar"
            onPress={handleSubmit(handleSignUp)}
          />
        </VStack>
      </ScrollView>
    </Container>
  )
}
export default SignUp
