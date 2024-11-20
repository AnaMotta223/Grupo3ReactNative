import { useNavigation } from "@react-navigation/native";
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
import axios from "axios";

export const Cadastrar = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const login = () => {
    navigation.navigate("stackLogin");
  };

  const cadastrar = () => {
    if (
      nome === "" ||
      username === "" ||
      email === "" ||
      senha === "" ||
      confirmaSenha === ""
    ) {
      Alert.alert("Todos os campos devem ser preenchidos");
    } else if (username !== username) {
      Alert.alert("Nome de usuário já em uso");
    } else if (email !== email) {
      Alert.alert("Email já em uso");
    } else if (senha !== confirmaSenha) {
      Alert.alert("Senha e confirma Senha não são iguais");
    } else {
      axios
        .post("https://6722c0692108960b9cc578da.mockapi.io/usuarios")
        .then(() => {
          alert("Cadastro Efeituado!");
        })
        .catch(() => {
          alert("Erro");
        });
      navigation.navigate("stackHome");
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
              placeholder="Nome"
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
