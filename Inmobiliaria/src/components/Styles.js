import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    Card:{
        display: "flex",
        flexDirection: "row",
        backgroundColor:'#e1f0ed',
        marginBottom: 10,
        padding: 12,
        height:130,
        width:'100%',
        borderRadius: 20
    },
    ImageCont:{
        display:"flex",
        height:"100%",
        justifyContent:"center",
        paddingRight:20,
        width: 120
    },
    InfoCont:{
        display:"flex",
        width:'65%',
        justifyContent:"center"
    }
});