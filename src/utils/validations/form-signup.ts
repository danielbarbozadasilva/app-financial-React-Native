import * as yup from 'yup';

export const schemaSignUp = yup
  .object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    cpf: yup.string().required('Informe o cpf'),
    birth_date: yup.string().required('Informe a sua data de nascimento'),
    password: yup
      .string()
      .required('Informe a senha')
      .min(6, 'senha deve ter pelo menos 6 digitos'),
    phone: yup
      .string()
      .required('Informe o telefone')
      .min(8, 'senha deve ter pelo menos 8 digitos'),
    address: yup.string().required('Informe o endereço'),
    uf: yup.string().required('Informe a uf'),
    city: yup.string().required('Informe a cidade'),
    zip_code: yup.string().required('Informe o cep'),
    complement: yup.string().optional(),
  })
  .required();
