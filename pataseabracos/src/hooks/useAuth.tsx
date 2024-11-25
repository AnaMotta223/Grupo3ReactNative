import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { createContext, useContext, useEffect, useState } from "react";
export interface PropsApi {
  id: number;
  nome: string;
  tipo: string;
  raca: string;
}
export interface PropsCadastro {
  nome: string;
  raca: string;
}

type PropsContext = {
  username: string;
  isLoading: boolean;
  setUsername: (value: string) => void;
  setAdocoes: (value: PropsApi[]) => void;
  checkAuthentication: (username: string) => void;
  setCadastrados: (value: PropsCadastro[]) => void;
  handleLogOut: () => void;
  adocoes: PropsApi[];
  cadastrados: PropsCadastro[];
};

const AuthContext = createContext<PropsContext>({
  username: "",
  isLoading: false,
  setUsername: () => {},
  setAdocoes: () => {},
  checkAuthentication: () => {},
  setCadastrados: () => {},
  handleLogOut: () => {},
  adocoes: [],
  cadastrados: [],
});

export const AuthProvider = ({ children }: any) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adocoes, setAdocoes] = useState<PropsApi[]>([]);
  const [cadastrados, setCadastrados] = useState<PropsCadastro[]>([]);

  const checkAuthentication = (username: string) => {
    setIsLoading(true);
    if (username != null) {
      setTimeout(() => {
        storeData(username);
        navigation.navigate("stackHome");
        setIsLoading(false);
      }, 3000);
    }
  };

  const storeData = async (
    username: string,
    adocoes?: PropsApi[],
    cadastrados?: PropsCadastro[]
  ) => {
    try {
      const jsonValueUser = JSON.stringify(username);
      const jsonValueAnimal = JSON.stringify(adocoes);
      const jsonValueAnimaisCadastrados = JSON.stringify(cadastrados);

      await AsyncStorage.setItem("@Usuario", jsonValueUser);
      await AsyncStorage.setItem("@Animal", jsonValueAnimal);
      await AsyncStorage.setItem("@Cadastros", jsonValueAnimaisCadastrados);
    } catch (error) {
      return null;
    }
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem("@Usuario");
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setUsername(jsonValue);
      }

      const valueAnimais = await AsyncStorage.getItem("@Animal");
      if (valueAnimais !== null) {
        const jsonValue = JSON.parse(valueAnimais);
        setAdocoes(jsonValue);
      }

      const valueAnimaisCadastrados = await AsyncStorage.getItem("@Cadastros");
      if (valueAnimaisCadastrados !== null) {
        const jsonValue = JSON.parse(valueAnimaisCadastrados);
        setCadastrados(jsonValue);
      }
    } catch (error) {
      console.log("Erro ao buscar dados!");
    }
    setIsLoading(false);
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem("@Usuario");
    navigation.navigate("stackLogin");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        isLoading,
        setUsername,
        setAdocoes,
        checkAuthentication,
        setCadastrados,
        handleLogOut,
        adocoes,
        cadastrados,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
