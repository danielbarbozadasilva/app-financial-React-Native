import React from 'react'
import { View, FlatList } from 'react-native'
import { decodeToken } from '../../config/auth'
import { listByIdUserAssetAction } from '../../store/transaction/transaction.action'
import Title from '../../components/Title'
import { styles } from './styled'
import InvestmentAsset from '../../components/Investment'
import Header from '../../components/Header/Bar'
import { useAppSelector, useAppDispatch } from '../../hooks/index'

const Investment: React.FC = () => {
  const transactions = useAppSelector((state) => state.transaction.selected)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    decodeToken().then((result) => {
      dispatch(listByIdUserAssetAction(result.id))
    })
  }, [])

  return (
    <>
      <View>
        <Header name={'Ativos adquiridos'} />
        <Title text="Lista de ativos" />

        <FlatList
          style={styles.list}
          data={transactions}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <InvestmentAsset data={item} />}
        />
      </View>
    </>
  )
}

export default Investment
