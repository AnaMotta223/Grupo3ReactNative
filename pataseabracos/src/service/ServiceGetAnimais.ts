import axios from "axios";

export const ServiceGetAnimais = async () => {

  const url = "https://6722c0692108960b9cc578da.mockapi.io/animais";
  //const url = "http://localhost:8080/animais";

  try {
    const response = await axios.get(url);
    return response;
  }
  catch (error) {
    console.log("Erro na requisição")
  }
};