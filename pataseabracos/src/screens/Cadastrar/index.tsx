import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { CustomAlert } from "../../components/CustomAlert";

interface PropsApi {
  email: string;
  username: string;
}

export const Cadastrar = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [users, setUsers] = useState<PropsApi[]>([]);

  const [customAlertVisible, setCustomAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState<{
    title: string;
    message: string;
  }>({
    title: "",
    message: "",
  });

  const showCustomAlert = (title: string, message: string) => {
    setAlertData({ title, message });
    setCustomAlertVisible(true);
  };

  const login = () => {
    navigation.navigate("stackLogin");
  };

  const loadUsers = async () => {
    try {
      const response = await axios.get(
        "https://6722c0392108960b9cc576f5.mockapi.io/usuarios"
      );

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log("Erro na função loadUsers", error);
    }
  };

  const verificar = async () => {
    if (
      nome === "" ||
      username === "" ||
      email === "" ||
      senha === "" ||
      confirmaSenha === ""
    ) {
      showCustomAlert("Erro", "Todos os campos devem ser preenchidos");
      return;
    } else if (senha !== confirmaSenha) {
      showCustomAlert("Erro", "Senha e confirmar senha não são iguais");
    }

    try {
      const usuarioValido = users.some(
        (user) => user.email === email || user.username === username
      );

      if (usuarioValido) {
        showCustomAlert("Erro", "Email ou username já estão em uso");
      } else {
        cadastro();
      }
    } catch (error) {
      console.log("Erro ao consumir a api", error);
    }
  };

  const cadastro = async () => {
    try {
      const response = await axios.post(
        "https://6722c0392108960b9cc576f5.mockapi.io/usuarios",
        {
          nome: nome,
          username: username,
          email: email,
          senha: senha,
        }
      );

      if (response.status === 200 || response.status === 201) {
        showCustomAlert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("stackHome");
      } else {
        console.log("Erro ao cadastrar", response);
      }
    } catch (error) {
      console.log("Erro na requisição ", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
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
              handleFunctionInput={(value) => setNome(value)}
            />
            <TextInputLogin
              placeholder="Nome de usuário"
              typeIcon="username"
              valueInput={username}
              handleFunctionInput={(value) => setUsername(value)}
            />
            <TextInputLogin
              placeholder="Email"
              typeIcon="email"
              valueInput={email}
              handleFunctionInput={(value) => setEmail(value)}
            />
            <TextInputLogin
              placeholder="Senha"
              typeIcon="password"
              hideInput={true}
              valueInput={senha}
              handleFunctionInput={(value) => setSenha(value)}
            />
            <TextInputLogin
              placeholder="Confirmar Senha"
              typeIcon="password"
              hideInput={true}
              valueInput={confirmaSenha}
              handleFunctionInput={(value) => setConfirmaSenha(value)}
            />
            <BotaoLogin titulo="Cadastrar" handleFunction={verificar} />
            <BotaoCriarConta titulo="Voltar" handleFunction={login} />
          </View>
        </ImageBackground>
        <CustomAlert
          visible={customAlertVisible}
          title={alertData.title}
          message={alertData.message}
          onClose={() => setCustomAlertVisible(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
