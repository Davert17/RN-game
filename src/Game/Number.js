import React from "react";
import { Text, StyleSheet, View} from "react-native";
import Colors from "../Colors";

export default function Number({children}) {
    return <View style={styles.root}>
        <Text style={styles.text}>
            {children}
        </Text>
    </View>
}

const styles = StyleSheet.create(
    {
        root:{
            borderWidth: 4,
            borderColor: Colors.accent500,
            padding:24,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent:'center',
            marginTop:8,
        },
        text:{
            color:Colors.accent500,
            fontSize:36,
            fontWeight:'bold'
        }
    }
)