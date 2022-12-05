import React, {useState, useEffect} from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../Colors";

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

    return <View style={styles.inputContainer}>
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
    </View>
}


const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:100,
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
    }
});