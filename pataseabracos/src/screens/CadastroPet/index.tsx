import {Image,ImageBackground,Text,TextInput,TouchableOpacity, View,} from "react-native";
import React, { useState } from "react";
import Fundo from "../../assets/fundoClaro2.jpg";
import Seta from "../../assets/seta.png";
import { styles } from "./style";
import SelectDropdown from "react-native-select-dropdown";
import SetaBaixo from "../../assets/setaBaixo.png";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const tipos = ["Cachorro", "Gato", "Passaro", "Peixe", "Coelho", "Hamster"];

const sexos = ["Macho", "Fêmea"];


export const CadastroPet = () => {

  const navigation = useNavigation();

  const [tipoSelecionado, setTipoSelecionado] = useState<string | null>(null);
  const [sexoSelecionado, setSexoSelecionado] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [observacao, setObservacoes] = useState("");
  const [localidade, setLocalidade] = useState("");

  const handleCadastro = async () => {
    try {

      const sexoConvertido = sexoSelecionado === "Macho" ? "M" : sexoSelecionado === "Fêmea" ? "F" : null;

      const dadosPet = {
        tipo: tipoSelecionado ? tipoSelecionado.toUpperCase() : null, 
        sexo: sexoConvertido,
        nome,
        raca,
        idade,
        peso,
        observacao,
        localidade,
      };

      console.log("Enviando dados:", dadosPet);

      const response = await axios.post("http://192.168.0.9:8080/animais", dadosPet);
      console.log("Resposta da API:", response.data);

      alert("Pet cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o pet:", error);
      alert("Erro ao cadastrar o pet. Tente novamente.");
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
                    ...(isSelected && { backgroundColor: "#708D73" }),
                  }}
                >
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
                    ...(isSelected && { backgroundColor: "#708D73" }),
                  }}
                >
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
        <TouchableOpacity style={styles.footerBottom} onPress={handleCadastro}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
