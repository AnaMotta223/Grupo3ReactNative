import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./style";
import logo from "../../assets/logo.png";

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} alt="Logo do App" />
      <Text style={styles.name}>Patas e Abraços</Text>
      <ActivityIndicator size={70} color="#708D73" />
    </View>
  );
};
