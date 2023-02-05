import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import Header from '../../components/Header/Bar'
import {
  Container,
  Scroller,
  PageBody,
  FinancialInfoArea,
  FinancialDescriptionArea,
  FinancialDescription,
  SwiperDot,
  SwiperDotActive,
  SwiperImage,
  FakeSwiper,
  FinancialAvatar,
  FinancialInfo,
  FinancialInfoName,
  FinancialInfoPrice,
  FinancialIncrementButton,
  FinancialDecrementButton,
  FinancialQuantityArea,
  QuantityTextInput,
  CustomButton,
  CustomButtonText
} from './styled'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-swiper'
import { renderImg } from '../../utils/helpers/helpers.image'
import { NavProps } from '../../types/navigate'
import { FinancialInterface } from './types'

const FinancialAssetDetails: React.FC<FinancialInterface> = ({ route }) => {
  const { asset } = route.params
  const [count, setCount] = React.useState(1)

  const navigation = useNavigation<NavProps>()

  function increment() {
    setCount(function (prevCount) {
      if (asset.quantity > prevCount) {
        return (prevCount += 1)
      }
      return prevCount
    })
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1)
      }
      return prevCount
    })
  }

  return (
    <>
      <Container>
        <Header name="Ativo financeiro" />
        <Scroller>
          {asset?.image?.length ? (
            <Swiper
              style={{ height: 160 }}
              dot={<SwiperDot />}
              activeDot={<SwiperDotActive />}
              autoplay={true}
            >
              <SwiperImage
                source={{ uri: renderImg(asset?.image) }}
                resizeMode="cover"
              />
            </Swiper>
          ) : (
            <FakeSwiper />
          )}
          <PageBody>
            <FinancialInfoArea>
              {asset?.photos?.length ? (
                <FinancialAvatar
                  source={{ uri: renderImg(asset.image) }}
                  resizeMode="cover"
                />
              ) : (
                ''
              )}
              <FinancialInfo>
                <FinancialInfoName>{'Ativo: ' + asset.name}</FinancialInfoName>
                <FinancialInfoPrice>
                  {'Preço: ' + asset.current_price}
                </FinancialInfoPrice>
              </FinancialInfo>
            </FinancialInfoArea>
            <FinancialQuantityArea>
              <FinancialIncrementButton onPress={increment}>
                <CustomButtonText>+</CustomButtonText>
              </FinancialIncrementButton>
              <QuantityTextInput>
                {asset.quantity !== 0 ? count : 0}
              </QuantityTextInput>
              <FinancialDecrementButton onPress={decrement}>
                <CustomButtonText>-</CustomButtonText>
              </FinancialDecrementButton>
            </FinancialQuantityArea>
            <FinancialDescriptionArea>
              <FinancialDescription>{asset.description}</FinancialDescription>
            </FinancialDescriptionArea>
            <CustomButton
              onPress={() =>
                navigation.navigate('Transaction', { data: { asset, count } })
              }
            >
              <CustomButtonText>Adquirir ativo</CustomButtonText>
            </CustomButton>
          </PageBody>
        </Scroller>
      </Container>
    </>
  )
}

export default FinancialAssetDetails
