import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    area:{
        backgroundColor: '#ffffff',
        borderWidth: 0.5,
        borderColor: '#ccc',
        marginBottom: 20,
        padding: 5,
        flexDirection: 'row'
    },
    assetImage:{
        width: 75,
        height: 85,
        margin: 10,
        textAlign: 'center',
        borderRadius: 20
    },    
    infoArea:{
        marginStart: 20,
        justifyContent: 'space-between'
    },
    assetInfoArea:{
        width: 230,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    assetName:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    assetDescription:{
        fontSize: 14,
        color: "#a39c9c"
    }
})
