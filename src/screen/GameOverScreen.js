import React from "react";
import { Text, View, StyleSheet, Alert, Image ,Dimensions,useWindowDimensions,ScrollView} from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Colors from "../Colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({userNumber,roundsNumber,onStartNewGame}){
    const {width,height} = useWindowDimensions();
    return <ScrollView style={styles.screen}><View style={[styles.root,{paddingTop:width > 500?30:100}]}>
    <Title>
        GAME OVER!
    </Title>
    <View style={[styles.imageWrapper,createImgSize(width,height)]}>
        <Image style={styles.image} source={require('../../assets/success.png')} />
    </View>
    
    <Text style={styles.summeryText}>
       Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> guesses to reach number <Text style={styles.highlightText}>{userNumber}</Text> !
    </Text>
    <PrimaryButton onPress={onStartNewGame}>
        Start new game
    </PrimaryButton>
</View></ScrollView>
}

function createImgSize(width,height){
    return {
        borderRadius: width < 380||height<400 ? 75 : 150,
        width: width < 380 ||height<400 ? 150 : 300,
        height: width < 380 ||height<400 ? 150 : 300,
        margin:height<400?12:36
    }
}


const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    root:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageWrapper:{
        overflow:'hidden',
        borderWidth:3,
        borderColor:Colors.primary800,
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