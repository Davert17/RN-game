import React from "react";
import {View, Text, StyleSheet} from "react-native"
import Colors from "../Colors";

export default function GuessLogItem({roundNumber,guess}){
    return <View style={styes.listItem}>
        <Text>
            #{roundNumber}
        </Text>
        <Text>
            Opponent`s Guess: {guess}
        </Text>
    </View>
}

const styes = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent:'space-between',
        width:'100%',
        elevetion:4,
        shadowColor: 'black',
        shadowOffset: {width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    }
});