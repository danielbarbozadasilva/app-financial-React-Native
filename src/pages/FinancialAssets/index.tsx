import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { styles } from './styled'
import ItemAsset from '../../components/ItemAsset/index'
import { listAllAssetAction } from '../../store/financial_assets/financial_assets.action'
import Header from '../../components/Header/Bar'
import Title from '../../components/Title'
import { useAppSelector, useAppDispatch } from '../../hooks/index'
import { ArrayKey } from 'react-hook-form/dist/types/path/common'
import { FinancialInterface } from './types'

const FinancialAssets: React.FC = () => {
  const dispatch = useAppDispatch()
  const financial = useAppSelector((state) => state.financial.all)

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
              {financial?.map((item: FinancialInterface, k: ArrayKey) => (
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
