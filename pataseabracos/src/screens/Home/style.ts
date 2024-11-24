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
    fontSize: 40,
    color: "#000",
  },

  boxPesquisar: {
    flexDirection: "row",
    alignSelf: "center",
  },

  pesquisarInput: {
    fontFamily: "ZillaSlab_400Regular",
    fontSize: 22,
    paddingHorizontal: 40,
    backgroundColor: "#F7EDD5",
    width: "80%",
    height: 47,
    borderRadius: 22,
  },

  cards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 15,
  },

  boxCard: {
    width: 250,
    backgroundColor: "#F3E6CE",
    paddingBottom: 20,
    borderRadius: 10,
    marginTop: 20,
    gap: 2,
  },

  elevation: {
    elevation: 8,
    shadowColor: "#000",
  },

  boxInfo: {
    flexDirection: "row",
    gap: 8,
  },
  boxDetalhes: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnAdotar: {
    width: "40%",
    height: 35,
    borderRadius: 5,
    backgroundColor: "#311A05",
    paddingTop: 5,
  },
  txtAdotar: {
    fontFamily: "ZillaSlab_700Bold",
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },

  name: {
    fontFamily: "ZillaSlab_700Bold",
    fontSize: 25,
  },

  pet: {
    alignSelf: "center",
    width: 250,
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});
