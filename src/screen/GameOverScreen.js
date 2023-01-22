import React from "react";
import { Text, View, StyleSheet, Alert, Image } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Colors from "../Colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({userNumber,roundsNumber,onStartNewGame}){
    return <View style={styles.root}>
    <Title>
        GAME OVER!
    </Title>
    <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../assets/success.png')} />
    </View>
    
    <Text style={styles.summeryText}>
       Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> guesses to reach number <Text style={styles.highlightText}>{userNumber}</Text> !
    </Text>
    <PrimaryButton onPress={onStartNewGame}>
        Start new game
    </PrimaryButton>
</View>
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:24,
        paddingTop:100,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageWrapper:{
        overflow:'hidden',
        borderRadius:150,
        width:300,
        height:300,
        borderWidth:3,
        borderColor:Colors.primary800,
        margin:36
    },
    summeryText:{
        fontFamily:'open-sans-bold',
        color:Colors.primary700,
        textAlign:'center',
        fontSize:20,
        marginVertical:20
    },
    highlightText:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    },
});