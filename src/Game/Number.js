import React from "react";
import { Text, StyleSheet, View, Dimensions} from "react-native";
import Colors from "../Colors";

export default function Number({children}) {
    return <View style={styles.root}>
        <Text style={styles.text}>
            {children}
        </Text>
    </View>
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create(
    {
        root:{
            borderWidth: 4,
            borderColor: Colors.accent500,
            padding: deviceWidth < 380? 12:24,
            borderRadius: deviceWidth < 380? 12 : 24,
            alignItems: 'center',
            justifyContent:'center',
            marginTop:8,
        },
        text:{
            color:Colors.accent500,
            fontSize:deviceWidth < 380 ? 28 : 36,
            fontWeight:'bold'
        }
    }
)