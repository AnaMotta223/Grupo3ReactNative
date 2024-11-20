import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/logo.png';
import fundoClaro from '../../assets/fundoClaro.jpg';
import homemUm from '../../assets/homem1.jpg'; // Adicione o ícone do pet
import homemDois from '../../assets/homem2.jpg';
import mulherUm from '../../assets/mulher1.jpg';
import mulherDois from '../../assets/mulher2.jpg';
import homeIcon from '../../assets/home.png'; // Ícone de casa
import chatIcon from '../../assets/mensagem.png'; // Ícone de chat
import userIcon from '../../assets/usuario.png'; // Ícone de usuário
import pranchetaIcon from '../../assets/prancheta.png'; // Ícone de usuário
import { styles } from './style';


const messages = [
  { id: '1', name: 'Dono do Noé da Silva', message: 'Direto da arca para meus braços!', icon: homemUm },
  { id: '2', name: 'Dono do Bigode', message: 'O mais novo mascote da família!', icon: homemDois },
  { id: '3', name: 'Dona da Biribinha', message: 'Meu coração agora é da Biribinha! :)', icon: mulherUm },
  { id: '4', name: 'Dona do Fernandes', message: 'Meu Spiderdog, amo muiutoo!!!', icon: mulherDois },
];

export const Mensagens = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagemdeFundo}
        resizeMode="cover"
        source={fundoClaro}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.cabecalho}>Patas e Abraços</Text>
          </View>
        </View>

        {/* Lista de Mensagens */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageCard}>
              <Image style={styles.messageIcon} source={item.icon} />
              <View>
                <Text style={styles.messageName}>{item.name}</Text>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            </View>
          )}
        />

        {/* Rodapé */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image style={styles.footerIcon} source={homeIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.footerIcon} source={pranchetaIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.footerIcon} source={chatIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.footerIcon} source={userIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
