import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, TextInput, Button } from "react-native";

const Password = () => {

    return (
        <SafeAreaView>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 200, }}>
                <Image
                    style={{ maxWidth: 150, maxHeight: 150, }}
                    source={require('../static/1.png')}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100, }}>
                <Text style={{ fontSize: 15, color: '#EE7100', fontWeight: 500, }}>
                    Parolni Tering
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Telefon raqam kiriting"
                    // keyboardType="numeric"
                />
            </View> 
            <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                <Text style={{fontSize:15, color:'#EE7100'}} >
                    Eslab qolish!
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Button
                    style={{}}
                    title="Keyingisi !"
                    color="#EE7100"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 350,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EE7100',
        padding: 10,
        fontSize: 17,
    },

});

export default Password;