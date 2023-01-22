import React, {useState, useEffect} from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";

export default function StartGameScreen({onConfirm}){
    const [enteredNumber,setEnteredNumber] = useState('');
    function handleConfirmInput(){
        const confirmdNumber = parseInt(enteredNumber);
        if(isNaN(confirmdNumber) || confirmdNumber <=0 || confirmdNumber>99){
            Alert.alert(
                'Invalid number!',
                ' Please passnumber in range 1-99.',
                [{text:'Ok',style:'destructive',onPress:()=>{
                    setEnteredNumber('');
                }}]
            )
            return;
        }
        onConfirm(confirmdNumber)
    }

    return <View style={styles.root}>
        <Title>
            Guess my number
        </Title>
        <Card>
            <Subtitle>
                Enter number
            </Subtitle>
            <TextInput 
                style={styles.numberInput} 
                keyboardType={'number-pad'} 
                maxLength={2}
                value={enteredNumber}
                onChangeText={(enteredText)=>{
                    setEnteredNumber(enteredText);
                }}
            />
            <View style={styles.buttonConteiner}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton onPress={()=>{
                        setEnteredNumber('');
                    }}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton 
                        onPress={handleConfirmInput} 
                    >
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
}


const styles = StyleSheet.create({
    root:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    numberInput:{
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color:  Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
        textAlign:'center',

    },
    buttonConteiner:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttonWrapper:{
        width:'50%'
    },

});