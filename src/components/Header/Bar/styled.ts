import { StatusBar, StyleSheet} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

  export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#152039',
      paddingTop: statusBarHeight - 10,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 160,
      paddingBottom: 22
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
    }
  })