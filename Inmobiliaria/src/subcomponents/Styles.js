import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    ratingCont:{
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        zIndex: 1,
        alignItems:'center',
        padding:5,
        marginTop:70,
        backgroundColor:'#ffe96e',
        borderRadius: 10,
        alignSelf:'center'
    },
    icon:{
        padding:2
    },
    rating:{
        padding:2,
        color:"#4a3600",
        fontSize:10,
        fontWeight:'bold'

    },
    imageCont:{
        
    },
    imageCard:{
        height:100,
        width:100,
        borderRadius:10
    },
    Scroll:{
        height:'100%',
        backgroundColor:'#ededed',
        padding:10
    },
    infoCont:{

    },
    Title:{
        fontSize:20,
        fontWeight:'bold',

    },
    textIcon:{
        flexDirection:'row',
        paddingHorizontal:5,
        
        
    },
    grayText:{
        paddingHorizontal:5,
        color:'#a3a3a3',
        fontSize:16,
        textAlignVertical:'center'
    },
    IconCont:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    blackText:{
        paddingHorizontal:5,
        color:'#1f1f1f',
        fontSize:16,
        textAlignVertical:'center',
        fontWeight:'600'
    },
    Price:{
        paddingHorizontal:5,
        color:'#1f1f1f',
        fontSize:20,
        textAlignVertical:'center',
        fontWeight:'700'
    }
})
