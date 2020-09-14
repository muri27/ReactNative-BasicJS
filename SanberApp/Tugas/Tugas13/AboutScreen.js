import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Plaform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class aboutScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginTop: 64}}>
                    <Text style={styles.title}>Tentang Saya</Text>
                </View>
                
                <View style={{alignItems:'center'}}>
                <View style={styles.circle}>
                    <Icon name='person' size={200} color='#CACACA'/>
                </View>
                </View>

                <View style={styles.identity}>
                    <Text style={{color: '#003366', fontSize:24, fontWeight:'bold'}}>Muhammad Rifki</Text>
                    <Text style={{color: '#3ec6ff', fontSize:16, fontWeight:'bold'}}>React Native Developer</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.portofolio}>
                    <Text style={{fontSize:18, marginTop:5, marginLeft:8, color:'#003366'}}>Portofolio</Text>
                    <View style={{width:343, height:0, borderWidth: 1}}></View>
                    <View style={styles.iconP}>
                    <View style={{alignItems:'center'}}>
                        <MaterialCommunityIcons name="gitlab" size={40} color="#3ec6ff" />
                        <Text style={{color:'#003366'}}>@muri27</Text>
                    </View>
                        <View style={{alignItems:'center'}}>
                        <MaterialCommunityIcons name="github-circle" size={40} color="#3ec6ff" />
                        <Text style={{color:'#003366'}}>@muri27</Text>
                    </View>
                    </View>
                    
                </View>

                <View style={styles.portofolio2}>
                    <Text style={{fontSize:18, marginTop:5, marginLeft:8, color:'#003366'}}>Hubungi Saya</Text>
                    <View style={{width:343, height:0, borderWidth: 1}}></View>
                    <View style={{marginLeft: 120, marginTop: 12}}>
                        <View style={{flexDirection:'row', alignItems:'center', marginBottom: 12}}>
                        <MaterialCommunityIcons name="facebook-box" size={40} color="#3ec6ff" />
                        <Text style={{marginLeft:10}}>Mu Ri</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', marginBottom: 12}}>
                        <MaterialCommunityIcons name="instagram" size={40} color="#3ec6ff" />
                        <Text style={{marginLeft:10}}>@mu_ri27</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <MaterialCommunityIcons name="twitter" size={40} color="#3ec6ff" />
                        <Text style={{marginLeft:10}}>@Noc_Ri</Text>
                        </View>
                    </View>
                </View>
                </View>
            </View>


            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#003366'
    },
    circle:{
        marginTop: 12,
        width: 200,
        height: 200,
        borderRadius: 200/2,
        alignItems:'center',
        backgroundColor: '#efefef'
    },
    identity:{
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 16
    },
    portofolio:{
        width: 350,
        height: 140,
        backgroundColor:'#efefef',
        borderRadius: 16
    },
    iconP:{
        marginTop: 19.5,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    portofolio2:{
        marginTop:9,
        width: 350,
        height: 251,
        backgroundColor:'#efefef',
        borderRadius: 16
    }
})