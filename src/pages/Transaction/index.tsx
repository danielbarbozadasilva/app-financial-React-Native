import React from 'react'
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch } from 'react-redux'
import FormTransaction from '../../components/Transaction/index'
import { useNavigation } from '@react-navigation/native'
import { Alert, Text } from 'react-native'
import {
  Container,
  Scroller,
  PageBody,
  FinancialTitle,
  FinancialInfo,
  FinancialText,
  CustomButton,
  CustomButtonText
} from './styled'
import Header from '../../components/Header/Bar'
import {
  calcSubTotal,
  calcTotalTransfer,
  formatPrice
} from '../../utils/helpers/helpers.price'
import { createTransaction } from '../../store/transaction/transaction.action'

type TransactionProps = {
  current_date: string
  name: string
  bvmf: string
  current_price: string
  quantity: number
}

const Transaction: React.FC<TransactionProps> = (props) => {
  const { data } = props.route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handlerCreateTransaction = (form: string) => {
    const subTotal = calcSubTotal(data.count, data.asset.current_price)
    const total = calcTotalTransfer(subTotal)

    const nform = {
      current_price: formatPrice(form.asset.current_price),
      subtotal_price: formatPrice(subTotal),
      total_price: formatPrice(total),
      quantity: form.count
    }

    dispatch(createTransaction(form.asset.id, nform)).then(() => {
      navigation.navigate('Home')
    })
  }

  return (
    <>
      <Container>
        <Header name="Ativo financeiro" />
        <Scroller>
          <PageBody>
            <FinancialInfo>
              <FinancialText>
                <FinancialTitle>Nome: </FinancialTitle>
                {data.asset.name}
              </FinancialText>
              <FinancialText>
                <FinancialTitle>Bvmf: </FinancialTitle>
                {data.asset.bvmf}
              </FinancialText>
              <FinancialText>
                <FinancialTitle>Quantidade: </FinancialTitle>
                {data.count}
              </FinancialText>
              <FinancialText>
                <FinancialTitle>Subtotal: </FinancialTitle>
                {'R$' + calcSubTotal(data.count, data.asset.current_price)}
              </FinancialText>
              <FinancialText>
                <FinancialTitle>Taxas: </FinancialTitle>
                {'5%'}
              </FinancialText>
              <FinancialText>
                <FinancialTitle>Total: </FinancialTitle>
                {'R$' +
                  calcTotalTransfer(
                    calcSubTotal(data.count, data.asset.current_price)
                  )}
              </FinancialText>
            </FinancialInfo>

            <CustomButton onPress={() => handlerCreateTransaction(data)}>
              <CustomButtonText>Finalizar</CustomButtonText>
            </CustomButton>
          </PageBody>
        </Scroller>
      </Container>
    </>
  )
}

export default Transaction
