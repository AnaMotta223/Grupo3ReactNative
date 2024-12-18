import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },

  imagemdeFundo: {
    flex: 1,
    width: "100%",
  },

  header: {
    paddingTop: 30,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#B68458",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },

  logoContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "30%",
  },

  logo: {
    width: 40,
    height: 40,
  },

  cabecalho: {
    fontFamily: "ZillaSlab_700Bold",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 24,
    color: "#000",
  },

  tituloContainer: {
    gap: 10,
    alignItems: "center",
    paddingTop: 20,
  },

  titulo: {
    fontFamily: "ZillaSlab_700Bold",
    textAlign: "center",
    fontSize: 40,
    color: "#000",
  },
  
  cards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 15,
  },

  boxCard: {
    width: 350,
    backgroundColor: "#F3E6CE",
    paddingBottom: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  elevation: {
    elevation: 8,
    shadowColor: "#000",
  },
  
  botaoDeletar: {
    marginTop: 5,
    zIndex: 999,
    position: "absolute",
  },

  boxInfo: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  name: {
    fontFamily: "ZillaSlab_700Bold",
    fontSize: 25,
  },

});
