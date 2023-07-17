import React, {useMemo, useRef, useState, useEffect} from "react";
import { Text, View, StyleSheet, Alert, FlatList,useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Number from "../Game/Number";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";
import {Ionicons} from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

function generateNumberBetween(min,max,exclude){
    // TODO check this function
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateNumberBetween(min,max,exclude)
    }else{
        return rndNum;
    }
}

export default function GameScreen({userNumber,onGameOver}) { 
    const minBoundary = useRef(1);
    const maxBoundary = useRef(100);
    const firstGuess = useMemo(()=>generateNumberBetween( minBoundary.current, maxBoundary.current, userNumber),[]);
    const [currentGuess,setCurrentGuess] = useState(firstGuess);
    const [guessLog,setGuessLog] = useState([currentGuess]);
    const {width,height} = useWindowDimensions();

    function nextGuessHendler(prompt){ //prompt=> 'lower'||'higer'
        if((prompt === 'lower'&& currentGuess<userNumber)||(prompt === 'higer'&& currentGuess>userNumber)){
            Alert.alert('Don`t lie!')
            return
        }
        if(prompt === 'lower'){
            maxBoundary.current = currentGuess;
        }else{
            minBoundary.current = currentGuess + 1;
        }
        const cuttern = generateNumberBetween(minBoundary.current, maxBoundary.current);
        setGuessLog(prev=>([cuttern,...prev]))
        setCurrentGuess(cuttern);

    }
    useEffect(()=>{
        if(currentGuess===userNumber){
            onGameOver(guessLog.length);
            // Alert.alert('Congratulation!');
        }
    },[currentGuess])
    const guessesLength = guessLog.length; 
    let content = <React.Fragment>
        <Number>
            {currentGuess}
        </Number>
        <Card>
            <Subtitle style={styles.subtitle}>
                Higer or lower
            </Subtitle>
            <View style={styles.row}>
                    <View style={styles.btnWrapper}>
                        <PrimaryButton onPress={()=>nextGuessHendler('higer')}>
                            Higer  <Ionicons name="md-add" size={12}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.btnWrapper}>
                        <PrimaryButton onPress={()=>nextGuessHendler('lower')}>
                            Lower <Ionicons name="md-remove" size={12}/>
                        </PrimaryButton>
                    </View>
                </View>
        </Card>
    </React.Fragment>
    if(width > 500){
        content = < >
             <Subtitle style={styles.subtitle}>
                Higer or lower
            </Subtitle>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.btnWrapper}>
                    <PrimaryButton onPress={()=>nextGuessHendler('higer')}>
                        Higer  <Ionicons name="md-add" size={12}/>
                    </PrimaryButton>
                </View>
                <Number>
                    {currentGuess}
                </Number>
                <View style={styles.btnWrapper}>
                    <PrimaryButton onPress={()=>nextGuessHendler('lower')}>
                        Lower <Ionicons name="md-remove" size={12}/>
                    </PrimaryButton>
                </View>
            </View>
        </>
    }
    return <View style={[styles.root,{paddingTop:width > 500?30:100}]}>
        <Title>
            Opponent`s guess
        </Title>
        {content}
        <View style={{paddingTop:15}}>
            <FlatList 
                data={guessLog} 
                renderItem={(itemData)=><GuessLogItem roundNumber={guessesLength - itemData.index} guess={itemData.item} />} 
                keyExtractor={(item)=>item}    
            />
        </View>
    </View> 
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        padding:24,
        paddingTop:100,
        alignItems:'center'
    },
    row:{
        flexDirection:'row',
    },
    btnWrapper:{
        flex:1
    },
    subtitle:{
        marginBottom:20
    },
    buttonsContainerWide:{
        flexDirection:'row-reverse',
        alignItems:'center',
        gap:8
    }
});