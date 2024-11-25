import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useContext, createContext, useState, useEffect } from "react";
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
  setUsername: (value: string) => void;
  checkAuthentication: (email: string) => void;
  handleLogOut: () => void;
  isLoading: boolean;
  adocoes: PropsApi[];
  setAdocoes: (value: PropsApi[]) => void;
  cadastrados: PropsCadastro[];
  setCadastrados: (value: PropsCadastro[]) => void;
};

const AuthContext = createContext<PropsContext>({
  username: "",
  setUsername: () => {},
  setAdocoes: () => {},
  checkAuthentication: () => {},
  handleLogOut: () => {},
  isLoading: false,
  adocoes: [],
  cadastrados: [],
  setCadastrados: () => {}
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

  const handleLogOut = () => {
    AsyncStorage.removeItem("@Usuario");
    navigation.navigate("stackLogin");
  };

  const storeData = async (username: string, adocoes?: PropsApi[]) => {
    try {
      const jsonValueUser = JSON.stringify(username);
      const jsonValueAnimal = JSON.stringify(adocoes);
      const jsonValueAnimaisCadastrados = JSON.stringify(cadastrados);

      await AsyncStorage.setItem("@Usuario", jsonValueUser);
      await AsyncStorage.setItem("@Animal", jsonValueAnimal);
      await AsyncStorage.setItem("@Cadastros", jsonValueAnimaisCadastrados);

    } catch (error) {
      return null
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

      navigation.navigate("stackHome");
    } catch (error) {
      console.log("Erro ao buscar dados!");
    }
    setIsLoading(false);
  };
  

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        checkAuthentication,
        handleLogOut,
        isLoading,
        adocoes,
        setAdocoes,
        cadastrados,
        setCadastrados
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
