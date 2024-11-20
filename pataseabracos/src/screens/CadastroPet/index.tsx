import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Fundo from "../../assets/fundoClaro2.jpg";
import Seta from "../../assets/seta.png";
import { styles } from "./style";
import SelectDropdown from "react-native-select-dropdown";
import SetaBaixo from '../../assets/setaBaixo.png' 

type Emoji = {
  title: string;
};

const tipos = [
  {
    title: "CACHORRO",
  },
  {
    title: "GATO",
  },
  {
    title: "PASSARO",
  },
  {
    title:'PEIXE',
  },
  {
    title:'COELHO',
  },
  {
    title:'HAMSTER',
  },

];

const sexos = [
    {
      title:'MACHO',
    },
    {
      title:'FEMEA'
    }

];

export const CadastroPet = () => {

  const [tipoSelecionado, setTipoSelecionado] = useState<Emoji | null>(null)

  return (
    <ImageBackground source={Fundo} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={Seta} style={styles.headerimg} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cadastro de Animal</Text>
        </View>
        <View style={styles.content}>
        
        <View style={styles.dropDownCard}>
        <SelectDropdown 
        
    data={tipos}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
   
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Tipos:'} 
          </Text>
          <Image source={SetaBaixo}  />
          
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#708D73'})}}>
         
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
  </View>

          <TextInput style={styles.contentInput} placeholder="Nome:" />

          <TextInput style={styles.contentInput} placeholder="Raça:" />

          <View style={styles.dropDownCard}>
        <SelectDropdown 
        
    data={sexos}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
   
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Sexo:'}
          </Text>
          <Image source={SetaBaixo}  />
          
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#708D73'})}}>
         
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
  </View>


         

          <TextInput style={styles.contentInput} placeholder="Idade:" />

          <TextInput style={styles.contentInput} placeholder="Peso:" />

          <TextInput style={styles.contentInput} placeholder="Observações:" />

          <TextInput style={styles.contentInput} placeholder="Localidade:" />
        </View>
        <TouchableOpacity style={styles.footerBottom}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Cadastrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
