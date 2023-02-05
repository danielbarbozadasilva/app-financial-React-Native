import { styles } from './styled'
import { renderImg } from '../../utils/helpers/helpers.image'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavProps } from '../../types/navigate'
import { FinancialAssetsProps } from './types'

const ItemAsset: React.FC<FinancialAssetsProps> = ({ data }) => {
  const navigation = useNavigation<NavProps>()

  const handleClick = () => {
    navigation.navigate('FinancialAssetDetails', { asset: data })
  }

  return (
    <TouchableOpacity style={styles.area} onPress={handleClick}>
      <Image
        source={{ uri: renderImg(data.image) }}
        style={styles.assetImage}
      />
      <View style={styles.infoArea}>
        <View style={styles.assetInfoArea}>
          <Text style={styles.assetName}>
            {data.name + ' BVMF: ' + data.bvmf}
          </Text>
          <Text style={styles.assetDescription}>{data.description}</Text>
          <Text style={styles.assetName}>{data.current_price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default ItemAsset
