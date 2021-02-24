
import 'react-native-gesture-handler';

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//-------------------------------------------------------------------
import { Button, View, TextInput, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
// import * as React from 'react';
//-------------------------------------------------------------------

import Main from './pages/Main';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Search from './pages/Search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// ----------------------------------------------------------------------- Taras PRO 193
function NamesScreen({ navigation }) {

  

  const [enteredName, setEnteredName] = useState('');

    const nameInputHandler = (enteredNameText) => {
        setEnteredName(enteredNameText); 
    };
  
  const addNameHandler = () => {
     console.log(enteredName);
  };

  const [enteredSurname, setEnteredSurname] = useState('');

    const surnameInputHandler = (enteredSurnameText) => {
        setEnteredSurname(enteredSurnameText); 
    };

    const addSurnameHandler = () => {
      console.log(enteredSurName);
   };

   let namesData = {
     nameData: enteredName,
     surnameData: enteredSurname
   }

  return (
    <View style={styles.container}>
      <Text style={styles.registrationText}>
        Для реєстрації в нашому додатку, введіть ваші дані.
      </Text>

      <TextInput
        style={styles.textInputs}
        placeholder="Ваше ім'я"
        onChangeText={nameInputHandler}
        value={enteredName}
        
      />

      <TextInput
        style={styles.textInputs}
        placeholder="Ваше прізвище"
        onChangeText={surnameInputHandler}
        value={enteredSurname}
        
      />

      <View style={styles.registerButtons}>
        <Button
          color="#f54242"
          title="Продовжити реєстрацію"
          onPress={() => {navigation.push('Email', namesData); addNameHandler; addSurnameHandler}}
        />
      </View>
    </View>
  );
}

function EmailScreen({ route }) {

  let namesData = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.registrationText}>
        Тепер, {namesData.nameData} {namesData.surnameData}, введіть вашу пошту
      </Text>

      <TextInput
        style={styles.textInputs}
        placeholder="Ваша пошта"
      />
      <View style={styles.registerButtons}>
        <Button
          color="#f54242"
          title="Go to map"
          onPress={() => navigation.navigate('Notifications')}
        />
      </View>
      <View style={styles.registerButtons}>
        <Button
          color="#f54242"
          title="Продовжити реєстрацію"
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}

function RegistrationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Names" component={NamesScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
    </Stack.Navigator>
  );
}
// -----------------------------------------------------------------------
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: 'gray',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ title: 'Tidylev',
                  headerRight: () => (
                   
                      <MaterialCommunityIcons
                        name="plus-circle-outline"
                        size="30px"
                        onPress={() => alert('This is a button!')}
                        color="gray"
                      />
                    ),
         }}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="SearchStack"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: 'gray',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        
       <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: 'Search Page' }}
      /> 
     
    </Stack.Navigator>
  );
}
function PostStack() {
  return (
    <Stack.Navigator
      initialRouteName="Post"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: 'gray',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Post"
        component={Post}
        options={{ title: 'Post page' }}
      /> 
      
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: 'gray',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile Page' }}
      /> 
      
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RegistrationStack></RegistrationStack>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Feed"
    //     tabBarOptions={{
    //       activeTintColor: 'red',
    //     }}>
        
    //     <Tab.Screen
    //       name="MainStack"
    //       component={MainStack}
    //       options={{
    //         tabBarLabel: 'Main',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={size} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="SearchStack"
    //       component={SearchStack}
    //       options={{
    //         tabBarLabel: 'Search',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons
    //             name="account-search"
    //             color={color}
    //             size={size}
    //           />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="PostStack"
    //       component={PostStack}
    //       options={{
    //         tabBarLabel: 'Post',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons
    //             name="plus"
    //             color={color}
    //             size={size}
    //           />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="ProfileStack"
    //       component={ProfileStack}
    //       options={{
    //         tabBarLabel: 'Profile',
    //         tabBarIcon: ({ color, size }) => (
    //           <MaterialCommunityIcons
    //             name="fire"
    //             color={color}
    //             size={size}
    //           />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182f61',
  },  
  registrationText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 24,
    margin: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  textInputs: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 30,
    width: '70%',
    color: 'white',
    fontSize: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    padding: '1%',
  },
  registerButtons: {
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
    // borderBottomWidth: 1,
    // borderColor: 'white',
    // borderWidth: 2,
    width: '60%',
    height: '5%',
    margin: 20,
    

  },
});

export default App;
