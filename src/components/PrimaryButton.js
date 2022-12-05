import React from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../Colors";

export default function PrimaryButton({children,onPress}){
    return <View style={styles.outerContainer}>
        <Pressable 
            onPress={onPress}
            android_ripple={{color:Colors.primary600}}
            style={({pressed})=>pressed?styles.pressed:[]}
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",
        backgroundColor:Colors.primary500,
        elevation:2
    },
    container:{
        paddingVertical:8,
        paddingHorizontal:16,

    },
    text:{
        textAlign:'center',
        color:'#ffffff'
    },
    pressed:{
        opacity:0.75
    }
});