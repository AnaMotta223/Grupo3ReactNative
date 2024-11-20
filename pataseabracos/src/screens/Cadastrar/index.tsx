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

export const Cadastrar = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [emailValido, setEmailValido] = useState<boolean>(false);
  const [userValido, setUserValido] = useState<boolean>(false);

  const login = () => {
    navigation.navigate("stackLogin");
  };

  const verificar = async () => {
    try {
      if (
        nome === "" ||
        username === "" ||
        email === "" ||
        senha === "" ||
        confirmaSenha === ""
      ) {
        Alert.alert("Todos os campos devem ser preenchidos");
      } else if (senha !== confirmaSenha) {
        Alert.alert("Senha e confirma Senha não são iguais");
      }

      try {
        axios
          .get("https://6722c0392108960b9cc576f5.mockapi.io/usuarios")
          .then((response) => {
            const usuarioValido = response.data.find(
              (user: any) => user.username === username
            );

            console.log("checou o user", username, usuarioValido);

            if (usuarioValido) {
              setUserValido(false);
              Alert.alert("Erro", "Username já em uso");
            } else {
              setUserValido(true);
            }
          });
      } catch (error) {
        console.log("Erro ao consumir a api", error);
      }

      try {
        axios
          .get("https://6722c0392108960b9cc576f5.mockapi.io/usuarios")
          .then((response) => {
            const usuarioValido = response.data.find(
              (user: any) => user.email === email
            );

            console.log("checou o email", email, usuarioValido);

            if (usuarioValido) {
              setEmailValido(false);
              Alert.alert("Erro", "Email já em uso");
            } else {
              setEmailValido(true);
            }
          });
      } catch (error) {
        console.log("Erro ao consumir a api", error);
      }
    } catch (error) {}
  };

  const cadastrar = async () => {
    verificar();
    if (emailValido && userValido) {
      setEmailValido(false);
      setUserValido(false);
      try {
        console.log("caiu no try");

        const response = await fetch(
          "https://6722c0392108960b9cc576f5.mockapi.io/usuarios",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: nome,
              username: username,
              email: email,
              senha: senha,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          console.log("Deu erro");
        } else {
          console.log("Deu certo");
          navigation.navigate("stackHome");
        }
      } catch (error) {
        console.log("Erro ao conectar");
      }
    }
  };

  const handleNome = (value: string) => {
    setNome(value);
  };
  const handleUsername = (value: string) => {
    setUsername(value);
  };
  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handleSenha = (value: string) => {
    setSenha(value);
  };
  const handleConfirmaSenha = (value: string) => {
    setConfirmaSenha(value);
  };

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
            <TextInputLogin
              placeholder="Nome Completo"
              typeIcon="person"
              valueInput={nome}
              handleFunctionInput={handleNome}
            />
            <TextInputLogin
              placeholder="Nome de usuário"
              typeIcon="username"
              valueInput={username}
              handleFunctionInput={handleUsername}
            />
            <TextInputLogin
              placeholder="Email"
              typeIcon="email"
              valueInput={email}
              handleFunctionInput={handleEmail}
            />
            <TextInputLogin
              placeholder="Senha"
              typeIcon="password"
              hideInput={true}
              valueInput={senha}
              handleFunctionInput={handleSenha}
            />
            <TextInputLogin
              placeholder="Confirmar Senha"
              typeIcon="password"
              hideInput={true}
              valueInput={confirmaSenha}
              handleFunctionInput={handleConfirmaSenha}
            />
            <BotaoLogin titulo="Cadastrar" handleFunction={cadastrar} />
            <BotaoCriarConta titulo="Voltar" handleFunction={login} />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
