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
import imagemFundo from "../../assets/fundo25.png";
import logo from "../../assets/logo.png";
import BotaoLogin from "../../components/LoginBotao";
import TextInputLogin from "../../components/LoginInput";
import { styles } from "./style";
import BotaoCriarConta from "../../components/LoginBotao2";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const login = () => {
    if (username === "" || senha === "") {
      Alert.alert("Erro", "Preencha os campos!")
    } else if (username !== "Julia" || senha !== "123") {
      Alert.alert("Erro", "Usuário ou senha inválidos!")
    } else {
      navigation.navigate('stackHome')
    }



  }
  
  const cadastrar = () => {
    navigation.navigate('stackCadastrar')
  }

  const handleUsername = (value: string) => {
    setUsername(value)
  }
  const handleSenha = (value: string) => {
    setSenha(value)
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
            <TextInputLogin placeholder="Nome de Usuário" typeIcon="username" valueInput={username} handleFunctionInput={handleUsername}/>
            <TextInputLogin placeholder="Senha" typeIcon="password" hideInput={true} valueInput={senha} handleFunctionInput={handleSenha}/>
            <BotaoLogin titulo="Entrar" handleFunction={login} />
            <BotaoCriarConta titulo="Criar Conta" handleFunction={cadastrar}/>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
