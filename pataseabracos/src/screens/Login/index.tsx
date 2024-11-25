import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {Image,ImageBackground,Keyboard,Text, TouchableWithoutFeedback,View,} from "react-native";
import imagemFundo from "../../assets/fundo25.png";
import logo from "../../assets/logo.png";
import BotaoLogin from "../../components/LoginBotao";
import BotaoCriarConta from "../../components/LoginBotao2";
import TextInputLogin from "../../components/LoginInput";
import { styles } from "./style";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";
import {CustomAlert} from "../../components/CustomAlert"; 

export const Login = () => {

  const [customAlertVisible, setCustomAlertVisible] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<{ title: string; message: string }>({
  title: "",
  message: "",});

  const showCustomAlert = (title: string, message: string) => {
    setAlertData({ title, message });
    setCustomAlertVisible(true);
  };
  
  const navigation = useNavigation();

  //const [username, setUsername] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  //const [isLoading, setIsLoading] = useState<boolean>(false);
  const { checkAuthentication, username, setUsername, isLoading } = useAuth();

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
              console.log("passei aqui");
              
              checkAuthentication(username);
            }
          })
  
          .catch((error) => {
            console.log("Erro ao consumir a api", error);
          });
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
          <CustomAlert
          visible={customAlertVisible}
          title={alertData.title}
          message={alertData.message}
          onClose={() => setCustomAlertVisible(false)}/>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
