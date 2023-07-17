import React from "react";
import { View, StyleSheet,Dimensions } from "react-native";
import Colors from "../Colors";

export default function Card({children}){
    return <View style={styles.inputContainer}>
        {children}
    </View>
}

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:Dimensions<380?18:36,
        padding: 16,
        backgroundColor:Colors.primary700,
        borderRadius:8,
        marginHorizontal:24,
        flexDirection:'column',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:6,
        shadowOpacity:0.25,
    },
});