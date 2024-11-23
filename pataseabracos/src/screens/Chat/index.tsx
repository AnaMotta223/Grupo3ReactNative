import React, { useState, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './style';
import fundoClaro from '../../assets/fundoClaro.jpg';
import Seta from '../../assets/seta.png'; 
import { useFonts, ZillaSlab_400Regular, ZillaSlab_700Bold } from '@expo-google-fonts/zilla-slab';


interface Message {
  id: string;
  text: string;
  sender: 'Usuario' | 'Remetente';
  options?: string[];
}

const instructions: { [key: string]: string } = {
  'Cuidados com seu gatinho': 'Alimente-o com ração adequada, mantenha a caixa de areia limpa, e leve ao veterinário regularmente.',
  'Cuidados com seu doguinho': 'Ofereça passeios diários, ração balanceada e muito carinho. Não esqueça de vacinar e desvermifugar.',
  'Cuidados com seu hamster': 'Mantenha a gaiola limpa, ofereça uma dieta variada com sementes e frutas, e certifique-se de que ele tenha espaço para se exercitar.',
  'Cuidados com seu peixinho': 'Troque a água regularmente, mantenha o aquário limpo e alimente com a quantidade certa para evitar sobrealimentação.',
  'Cuidados com seu pássaro': 'Ofereça uma dieta rica em sementes, frutas e vegetais. Mantenha a gaiola limpa, proporcione espaço para o pássaro voar e, se possível, permita que ele tenha interação social e estimulação mental.',
};

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]); 
  const [inputText, setInputText] = useState(''); 
  const [selectedCard, setSelectedCard] = useState<string | null>(null); 
  const flatListRef = useRef<FlatList<Message>>(null); 
  const navigation = useNavigation(); 
  useFonts({
    ZillaSlab_400Regular,
    ZillaSlab_700Bold,
  });

  const remetenteResponses = [
    {
      text: 'Sobre qual pet você quer aprender mais?',
      options: [
        'Cuidados com seu gatinho',
        'Cuidados com seu doguinho',
        'Cuidados com seu hamster',
        'Cuidados com seu peixinho',
        'Cuidados com seu pássaro',
      ],
    },
  ];

  const sendMessage = (text: string) => {
    if (text.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'Usuario',
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText('');

    if (instructions[text]) {
      setSelectedCard(text);
    } else {
      setTimeout(() => {
        const remetenteMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: remetenteResponses[0].text,
          sender: 'Remetente',
          options: remetenteResponses[0].options,
        };

        setMessages((prevMessages) => [...prevMessages, remetenteMessage]);
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 1000);
    }
  };

  const handleOptionSelect = (option: string) => {
    sendMessage(option);
  };

  // Renderização das mensagens
  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.message, item.sender === 'Usuario' ? styles.yourMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
      {item.options && (
        <View style={styles.optionsContainer}>
          {item.options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleOptionSelect(option)}>
              <Text style={styles.optionButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <ImageBackground style={styles.imagemdeFundo} resizeMode="cover" source={fundoClaro}>
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Seta} style={styles.headerimg} />
          </TouchableOpacity> 
          <Text style={styles.headerTitle}>Chat de Cuidados para seu Pet</Text>
        </View>

        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />

        {selectedCard && instructions[selectedCard] && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{selectedCard}</Text>
            <Text style={styles.cardText}>{instructions[selectedCard]}</Text>
            <TouchableOpacity style={styles.cardCloseButton} onPress={() => setSelectedCard(null)}>
              <Text style={styles.cardCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#333"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.enviarButton} onPress={() => sendMessage(inputText)}>
            <Text style={styles.enviarButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Chat;
