import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 150,
  },

  capa: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  profileArea: {
    alignItems: "center",
    marginTop: -50,
  },

  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#F7EDD5",
  },

  name: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold"
  },

  content: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,

  },

  contentCard: {
    alignSelf: "center",
    backgroundColor: "#F7EDD5",
    borderRadius: 17.8,
    padding: 14,
    marginBottom: 25,
    elevation: 5,
    width: 350,
    flexDirection: "column", // Permite o título e a área de informações ficarem empilhados
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  extraInfo: {
    marginTop: 10,
    paddingLeft: 10,
    width: "100%",
    marginBottom: 90,

    fontSize: 3,
    alignItems: "center",
    
  },

  contentCardBottonConfig: {
    backgroundColor: "#708D73",
    margin: 5,
    width: 200,
    height: 20,
    alignItems: "center",
    borderRadius: 10
  },

  bottonConfigText:{
    textAlign: "center"

  },

  cardTitle: {
    fontSize: 16,
    flex: 1,
    marginBottom: 5
  },



  contentCardButton: {
  },


  footer: {
    backgroundColor: "#708D73",
    width: 239,
    height: 43,
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 10,
  },

  footerText: {
    paddingLeft: 100,
  },

  scroll:{
    width: "100%",
  },

  footerBotton:{
    alignSelf: "center",

  },

 

});
