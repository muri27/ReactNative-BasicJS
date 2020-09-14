import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Plaform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class aboutScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Halaman Tambah</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center'
    }
})