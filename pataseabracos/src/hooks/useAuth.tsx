import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useContext, createContext, useState, useEffect } from 'react'

type PropsContext = {
  username: string;
  //senha: string;
  setUsername: (value: string) => void;
  checkAuthentication: (email: string) => void;
  handleLogOut: () => void;
  isLoading: boolean;
  //userApi: PropsApi;
}

const AuthContext = createContext<PropsContext>({
  username: '',
  setUsername: () => { },
  //senha: '',
  checkAuthentication: () => { },
  handleLogOut: () => { },
  isLoading: false,
  //userApi: {
   // adocoes: []
  //}
})

export const AuthProvider = ({ children }: any) => {

  const navigation = useNavigation();

  const [username, setUsername] = useState<string>('');
  //const [ senha ] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkAuthentication = (username: string) => {
    setIsLoading(true);

    if (username != null) {
        setTimeout(() => {
          storeData(username);
          navigation.navigate("stackHome");
        }, 3000);
      }
    }
  
  const handleLogOut = () => {
    AsyncStorage.removeItem('@User');
    navigation.navigate("stackLogin");
  }

  const storeData = async (username: string) => {
    try {
      const jsonValue = JSON.stringify(username);
      await AsyncStorage.setItem('@User', jsonValue);

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
        console.log('Pegou os dados', jsonValue);
        navigation.navigate("stackHome");
      }
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
        //senha,
        setUsername,
        checkAuthentication,
        handleLogOut,
        isLoading,
        //userApi
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);