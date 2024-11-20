import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../screens/Login'
import { Cadastrar } from '../screens/Cadastrar'
import { Home } from '../screens/Home'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='stackLogin' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='stackCadastrar' component={Cadastrar} options={{headerShown: false}} />
        <Stack.Screen name='stackHome' component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}