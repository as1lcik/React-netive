import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, Button } from "react-native";


const Login = () => {
    const navigation = useNavigation()

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
                    Site Kirish uchun nomer tel tering !
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Telefon raqam kiriting"
                    keyboardType="numeric"

                />
            </View>
            <View style={{justifyContent:'center', alignItems:'center',}}> 
                <Button
                    onPress={() => navigation.navigate('Code')}
                    style={{}}
                    title="Kirish"
                    color="#EE7100"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'#EE7100', marginTop:290}}>
                    Register
                </Text> 
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
        fontSize: 20,
    },
   
});

export default Login; 