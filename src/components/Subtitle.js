import React from "react";
import { StyleSheet,Text } from "react-native";
import Colors from "../Colors";

export default function Subtitle({children, style={}}){
    return <Text style={[styles.instructionSubTitle,style]}>
        {children}
    </Text>
}

const styles = StyleSheet.create({
    instructionSubTitle:{
        fontSize:24,
        color:Colors.accent500

    }
});