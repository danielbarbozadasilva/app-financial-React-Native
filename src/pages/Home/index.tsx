import React from 'react'
import { View, FlatList } from 'react-native'
import Balance from '../../components/Balance'
import Header from '../../components/Header'
import { decodeToken } from '../../config/auth'
import { checkBalanceAction } from '../../store/account/account.action'
import { listByIdUserAssetAction } from '../../store/transaction/transaction.action'
import Title from '../../components/Title'
import { styles } from './styled'
import { useAppSelector, useAppDispatch } from '../../hooks/index'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'

const Home: React.FC = () => {
  const account = useAppSelector((state) => state.account.balance)
  const transactions = useAppSelector((state) => state.transaction.selected)

  const [name, setName] = React.useState('')
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    decodeToken().then((result) => {
      setName(result.name)
      dispatch(checkBalanceAction(result.id))
      dispatch(listByIdUserAssetAction(result.id))
    })
  }, [])

  return (
    <>
      <Header name={name} />
      <View style={styles.container}>
        <Balance data={account} />
        <Actions />
        <Title text="Ultimas movimentações" />
        <FlatList
          style={styles.list}
          data={transactions.slice(0, 2)}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Moviments data={item} />}
        />
      </View>
    </>
  )
}

export default Home
