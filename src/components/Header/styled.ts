import { StatusBar, StyleSheet} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

  export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#8000ff',
      paddingTop: statusBarHeight,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 26,
      paddingBottom: 44
    },
    content: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    userName: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold'
    },
    buttonUser: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(255,255,255,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 44 / 2,
      marginStart: 30
    }
  })