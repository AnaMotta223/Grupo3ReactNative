import { useFonts, ZillaSlab_400Regular, ZillaSlab_700Bold } from "@expo-google-fonts/zilla-slab";
import React from "react";
import { FlatList, Image, ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import cachorro from "../../assets/cachorroCard.png";
import fundoEscuro from "../../assets/fundoEscuro.jpg";
import gato from "../../assets/gatoCard.png";
import hamster from "../../assets/hamsterCard.png";
import logo from "../../assets/logo.png";
import passaro from "../../assets/passaroCard.png";
import peixe from "../../assets/peixeCard.png";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export const AnimaisAdotados = () => {
  const { adocoes = [] } = useAuth();
  useFonts({ ZillaSlab_400Regular, ZillaSlab_700Bold });

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
            <Text style={styles.titulo}>Seus animais adotados</Text>
          </View>

          <View style={styles.cards}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={adocoes}
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
                  <View style={styles.boxInfo}>
                    <Text style={styles.name}>{`${item.nome},`}</Text>
                    <Text style={styles.name}>{item.raca}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
