import { useFonts, ZillaSlab_700Bold } from "@expo-google-fonts/zilla-slab";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import fundoClaro from "../../assets/fundoClaro.jpg";
import homemUm from "../../assets/homem1.jpg";
import homemDois from "../../assets/homem2.jpg";
import logo from "../../assets/logo.png";
import mulherUm from "../../assets/mulher1.jpg";
import mulherDois from "../../assets/mulher2.jpg";
import { styles } from "./style";

interface Message {
  id: string;
  name: string;
  message: string;
  icon: any;
}

const messages: Message[] = [
  {
    id: "1",
    name: "Dono do Noé da Silva",
    message:
      "Direto da arca para meus braços!\n Adotar foi a melhor escolhe que eu poderia fazer! \n Adote!!! :)",
    icon: homemUm,
  },
  {
    id: "2",
    name: "Dono do Bigode",
    message:
      "Bigode é mais novo mascote da família!\n Ele é pura diversão e trouxe muita alegria pra nossa casa!",
    icon: homemDois,
  },
  {
    id: "3",
    name: "Dona da Biribinha",
    message:
      "Meu coração agora é da Biribinha! :)\n Ela é a melhor companheira que alguém pode ter!",
    icon: mulherUm,
  },
  {
    id: "4",
    name: "Dona do Fernandes",
    message:
      "Meu Spider-dog, amo muitoo!!!\n O quão divertido ele é, e como ele se tornou parte essencial da minha vida!",
    icon: mulherDois,
  },
];

export const Mensagens = () => {
  const navigation = useNavigation();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useFonts({ ZillaSlab_700Bold });

  const openModal = (message: Message) => {
    setSelectedMessage(message);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedMessage(null);
  };

  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagemdeFundo}
          resizeMode="cover"
          source={fundoClaro}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo} />
              <Text style={styles.cabecalho}>Patas e Abraços</Text>
            </View>
          </View>

          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.messageCard}>
                <Image style={styles.messageIcon} source={item.icon} />
                <View>
                  <Text style={styles.messageName}>{item.name}</Text>
                  <Text style={styles.messageText}>
                    {item.message.slice(0, 50)}...
                  </Text>
                  <TouchableOpacity
                    style={styles.popupButton}
                    onPress={() => openModal(item)}
                  >
                    <Text style={styles.popupButtonText}>Ler Mais</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {selectedMessage && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={isModalVisible}
              onRequestClose={closeModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>{selectedMessage.name}</Text>
                  <Image
                    style={styles.modalImage}
                    source={selectedMessage.icon}
                  />
                  <Text style={styles.modalMessage}>
                    {selectedMessage.message}
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={closeModal}
                    >
                      <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("stackChat")}
                    >
                      <Text style={styles.buttonText}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
