import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import Fundo from "../../assets/fundoClaro2.jpg";
import GatoFundo from "../../assets/gatoFundo.png";
import Perfil from "../../assets/fotoPerfil.png";

import Cima from "../../assets/setaCima.png";
import Baixo from "../../assets/setaBaixo.png";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";


export const PerfilUsuario = () => {

  //Parte das navegações
const navigation = useNavigation();

  // Parte dos cards

  const [isAdocoesOpen, setIsAdocoesOpen] = useState(false);
  const [isAnimaisOpen, setIsAnimaisOpen] = useState(false);
  const [isConfiguracoesOpen, setIsConfiguracoesOpen] = useState(false);
  const { username, handleLogOut } = useAuth();

  const toggleAdocoes = () => {
    setIsAdocoesOpen(!isAdocoesOpen);
  };

  const toggleAnimais = () => {
    setIsAnimaisOpen(!isAnimaisOpen);
  };

  const toggleConfiguracoes = () => {
    setIsConfiguracoesOpen(!isConfiguracoesOpen);
  };


  // Parte da seleção de imagem
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [profileCover, setProfileCover] = useState<string | null>(null);

  const selectImage = async (type: "profile" | "cover") => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!result.granted) {
      Alert.alert("Permissão necessária", "Precisamos de acesso à galeria.");
      return;
    }

    Alert.alert("Alterar Imagem", "Escolha uma opção:", [
      { text: "Câmera", onPress: () => openCamera(type) },
      { text: "Galeria", onPress: () => openGallery(type) },
      { text: "Cancelar", style: "cancel" },
    ]);
  };

  const openCamera = async (type: "profile" | "cover") => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    handleImageResponse(result, type);
  };

  const openGallery = async (type: "profile" | "cover") => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    handleImageResponse(result, type);
  };

  const handleImageResponse = (
    result: ImagePicker.ImagePickerResult,
    type: "profile" | "cover"
  ) => {
    if (result.canceled) {
      Alert.alert("Seleção cancelada");
    } else if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      if (type === "profile") {
        setProfilePicture(uri);
      } else {
        setProfileCover(uri);
      }
    } else {
      Alert.alert("Erro", "Nenhuma imagem foi selecionada.");
    }
  };

  const handleCadastroAnimais = () => {
    navigation.navigate("stackAnimaisCadastrados");
  }

  return (
    <ImageBackground source={Fundo} style={styles.background} blurRadius={6}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <Image
              source={profileCover ? { uri: profileCover } : GatoFundo}
              style={styles.capa}
            />
          </View>

          <View style={styles.profileArea}>
            <Image
              source={profilePicture ? { uri: profilePicture } : Perfil}
              style={styles.profilePicture}
            />
            <Text style={styles.name}>{username}</Text>
          </View>

          <View style={styles.content}>
          <TouchableOpacity
            onPress={handleCadastroAnimais}
            >
            <View style={styles.contentCard}>
              <Text style={styles.cardTitle}>Seus animais para adoção</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            //onPress={stackAlgumaCoisa}
            >
            <View style={styles.contentCard}>
              <Text style={styles.cardTitle}>Suas Adoções</Text>
            </View>
            </TouchableOpacity>
            <View
              style={[
                styles.contentCard,
                { height: isConfiguracoesOpen ? 150 : 50 },
              ]}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Configurações</Text>
                <TouchableOpacity
                  style={styles.contentCardButton}
                  onPress={toggleConfiguracoes}
                >
                  <Image source={isConfiguracoesOpen ? Cima : Baixo} />
                </TouchableOpacity>
              </View>
              {isConfiguracoesOpen && (
                <View style={styles.extraInfo}>
                  <TouchableOpacity
                    onPress={() => selectImage("profile")}
                    style={styles.contentCardBottonConfig}
                  >
                    <Text style={styles.bottonConfigText}>
                      Editar foto de Perfil
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => selectImage("cover")}
                    style={styles.contentCardBottonConfig}
                  >
                    <Text style={styles.bottonConfigText}>
                      Editar capa de Perfil
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Alert.alert("Função ainda não adicionada :(")
                    }
                    style={styles.contentCardBottonConfig}
                  >
                    <Text style={styles.bottonConfigText}>
                      Editar nome de usuário
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <TouchableOpacity 
          onPress={handleLogOut}
          style={styles.footerBotton}>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Sair</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </ImageBackground>
  );
};
