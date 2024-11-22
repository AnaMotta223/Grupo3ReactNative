import { ActivityIndicator, FlatList, Image, ImageBackground, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import fundoEscuro from '../../assets/fundoEscuro.jpg'
import logo from '../../assets/logo.png'
import cachorro from '../../assets/cachorroCard.png'
import gato from '../../assets/gatoCard.png'
import passaro from '../../assets/passaroCard.png'
import hamster from '../../assets/hamsterCard.png'
import peixe from '../../assets/peixeCard.png'
import { ServiceGetAnimais } from '../../service/ServiceGetAnimais'
import { useFonts, ZillaSlab_400Regular, ZillaSlab_700Bold  } from '@expo-google-fonts/zilla-slab'
import { useAuth } from '../../hooks/useAuth'

interface ResponseApi {
  id: number;
  nome: string;
  raca: string;
  tipo: string;
  usernameDono: string;
}

export const AnimaisCadastrados = () => {
  const [animais, setAnimais] = useState<ResponseApi[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { username } = useAuth();
  const [fontLoaded] = useFonts({
    ZillaSlab_400Regular,
    ZillaSlab_700Bold,
  });

  const loadApi = async () => {
    setIsloading(true);
    const response = await ServiceGetAnimais();
    if (response && response.status === 200) {
      const animaisCadastrados = animais.filter((animal) =>
        animal.usernameDono.
        
        
      );

      setAnimais(animaisCadastrados);
      console.log(animaisCadastrados);
    } else {
      console.log("Erro na requisição");
    }
    setIsloading(false);
  };

  useEffect(() => {
    loadApi();
  }, [])

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
          {isLoading ? (
            <ActivityIndicator size={35} color="#ffffff"/>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={animais}
              keyExtractor={item => item.id.toString()}
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
          )}
        </View>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}