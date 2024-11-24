import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import fundoEscuro from "../../assets/fundoEscuro.jpg";
import logo from "../../assets/logo.png";
import cachorro from "../../assets/cachorroCard.png";
import gato from "../../assets/gatoCard.png";
import passaro from "../../assets/passaroCard.png";
import hamster from "../../assets/hamsterCard.png";
import peixe from "../../assets/peixeCard.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ServiceGetAnimais } from "../../service/ServiceGetAnimais";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useFonts,
  ZillaSlab_400Regular,
  ZillaSlab_700Bold,
} from "@expo-google-fonts/zilla-slab";
import { PropsApi, useAuth } from "../../hooks/useAuth";
import axios from "axios";
interface ResponseApi {
  id: number;
  nome: string;
  raca: string;
  tipo: string;
}

const Tab = createBottomTabNavigator();

export const Home = () => {
  const [animais, setAnimais] = useState<ResponseApi[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [busca, setBusca] = useState<string>("");
  const { adocoes, setAdocoes } = useAuth();
  const [fontLoaded] = useFonts({
    ZillaSlab_400Regular,
    ZillaSlab_700Bold,
  });

  const handleInputChange = (value: string) => {
    setBusca(value);
  };

  const handleAdocoes = async (value: PropsApi) => {
    const id = adocoes.findIndex(
      (item) => String(item.id) === String(value.id)
    );
    console.log(id);

    if (id !== -1) {
      console.log("id igual");
      setAdocoes(adocoes.filter((item) => item.id !== value.id));
    } else {
      console.log("adicionado");
      setAdocoes([...adocoes, value]);
      axios.delete(`https://6722c0692108960b9cc578da.mockapi.io/animais/${value.id}`);
      console.log("Deletado");
    }
  };

  const loadApi = async () => {
    setIsloading(true);
    const response = await ServiceGetAnimais();
    if (response && response.status === 200) {
      setAnimais(response.data);
    } else {
      console.log("Erro na requisição");
    }
    setIsloading(false);
  };

  useEffect(() => {
    loadApi();
  }, []);

  const atualizarFeed = () => {
    setRefresh(true);
    loadApi();
    setRefresh(false);
  };

  const animaisFiltrados = animais.filter(
    (animal) =>
      animal.raca.toLowerCase().includes(busca.toLowerCase()) ||
      animal.tipo.toLowerCase().includes(busca.toLowerCase())
  );

  const animaisNaoAdotados = animaisFiltrados.filter(
    (animal) => !adocoes.some((adocao) => adocao.id === animal.id)
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          blurRadius={6}
          style={styles.imagemdeFundo}
          resizeMode="cover"
          source={fundoEscuro}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo} alt="Logo do App" />
            </View>
            <View>
              <Text style={styles.cabecalho}>Patas e Abraços</Text>
            </View>
          </View>

          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>Animais para adoção</Text>
            <View style={styles.boxPesquisar}>
              <Ionicons
                style={{
                  transform: [{ translateX: 35 }],
                  zIndex: 999,
                  marginTop: 8,
                }}
                name="search"
                size={28}
                color="#B68458"
              />
              <TextInput
                style={[styles.pesquisarInput]}
                value={busca}
                onChangeText={handleInputChange}
                placeholder="Pesquisar"
                placeholderTextColor="#B68458"
              />
            </View>
          </View>

          <View style={styles.cards}>
            {isLoading ? (
              <ActivityIndicator size={80} color="#ffffff" />
            ) : (
              <FlatList
                style={{ width: "100%", height: "auto", paddingLeft: "20%" }}
                refreshControl={
                  <RefreshControl
                    refreshing={refresh}
                    onRefresh={atualizarFeed}
                  />
                }
                showsVerticalScrollIndicator={true}
                data={animaisNaoAdotados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={[styles.boxCard, styles.elevation]}>
                    {item.tipo.toUpperCase() === "CACHORRO" && (
                      <Image
                        style={styles.pet}
                        source={cachorro}
                        alt="Desenho de um cachorro"
                      />
                    )}
                    {item.tipo.toUpperCase() === "GATO" && (
                      <Image
                        style={styles.pet}
                        source={gato}
                        alt="Desenho de um gato"
                      />
                    )}
                    {item.tipo.toUpperCase() === "HAMSTER" && (
                      <Image
                        style={styles.pet}
                        source={hamster}
                        alt="Desenho de um hamster"
                      />
                    )}
                    {item.tipo.toUpperCase() === "PEIXE" && (
                      <Image
                        style={styles.pet}
                        source={peixe}
                        alt="Desenho de um peixe"
                      />
                    )}
                    {item.tipo.toUpperCase() === "PASSARO" && (
                      <Image
                        style={styles.pet}
                        source={passaro}
                        alt="Desenho de um pássaro"
                      />
                    )}
                    <View style={styles.boxDetalhes}>
                      <View style={styles.boxInfo}>
                        <Text style={styles.name}>{`${item.nome},`}</Text>
                        <Text style={styles.name}>{item.raca}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.btnAdotar}
                        onPress={() => handleAdocoes(item)}
                      >
                        <Text style={styles.txtAdotar}>Adotar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
