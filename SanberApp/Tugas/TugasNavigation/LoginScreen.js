import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, TextInput} from 'react-native';

export default function loginScreen ({navigation}) {
        return(      
            <View style={styles.container}>
                <View style={{alignItems: 'center',justifyContent:'center', paddingTop: 50}}>
                    <Image source={require('../Tugas13/image/logo.png')} style={styles.image}/>
                </View>

                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize: 24, paddingTop: 50, color:'#003366'}}>Login</Text>
                </View>
                
                <Text style={{fontSize: 16, paddingTop:40, paddingLeft: 40, color:'#003366'}}>Username/Email</Text>
                
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your username here ...'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <Text style={{fontSize: 16, paddingTop:16, paddingLeft: 40, color:'#003366'}}>Password</Text>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder='Enter your password here ...'
                        placeholderTextColor='grey'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <TouchableHighlight onPress={() => navigation.push('Drawer')} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Masuk</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            
                <View style={{alignItems:'center', marginVertical: 16, justifyContent:'center'}}>
                    <Text style={{fontSize: 24, color:'#3ec6ff'}}>atau</Text>
                </View>
            
                <View style={{alignItems:'center'}}>
                    <TouchableHighlight onPress={() => navigation.push('Register')} underlayColor="white">
                        <View style={styles.button2}>
                            <Text style={styles.buttonText}>Daftar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'white'
    },
    body:{
        marginHorizontal: 40,
        marginTop: 4,
        borderWidth: 1,
        borderColor:'#003366',
        width: 294,
        height: 48
    },
    button:{
        marginTop: 32,
        width: 140,
        height: 40,
        backgroundColor: '#3ec6ff',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent:'center'  
    },
    textInput: {
        alignSelf: 'stretch',
        paddingTop: 9,
        paddingLeft: 7,
        fontSize: 16
    },
    button2:{
        width: 140,
        height: 40,
        backgroundColor: '#003366',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent:'center'  
    },
    buttonText:{
        fontSize: 24, 
        color: '#ffffff'
    }
})