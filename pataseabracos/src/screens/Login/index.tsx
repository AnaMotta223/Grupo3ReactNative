import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import imagemFundo from "../../assets/fundoEscuro.jpg";
import logo from "../../assets/logo.png";
import BotaoLogin from "../../components/LoginBotao";
import TextInputLogin from "../../components/LoginInput";
import { styles } from "./style";
import BotaoCriarConta from "../../components/LoginBotao2";

export const Login = () => {

  const login = () => {
    Alert.alert("Login")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagemFundo}
          resizeMode="cover"
          source={imagemFundo}
        >
          <View style={styles.box}>
            <Image
              style={styles.logo}
              source={logo}
              alt="Logo Patas e Abraços"
            />
            <Text style={styles.titulo}>Patas e Abraços</Text>
            <TextInputLogin placeholder="Nome de Usuário" typeIcon="username" />
            <TextInputLogin placeholder="Senha" typeIcon="password" hideInput={true} />
            <BotaoLogin titulo="Entrar" handleFunction={login} />
            <BotaoCriarConta titulo="Criar Conta" handleFunction={login}/>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
