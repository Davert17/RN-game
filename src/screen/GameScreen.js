import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import Number from "../Game/Number";

function generateNumberBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + max;
    if(rndNum === exclude){
        return generateNumberBetween(min,max,exclude)
    }else{
        return rndNum;
    }
}

export default function GameScreen({userNumber}) { 
    const [currentGuess,setCurrentGuess] = useState(generateNumberBetween(1,100,userNumber));
    return <View style={styles.root}>
        <Title>
            Opponent`s guess
        </Title>
        <Number>
            {currentGuess}
        </Number>
        <View>
            <Text>
                Higer or lower
            </Text>
    
        </View>
    </View> 
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:24,
        paddingTop:100,
    },
    title:{

        
    }
});