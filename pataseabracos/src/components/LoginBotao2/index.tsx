import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface PropsButton {
  titulo: string;
  handleFunction: () => void;
}

export default function BotaoCriarConta({
  titulo,
  handleFunction,
}: PropsButton) {
  return (
    <TouchableOpacity onPress={handleFunction} activeOpacity={0.2}>
      <Text style={styles.titulo}>{titulo}</Text>
    </TouchableOpacity>
  );
}
