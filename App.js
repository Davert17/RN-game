import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import  StartGameScreen from "./src/screen/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import BGImage from "./assets/background.png"
import { useState } from 'react';
import GameScreen from './src/screen/GameScreen';
import Colors from './src/Colors';

export default function App() {
  const [userNumber, setUserNumber ] = useState(null);
  function handlePickedNumber(number){
    setUserNumber(number);
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
          {
            !userNumber
            ?<StartGameScreen onConfirm={handlePickedNumber}/>
            :<GameScreen userNumber={userNumber} />
          }          
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
