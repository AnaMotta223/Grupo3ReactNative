import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilUsuario } from "../screens/Perfil";
import { Home } from "../screens/Home";
import { Mensagens } from "../screens/Mensagens";
import { CadastroPet } from "../screens/CadastroPet";
import { Image } from "react-native";
import { styles } from "./style";
import House from "../assets/Home.png";
import Chat from "../assets/Chat.png";
import Add from "../assets/Add.png";
import Profile from "../assets/Profile.png";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#B68458",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.navigatorIcons} source={House}></Image>
          ),
        }}
        name="TabHome"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.navigatorIcons} source={Add}></Image>
          ),
        }}
        name="Cadastrar"
        component={CadastroPet}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.navigatorIcons} source={Chat}></Image>
          ),
        }}
        name="Mansagem"
        component={Mensagens}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={styles.navigatorIcons} source={Profile}></Image>
          ),
        }}
        name="Perfil"
        component={PerfilUsuario}
      />
    </Tab.Navigator>
  );
}
