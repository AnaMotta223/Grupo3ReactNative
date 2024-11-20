import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import Fundo from "../../assets/fundoClaro2.jpg";
import GatoFundo from "../../assets/gatoFundo.png";
import Perfil from "../../assets/fotoPerfil.png";
import Cima from "../../assets/setaCima.png"
import Baixo from "../../assets/setaBaixo.png"

export const PerfilUsuario = () => {
  
  const [isAdocoesOpen, setIsAdocoesOpen] = useState(false);
  const [isAnimaisOpen, setIsAnimaisOpen] = useState(false);
  const [isConfiguracoesOpen, setIsConfiguracoesOpen] = useState(false);

  const toggleAdocoes = () => {
    setIsAdocoesOpen(!isAdocoesOpen);
  };

  const toggleAnimais = () => {
    setIsAnimaisOpen(!isAnimaisOpen);
  };

  const toggleConfiguracoes = () => {
    setIsConfiguracoesOpen(!isConfiguracoesOpen);
  };


  return (
    <ImageBackground source={Fundo} style={styles.background} blurRadius={6}>

      
      <View style={styles.container}>

      <ScrollView style={styles.scroll}>

        <View style={styles.header}>
          <Image source={GatoFundo} style={styles.capa} />
        </View>

        <View style={styles.profileArea}>
          <Image source={Perfil} style={styles.profilePicture} />
          <Text style={styles.name}>Noé da Silva</Text>
        </View>


        <View style={styles.content}>

          <View style={[styles.contentCard, {height: isAdocoesOpen ? 150: 50}]}>
            <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Suas Adoções</Text>
            <TouchableOpacity style={styles.contentCardButton} onPress={toggleAdocoes}>
              <Image source={isAdocoesOpen ? Cima : Baixo}/>
            </TouchableOpacity>
            </View>
            {isAdocoesOpen && (
              <View style = {styles.extraInfo}>
                <Text>As parada do bauglho das adoção</Text>
              </View>
            )}
          </View>

          <View style={[styles.contentCard, {height: isAnimaisOpen ? 150: 50}]}>
            <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Seus animais para adoção</Text>
            <TouchableOpacity style={styles.contentCardButton} onPress={toggleAnimais}>
              <Image source={isAnimaisOpen ? Cima : Baixo}/>
            </TouchableOpacity>
            </View>
            {isAnimaisOpen && (
              <View style = {styles.extraInfo}>
                <Text>As parada do bauglho das adoção</Text>
              </View>
            )}
          </View>

          <View style={[styles.contentCard, {height: isConfiguracoesOpen ? 150: 50}]}>
            <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Configurações</Text>
            <TouchableOpacity style={styles.contentCardButton} onPress={toggleConfiguracoes}>
              <Image source={isConfiguracoesOpen ? Cima : Baixo}/>
            </TouchableOpacity>
            </View>
            {isConfiguracoesOpen && (
              <View style = {styles.extraInfo}>
                <TouchableOpacity
                onPress={() => Alert.alert ("Função ainda não adicionada :(")}>
                  <Text>Modo Escuro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Alert.alert ("Função ainda não adicionada :(")}>
                  <Text>Editar foto de Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Alert.alert ("Função ainda não adicionada :(")}>
                  <Text>Editar nome de usuario</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => Alert.alert ("Função ainda não adicionada :(")}>
                  <Text>Editar capa de Perfil</Text>
                </TouchableOpacity>
                <Text>TEste</Text>
                <Text>TEste</Text>
                <Text>TEste</Text>


              </View>
            )}
          </View>

        </View>

        <TouchableOpacity style = {styles.footerBotton}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Sair</Text>
          </View>
        </TouchableOpacity>
        
        </ScrollView>

        </View>
    </ImageBackground>
  );
};
