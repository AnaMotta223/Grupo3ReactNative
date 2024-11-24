import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./style";
import logo from "../../assets/logo.png";
import {
  useFonts,
  ZillaSlab_400Regular,
  ZillaSlab_700Bold,
} from "@expo-google-fonts/zilla-slab";

export const Loading = () => {
  useFonts({
    ZillaSlab_400Regular,
    ZillaSlab_700Bold,
  });
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} alt="Logo do App" />
      <Text style={styles.name}>Patas e Abraços</Text>
      <ActivityIndicator size={70} color="#708D73" />
    </View>
  );
};
