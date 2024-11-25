import { useFonts, ZillaSlab_400Regular, ZillaSlab_700Bold } from "@expo-google-fonts/zilla-slab";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import cachorro from "../../assets/cachorroCard.png";
import fundoEscuro from "../../assets/fundoEscuro.jpg";
import gato from "../../assets/gatoCard.png";
import hamster from "../../assets/hamsterCard.png";
import logo from "../../assets/logo.png";
import passaro from "../../assets/passaroCard.png";
import peixe from "../../assets/peixeCard.png";
import { PropsApi, useAuth } from "../../hooks/useAuth";
import { ServiceGetAnimais } from "../../service/ServiceGetAnimais";
import { styles } from "./style";
interface ResponseApi {
  id: number;
  nome: string;
  raca: string;
  tipo: string;
}

export const HomeAdmin = () => {
  const [animais, setAnimais] = useState<ResponseApi[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [busca, setBusca] = useState<string>("");
  const { adocoes, setAdocoes } = useAuth();
  useFonts({ ZillaSlab_400Regular, ZillaSlab_700Bold });

  const handleAdocoes = async (value: PropsApi) => {
    const id = adocoes.findIndex(
      (item) => String(item.id) === String(value.id)
    );

    if (id !== -1) {
      setAdocoes(adocoes.filter((item) => item.id !== value.id));
    } else {
      setAdocoes([...adocoes, value]);
      axios.delete(
        `https://6722c0692108960b9cc578da.mockapi.io/animais/${value.id}`
      );
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

  const deletarAnimal = (id: number) => {
    try {
      setIsloading(true);
      axios.delete(`https://6722c0692108960b9cc578da.mockapi.io/animais/${id}`);
      Alert.alert("Animal deletado!");
    } catch (erro) {
      console.log("Erro ao deletar ", erro);
    } finally {
      setIsloading(false);
      loadApi();
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  const animaisFiltrados = animais.filter(
    (animal) =>
      animal.raca.toLowerCase().includes(busca.toLowerCase()) ||
      animal.tipo.toLowerCase().includes(busca.toLowerCase())
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
                style={styles.icones}
                name="search"
                size={28}
                color="#B68458"
              />
              <TextInput
                style={[styles.pesquisarInput]}
                value={busca}
                onChangeText={(value) => setBusca(value)}
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
                showsVerticalScrollIndicator={false}
                data={animaisFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={[styles.boxCard, styles.elevation]}>
                    {item.tipo.toUpperCase() === "CACHORRO" && (
                      <>
                        <TouchableOpacity
                          style={styles.iconeDelete}
                          onPress={() => deletarAnimal(item.id)}
                        >
                          <MaterialIcons name="delete" size={40} color="red" />
                        </TouchableOpacity>
                        <Image
                          style={styles.pet}
                          source={cachorro}
                          alt="Desenho de um cachorro"
                        />
                      </>
                    )}
                    {item.tipo.toUpperCase() === "GATO" && (
                      <>
                        <TouchableOpacity
                          style={styles.iconeDelete}
                          onPress={() => deletarAnimal(item.id)}
                        >
                          <MaterialIcons name="delete" size={40} color="red" />
                        </TouchableOpacity>
                        <Image
                          style={styles.pet}
                          source={gato}
                          alt="Desenho de um gato"
                        />
                      </>
                    )}
                    {item.tipo.toUpperCase() === "HAMSTER" && (
                      <>
                        <TouchableOpacity
                          style={styles.iconeDelete}
                          onPress={() => deletarAnimal(item.id)}
                        >
                          <MaterialIcons name="delete" size={40} color="red" />
                        </TouchableOpacity>
                        <Image
                          style={styles.pet}
                          source={hamster}
                          alt="Desenho de um hamster"
                        />
                      </>
                    )}
                    {item.tipo.toUpperCase() === "PEIXE" && (
                      <>
                        <TouchableOpacity
                          style={styles.iconeDelete}
                          onPress={() => deletarAnimal(item.id)}
                        >
                          <MaterialIcons name="delete" size={40} color="red" />
                        </TouchableOpacity>
                        <Image
                          style={styles.pet}
                          source={peixe}
                          alt="Desenho de um peixe"
                        />
                      </>
                    )}
                    {item.tipo.toUpperCase() === "PASSARO" && (
                      <>
                        <TouchableOpacity
                          style={styles.iconeDelete}
                          onPress={() => deletarAnimal(item.id)}
                        >
                          <MaterialIcons name="delete" size={40} color="red" />
                        </TouchableOpacity>
                        <Image
                          style={styles.pet}
                          source={passaro}
                          alt="Desenho de um pássaro"
                        />
                      </>
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
