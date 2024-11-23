import {Image,ImageBackground,ScrollView,Text,TextInput,TouchableOpacity, View,} from "react-native";
import React, { useState } from "react";
import Fundo from "../../assets/fundoClaro2.jpg";
import Seta from "../../assets/seta.png";
import { styles } from "./style";
import SelectDropdown from "react-native-select-dropdown";
import SetaBaixo from "../../assets/setaBaixo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { PropsCadastro, useAuth } from "../../hooks/useAuth";
import {CustomAlert} from "../../components/CustomAlert"; 

const tipos = ["Cachorro", "Gato", "Passaro", "Peixe", "Coelho", "Hamster"];
const sexos = ["Macho", "Fêmea"];

export const CadastroPet = () => {

  const [customAlertVisible, setCustomAlertVisible] = useState<boolean>(false);
  const [alertData, setAlertData] = useState<{ title: string; message: string }>({
  title: "",
  message: "",});

  const navigation = useNavigation();

  const [tipoSelecionado, setTipoSelecionado] = useState<string | null>(null);
  const [sexoSelecionado, setSexoSelecionado] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [user, setUser] = useState("")
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [observacao, setObservacoes] = useState("");
  const [localidade, setLocalidade] = useState("");
  const { cadastrados, setCadastrados } = useAuth();

  const handleCadastro = async (value: PropsCadastro) => {
    try {

    if (!tipoSelecionado || !sexoSelecionado || !nome || !user) {
      setAlertData({
        title: "Atenção",
        message: "Preencha todos os campos obrigatórios!",
      });
      setCustomAlertVisible(true);
      return;
    }

    try {
      const sexoConvertido = sexoSelecionado === "Macho" ? "M" : sexoSelecionado === "Fêmea" ? "F" : null;

      const dadosPet = {
        tipo: tipoSelecionado ? tipoSelecionado.toUpperCase() : null, 
        sexo: sexoConvertido,
        nome,
        user,
        raca,
        idade,
        peso,
        observacao,
        localidade,
      };

      setCadastrados([...cadastrados, value]);
    
      const response = await axios.post("https://6722c0692108960b9cc578da.mockapi.io/animais", dadosPet);
      setAlertData({
        title: "Sucesso",
        message: "Pet cadastrado com sucesso!",
      });
      setCustomAlertVisible(true);

    } catch (error) {
      console.error("Erro ao cadastrar o pet:", error);
      setAlertData({
        title: "Erro",
        message: "Erro ao cadastrar o pet. Tente novamente.",
      });
      setCustomAlertVisible(true);
    }
  };

  return (
    <ImageBackground source={Fundo} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.navigate("TabHome")}>
            <Image source={Seta} style={styles.headerimg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cadastro de Animal</Text>
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        
        <View style={styles.content}>
          <View style={styles.dropDownCard}>
            <SelectDropdown
              data={tipos}
              onSelect={(selectedItem) => setTipoSelecionado(selectedItem)}
              renderButton={(selectedItem) => (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={[styles.dropdownButtonTxtStyle,selectedItem && styles.selectedTextStyle]}>
                    {selectedItem || "Tipos:"}
                  </Text>
                  <Image source={SetaBaixo} />
                </View>
              )}
              renderItem={(item, index, isSelected) => (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#708D73" }),}}>  
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>

          <TextInput
            style={styles.contentInput}
            placeholder="Nome:"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Usuário:"
            value={user}
            onChangeText={setUser}
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Raça:"
            value={raca}
            onChangeText={setRaca}
          />

          <View style={styles.dropDownCard}>
            <SelectDropdown
              data={sexos}
              onSelect={(selectedItem) => setSexoSelecionado(selectedItem)}
              renderButton={(selectedItem) => (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={[styles.dropdownButtonTxtStyle,selectedItem && styles.selectedTextStyle]}>
                    {selectedItem || "Sexo:"}
                  </Text>
                  <Image source={SetaBaixo} />
                </View>
              )}
              renderItem={(item, index, isSelected) => (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#708D73" }),}}>
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
            />
          </View>

          <TextInput
            style={styles.contentInput}
            placeholder="Idade:"
            value={idade}
            onChangeText={setIdade}
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Peso:"
            value={peso}
            onChangeText={setPeso}
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Observações:"
            value={observacao}
            onChangeText={setObservacoes}
          />

          <TextInput
            style={styles.contentInput}
            placeholder="Localidade:"
            value={localidade}
            onChangeText={setLocalidade}
          />

        </View>
        <TouchableOpacity style={styles.footerBottom} onPress={() => handleCadastro({nome,raca})}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
        <CustomAlert
         visible={customAlertVisible}
         title={alertData.title}
         message={alertData.message}
        onClose={() => setCustomAlertVisible(false)}/>
      </View>
    </ImageBackground>
  );
};
