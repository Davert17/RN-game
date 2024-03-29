import React from "react";
import {Text,StyleSheet} from "react-native";
import Colors from "../Colors";

export default function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        color: Colors.accent500,
        textAlign:'center',
        fontFamily:'open-sans-regular',
        maxWidth:'80%',
        width:300,
        alignSelf:'center',
    }
})