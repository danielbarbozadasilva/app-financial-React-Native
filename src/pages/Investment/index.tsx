import React from 'react'
import { View, FlatList } from 'react-native'
import { decodeToken } from '../../config/auth'
import { useDispatch, useSelector } from 'react-redux'
import { listByIdUserAssetAction } from '../../store/transaction/transaction.action'
import Title from '../../components/Title'
import { styles } from './styled'
import InvestmentAsset from '../../components/Investment'
import Header from '../../components/Header/Bar'

const Investment: React.FC = () => {
  const transactions = useSelector((state: any) => state.transaction.selected)
  const dispatch = useDispatch()

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
