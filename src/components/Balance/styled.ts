import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 25,
    paddingEnd: 25,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
 
  itemTitle:{
    fontSize: 18,
    color: '#DADADA'
  },
  content:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySymbol:{
    color: '#DADADA',
    marginEnd: 6
  },
  balance:{
    fontSize: 20,
    color: '#2ecc71'
  },
  patrimony:{
    fontSize: 20,
    color: '#e74e3c'
  }
})