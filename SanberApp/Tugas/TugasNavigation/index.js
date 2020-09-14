import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from './AboutScreen';
import Login  from './LoginScreen';
import Register  from './RegisterScreen';
import Skill from './SkillScreen';
import Project from './ProjectScreen';
import Add from './AddScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AboutStack = createStackNavigator();
const AboutStackScreen = () => {
    return(
    <AboutStack.Navigator screenOptions={{headerShown: false}}>
        <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
    );
}

const TabsScreen = () => {
    return(
    <Tabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Skill') {
            iconName = focused ? "code" : "code";
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'Project') {
            iconName = focused ? 'presentation-play' : 'presentation-play';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }else{
            iconName = focused ? 'addfile' : 'addfile';
            return <AntDesign name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#003366',
        inactiveTintColor: 'grey',
      }}>
        <Tabs.Screen name="Skill" component={Skill}/>
        <Tabs.Screen name="Project" component={Project}/>
        <Tabs.Screen name="Add" component={Add}/>
    </Tabs.Navigator>
    );
}

const DrawerScreen = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="About" component={AboutStackScreen} />
            <Drawer.Screen name="Sign Out" component={Login} />
        </Drawer.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>  
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Drawer' component={DrawerScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }