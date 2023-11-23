import React from "react";
import { Image, SafeAreaView, Text, TextInput, View, StyleSheet, Button } from "react-native";

const Code = () => {

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
                    Telefonga kelgan kodni kirgizing !
                </Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="cmc"

                />
            </View>
            <View style={{justifyContent:'center'}}>
                <Text style={{fontSize:15, padding:10}}>
                    Keyingi Cmc 30 seconddan keyin !
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin:10 }}>
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
        fontSize: 20,
    },

});

export default Code;