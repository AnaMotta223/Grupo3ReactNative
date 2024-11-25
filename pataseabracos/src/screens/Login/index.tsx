import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import imagemFundo from "../../assets/fundo25.png";
import logo from "../../assets/logo.png";
import { CustomAlert } from "../../components/CustomAlert";
import { Loading } from "../../components/Loading";
import BotaoLogin from "../../components/LoginBotao";
import BotaoCriarConta from "../../components/LoginBotao2";
import TextInputLogin from "../../components/LoginInput";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";


export const Login = () => {
  const navigation = useNavigation();
  const { checkAuthentication, username, setUsername, isLoading } = useAuth();
  const [customAlertVisible, setCustomAlertVisible] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<{ title: string; message: string; }>({title: "", message: ""});
  const [senha, setSenha] = useState<string>("");

  const showCustomAlert = (title: string, message: string) => {
    setAlertData({ title, message });
    setCustomAlertVisible(true);
  };

  const login = async () => {
    if (username === "" || senha === "") {
      showCustomAlert("Erro", "Preencha os campos!");
    } else {
      await axios
        .get("https://6722c0392108960b9cc576f5.mockapi.io/usuarios")
        .then((response) => {
          const usuarioValido = response.data.find(
            (user: any) => user.username === username && user.senha === senha
          );

          if (!usuarioValido) {
            showCustomAlert("Erro", "Usuário ou senha inválidos!");
          } else {
            checkAuthentication(username);
          }
        }).catch((error) => {
          console.log("Erro ao consumir a api", error);
        });
    }
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
                handleFunctionInput={(value) => setUsername(value)}
              />
              <TextInputLogin
                placeholder="Senha"
                typeIcon="password"
                hideInput={true}
                valueInput={senha}
                handleFunctionInput={(value) => setSenha(value)}
              />
              <BotaoLogin titulo="Entrar" handleFunction={login} />
              <BotaoCriarConta
                titulo="Criar Conta"
                handleFunction={() => navigation.navigate("stackCadastrar")}
              />
            </View>
          </ImageBackground>
          <CustomAlert
            visible={customAlertVisible}
            title={alertData.title}
            message={alertData.message}
            onClose={() => setCustomAlertVisible(false)}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
