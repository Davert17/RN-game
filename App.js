import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import  StartGameScreen from "./src/screen/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import BGImage from "./assets/background.png"
import { useState } from 'react';
import GameScreen from './src/screen/GameScreen';
import GameOverScreen from './src/screen/GameOverScreen';
import Colors from './src/Colors';
import {  useMemo } from 'react';
import {useFonts} from "expo-font";

export default function App() {
  const [userNumber, setUserNumber ] = useState(null);
  const [isGameOver,setGameOver] = useState(false);
  const [guessRound,setGuessRounds] = useState(0);
  function handlePickedNumber(number){
    setUserNumber(number);
  }
  function handleGameOver (numberOfGuesses){
    setGameOver(true);
    setGuessRounds(numberOfGuesses);
  }
  function StartNewGame(){
    setUserNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }
  const [fontsLoaded] = useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
  const Screen = useMemo(()=>{
    if(!userNumber){
      return <StartGameScreen onConfirm={handlePickedNumber}/>
    }
     if(!isGameOver){
      return  <GameScreen userNumber={userNumber} onGameOver={handleGameOver} onGuess={setGuessRounds} />
     }
     return <GameOverScreen userNumber={userNumber} roundsNumber={guessRound} onStartNewGame={StartNewGame} />
  }
  ,[userNumber,isGameOver])
  if(!fontsLoaded){
    return null
  }
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.container}>
      <ImageBackground 
        source={BGImage} 
        resizeMode={"cover"} 
        style={styles.container}
        imageStyle={styles.image}
      >
        
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          {Screen}          
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    opacity:0.15
  }
});
