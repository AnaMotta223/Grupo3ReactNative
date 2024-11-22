import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useContext, createContext, useState, useEffect } from 'react'

export interface PropsApi {
        id: number,
        nome: string,
        tipo: string,
        raca: string
}

type PropsContext = {
  username: string;
  setUsername: (value: string) => void;
  checkAuthentication: (email: string) => void;
  handleLogOut: () => void;
  isLoading: boolean;
  adocoes: PropsApi[];
  setAdocoes: (value: PropsApi[]) => void;
}

const AuthContext = createContext<PropsContext>({
  username: '',
  setUsername: () => { },
  setAdocoes: () => { },
  checkAuthentication: () => { },
  handleLogOut: () => { },
  isLoading: false,
  adocoes: []
})

export const AuthProvider = ({ children }: any) => {

  const navigation = useNavigation();

  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ adocoes, setAdocoes ] = useState<PropsApi[]>([]);

  const checkAuthentication = (username: string) => {
    setIsLoading(true);

    if (username != null) {
        setTimeout(() => {
          storeData(username);
          navigation.navigate("stackHome");
        }, 3000);
      }
      setIsLoading(false);
};
  
const handleLogOut = () => {
  AsyncStorage.removeItem('@User');
  navigation.navigate("stackLogin");
}

const storeData = async (username: string, adocoes?: PropsApi[]) => {
  try {
    const jsonValueUser = JSON.stringify(username);
    const jsonValueAnimal = JSON.stringify(adocoes);
    await AsyncStorage.setItem('@User', jsonValueUser);
    await AsyncStorage.setItem('@Animal', jsonValueAnimal);

    // const jsonValueUser = JSON.stringify({username, adocoes});
    // await AsyncStorage.setItem('@User', jsonValueUser);

  } catch (error) {
    console.log('Erro ao salvar dados!');
  }
};


//verificar se tem login pelo username
const getData = async () => {
  setIsLoading(true);
  try {
    const value = await AsyncStorage.getItem('@User');
    if (value !== null) {
      const jsonValue = JSON.parse(value);
      setUsername(jsonValue);
    }

    const valueAnimais = await AsyncStorage.getItem('@Animal');
    if (valueAnimais !== null) {
      const jsonValue = JSON.parse(valueAnimais);
      setAdocoes(jsonValue);
    }
    navigation.navigate("stackHome");
  } catch (error) {
    console.log('Erro ao buscar dados!');
  }
  setIsLoading(false);
};

useEffect(() => {
  getData();
}, []);

return (
  <AuthContext.Provider value={{
      username,
      setUsername,
      checkAuthentication,
      handleLogOut,
      isLoading,
      adocoes,
      setAdocoes
  }}>
    {children}
  </AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext);