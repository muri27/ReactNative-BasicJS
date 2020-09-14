import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutubeUI from './Tugas/Tugas12/App';
import About from './Tugas/Tugas13/AboutScreen';
import Login from './Tugas/Tugas13/LoginScreen';
import Api from './Tugas/Tugas14/App';
import Nav from './Tugas/Tugas15/index';
import Nav2 from './Tugas/TugasNavigation/index';
import Quiz from './Tugas/Quiz3/index'


export default function App() {
  return (
    // <YoutubeUI/>
    // <About/>
    // <Login/>
    // <Api/>
    // <Nav/>
    // <Nav2 />
    <Quiz />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
