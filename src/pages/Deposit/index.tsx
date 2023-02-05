import React from 'react'
import { View, FlatList } from 'react-native'
import { decodeToken } from '../../config/auth'
import { listByIdUserDepositAction } from '../../store/transaction/transaction.action'
import Title from '../../components/Title'
import { styles } from './styled'
import MovimentDeposit from '../../components/MovimentDeposit'
import Header from '../../components/Header/Bar'
import { useAppSelector, useAppDispatch } from '../../hooks/index'

const Deposit: React.FC = () => {
  const transactions = useAppSelector((state) => state.transaction.deposit)

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    decodeToken().then((result) => {
      dispatch(listByIdUserDepositAction(result.id))
    })
  }, [])

  return (
    <>
      <View>
        <Header name='Movimentações' />
        <Title text="Depósitos" />

        <FlatList
          style={styles.list}
          data={transactions}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MovimentDeposit data={item} />}
        />
      </View>
    </>
  )
}

export default Deposit
