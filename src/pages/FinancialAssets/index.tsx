import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { styles } from './styled'
import ItemAsset from '../../components/ItemAsset/index'
import { useDispatch, useSelector } from 'react-redux'
import { listAllAssetAction } from '../../store/financial_assets/financial_assets.action'
import Header from '../../components/Header/Bar'
import Title from '../../components/Title'

const FinancialAssets: React.FC = () => {
  const dispatch = useDispatch()
  const financial = useSelector((state: any) => state.financial.all)

  React.useEffect(() => {
    dispatch(listAllAssetAction())
  }, [dispatch])

  return (
    <>
      <Header name="Ativos financeiros" />
      <Title text="Lista de ativos financeiros" />

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scroller}>
          {financial.length === 0 ? (
            <View style={styles.contentText}>
              <Text>Nenhum ativo disponível.</Text>
            </View>
          ) : (
            <View style={styles.listArea}>
              {financial?.map((item, k) => (
                <ItemAsset key={k} data={item} />
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default FinancialAssets
