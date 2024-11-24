import axios from "axios";

export const ServiceGetUsers = async () => {
  const url = "https://6722c0392108960b9cc576f5.mockapi.io/usuarios";

  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log("Erro na requisição");
  }
};
