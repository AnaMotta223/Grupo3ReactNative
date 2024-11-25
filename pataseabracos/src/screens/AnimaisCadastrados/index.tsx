import { useFonts, ZillaSlab_400Regular, ZillaSlab_700Bold } from "@expo-google-fonts/zilla-slab";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { FlatList, Image, ImageBackground, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import fundoEscuro from "../../assets/fundoEscuro.jpg";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/useAuth";
import { styles } from "./style";

export const AnimaisCadastrados = () => {
  const { cadastrados = [] } = useAuth();
  useFonts({
    ZillaSlab_400Regular,
    ZillaSlab_700Bold,
  });

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
            <Text style={styles.titulo}>Seus animais cadastrados</Text>
          </View>

          <View style={styles.cards}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cadastrados}
              renderItem={({ item }) => (
                <View style={[styles.boxCard, styles.elevation]}>
                  <TouchableOpacity
                    style={styles.botaoDeletar}
                  >
                    <MaterialIcons name="delete" size={30} color="red" />
                  </TouchableOpacity>
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
