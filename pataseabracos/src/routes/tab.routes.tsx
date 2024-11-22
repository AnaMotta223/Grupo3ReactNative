import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilUsuario } from "../screens/Perfil";
import { Home } from "../screens/Home";
import { Mensagens } from "../screens/Mensagens";
import { CadastroPet } from "../screens/CadastroPet";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#B68458",
          borderColor: "transparent"
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
              <Entypo name="home" size={32} color='#fff' />
          )
        }}
      />

      <Tab.Screen
        name="Cadastrar"
        component={CadastroPet}
        options={{
          tabBarIcon: () => (
              <MaterialIcons name="assignment-add" size={32} color='#fff' />
          ),
          tabBarStyle: {
            display: "none",
          }
        }}
      />

      <Tab.Screen
        name="Mensagens"
        component={Mensagens}
        options={{
          tabBarIcon: () => (
              <Entypo name="chat" size={32} color='#fff' />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilUsuario}
        options={{
          tabBarIcon: () => (
              <FontAwesome6 name="circle-user" size={32} color='#fff' />
          )
        }}
      />
    </Tab.Navigator>
  );
}
