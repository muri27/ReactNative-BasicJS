import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import dataSkill from './skillData.json';

export default class Main extends React.Component {

    

    render(){
        return(
            <View style={styles.container}>
                <View style={{alignItems: 'flex-end'}}>
                    <Image source={require('./image/logo.png')} style={styles.image}/>
                </View>
                <View style={styles.profile}>
                    <MaterialIcons name="account-circle" size={26} color="#3ec6ff"/>
                    <View style={styles.profileDesc}>
                        <Text style={styles.profileDesc1}>Hai,</Text>
                        <Text style={styles.profileDesc2}>Muhammad Rifki</Text>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleDesc}>SKILL</Text>
                    <View style={styles.titleLine}></View>
                </View>

                
                <View style={styles.category}>
                    <TouchableOpacity>
                        <View style={styles.category1}>
                            <Text style={styles.categoryDesc}>Library/Framework</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={styles.category2}>
                            <Text style={styles.categoryDesc}>Bahasa Pemrograman</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <View style={styles.category3}>
                            <Text style={styles.categoryDesc}>Teknologi</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <FlatList
                    data = {dataSkill.items}
                    renderItem = {({item}) => <View style={styles.box}>
                        <MaterialCommunityIcons name={item.iconName} size={80} color='#003366'/>
                        
                        <View>
                            <Text style={styles.boxSkill}>{item.skillName}</Text>
                            <Text style={styles.boxCategory}>{item.categoryName}</Text>
                            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                                <Text style={styles.boxPercentage}>{item.percentageProgress}</Text>
                            </View>
                        </View>
                        
                        <TouchableOpacity>
                            <Ionicons name="ios-arrow-forward" size={80} color="#003366" />
                        </TouchableOpacity>
                    </View>}
                    keyExtractor={(item) => item.id}
                    /> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image:{
        width: 187.5,
        height: 51
    },
    profile:{
        paddingTop:7,
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:16
    },
    profileDesc:{
        paddingLeft:11
    },
    profileDesc1:{
        fontSize:12,
        color:'#003366'
    },
    profileDesc2:{
        fontSize:16,
        color:'#003366'
    },
    title:{
        paddingVertical:16,
        paddingLeft:16
    },
    titleDesc:{
        fontSize:36,
        color:'#003366'
    },
    titleLine:{
        height:4,
        width:343,
        backgroundColor:'#3ec6ff'
    },
    category:{
        paddingLeft:16,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    category1:{
        backgroundColor:'#b4e9ff',
        width:135,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    category2:{
        backgroundColor:'#b4e9ff',
        width:136,
        height:32,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    category3:{
        backgroundColor:'#b4e9ff',
        width:70,
        height:32,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:8
    },
    categoryDesc:{
        fontSize:12,
        fontWeight:'bold'
    },
    box:{
        width:343,
        height:129,
        marginLeft:16, 
        marginTop:10, 
        backgroundColor:'#b4e9ff', 
        borderRadius:8, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-around'
    },
    boxSkill:{
        fontSize:24, 
        color:'#003366', 
        fontWeight:'bold'
    },
    boxCategory:{
        fontSize:16,
        color:'#3ec6ff', 
        fontWeight:'bold'
    },
    boxPercentage:{
        fontSize:48, 
        color:'#ffffff', 
        fontWeight:'bold'
    }
})