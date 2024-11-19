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

export const Cadastrar = () => {

  const cadastrar = () => {
    Alert.alert("Cadastrar")
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
            <Text style={styles.titulo}>Cadastro</Text>
            <View style={styles.a} />
            <TextInputLogin placeholder="Nome" typeIcon="person" />
            <TextInputLogin placeholder="Nome de usuário" typeIcon="username" />
            <TextInputLogin placeholder="Email" typeIcon="email" />
            <TextInputLogin placeholder="Senha" typeIcon="password" hideInput={true} />
            <TextInputLogin placeholder="Confirmar Senha" typeIcon="password" hideInput={true} />
            <BotaoLogin titulo="Cadastrar" handleFunction={cadastrar} />
            <BotaoCriarConta titulo="Voltar" handleFunction={cadastrar}/>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
