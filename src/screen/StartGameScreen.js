import React, {useState, useEffect} from "react";
import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions,ScrollView ,KeyboardAvoidingView} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";

export default function StartGameScreen({onConfirm}){
    const [enteredNumber,setEnteredNumber] = useState('');
    const {width,height} = useWindowDimensions();

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
    const marginTopDistance = height<400?30:100;

    return <ScrollView style={styles.screen}>
        <KeyboardAvoidingView behavior="position">
        <View style={[styles.root,{marginTop:marginTopDistance}]}>
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
    </KeyboardAvoidingView>
    </ScrollView>
}



const styles = StyleSheet.create({
    screen:{
        flex:1
    },
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