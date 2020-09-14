import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class loginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                    <Image source={require('./image/logo.png')} style={styles.image}/>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 24, paddingTop: 70}}>Login</Text>
                </View>
                <Text style={{fontSize: 16, paddingTop:40, paddingLeft: 40}}>Username/Email</Text>
                <View style={styles.body}>
                </View>
                <Text style={{fontSize: 16, paddingTop:16, paddingLeft: 40}}>Password</Text>
                <View style={styles.body}>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.button}>
                    <Text style={{fontSize: 24, color: '#ffffff'}}>Masuk</Text>
                </View>
                </View>
                <View style={{alignItems:'center', marginVertical: 16}}>
                <Text style={{fontSize: 24, color:'#3ec6ff'}}>atau</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.button2}>
                    <Text style={{fontSize: 24, color: '#ffffff'}}>Daftar ?</Text>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    image: {
        marginTop: 63
    },
    body:{
        marginHorizontal: 40,
        marginTop: 4,
        borderWidth: 1,
        borderColor:'black',
        width: 294,
        height: 48
    },
    button:{
        marginTop: 32,
        width: 140,
        height: 40,
        backgroundColor: '#3ec6ff',
        borderRadius: 16,
        alignItems: 'center'  
    },
    button2:{
        width: 140,
        height: 40,
        backgroundColor: '#003366',
        borderRadius: 16,
        alignItems: 'center'  
    }
})