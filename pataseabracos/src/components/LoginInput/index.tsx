import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface PropsInput {
  placeholder: string;
  hideInput?: boolean;
  valueInput: string;
  handleFunctionInput?: (value: string) => void;
  typeIcon?: string;
}

export default function TextInputLogin({
  placeholder,
  hideInput,
  valueInput,
  handleFunctionInput,
  typeIcon,
}: PropsInput) {
  const [viewPassword, setViewPassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={valueInput}
        onChangeText={handleFunctionInput}
        placeholder={placeholder}
        placeholderTextColor={"#311A05"}
        secureTextEntry={typeIcon === "password" ? viewPassword : hideInput}
      />
      <View style={styles.icon}>
        {typeIcon === "person" && (
          <FontAwesome5 name="user-alt" size={24} color="#311A05" />
        )}
        {typeIcon === "username" && (
          <MaterialIcons name="alternate-email" size={24} color="#311A05" />
        )}
        {typeIcon === "email" && (
          <MaterialIcons name="email" size={24} color="#311A05" />
        )}
        {typeIcon === "password" && (
          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            {viewPassword ? (
              <Ionicons name="eye" size={24} color="#311A05" />
            ) : (
              <Ionicons name="eye-off-sharp" size={24} color="#311A05" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
