import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import fundoEscuro from '../../assets/fundoEscuro.jpg'
import logo from '../../assets/logo.png'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export const Home = () => {
  
  

    return (
      <View style={styles.container}>
        
        <ImageBackground style={styles.imagemdeFundo}
        resizeMode="cover"
        source={fundoEscuro}>

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} alt='Logo do App'/>
          </View>
          <View>
            <Text style={styles.cabecalho}>Patas e Abraços</Text>
          </View>
        </View>

        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}> Animais para adoção</Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.boxAnimais}>
            <TouchableOpacity>
              <Text style={styles.tiposAnimais}>Gato</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxAnimais}>
            <TouchableOpacity>
              <Text style={styles.tiposAnimais}>Cachorro</Text>
            </TouchableOpacity>
          </View>
        </View>

        </ImageBackground>
      </View>
    )
}