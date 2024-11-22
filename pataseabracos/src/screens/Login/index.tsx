import { useNavigation } from "@react-navigation/native";
import axios from "axios";
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
import BotaoCriarConta from "../../components/LoginBotao2";
import TextInputLogin from "../../components/LoginInput";
import { styles } from "./style";
import { Loading } from "../../components/Loading";

export const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async () => {
    setIsLoading(true);

    if (username === "" || senha === "") {
      Alert.alert("Erro", "Preencha os campos!");
    } else {
      await axios
        .get("https://6722c0392108960b9cc576f5.mockapi.io/usuarios")
        .then((response) => {
          const usuarioValido = response.data.find(
            (user: any) => user.username === username && user.senha === senha
          );

          if (!usuarioValido) {
            Alert.alert("Erro", "Usuário ou senha inválidos!");
          } else {
            navigation.navigate("stackHome");
          }
        })

        .catch((error) => {
          console.log("Erro ao consumir a api", error);
        });
        setIsLoading(false);
    }
  };

  const cadastrar = () => {
    navigation.navigate("stackCadastrar");
  };

  const handleUsername = (value: string) => {
    setUsername(value);
  };
  const handleSenha = (value: string) => {
    setSenha(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {isLoading ? (
        <Loading />
      ) : (
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
              <TextInputLogin
                placeholder="Nome de Usuário"
                typeIcon="username"
                valueInput={username}
                handleFunctionInput={handleUsername}
              />
              <TextInputLogin
                placeholder="Senha"
                typeIcon="password"
                hideInput={true}
                valueInput={senha}
                handleFunctionInput={handleSenha}
              />
              <BotaoLogin titulo="Entrar" handleFunction={login} />
              <BotaoCriarConta
                titulo="Criar Conta"
                handleFunction={cadastrar}
              />
            </View>
          </ImageBackground>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
