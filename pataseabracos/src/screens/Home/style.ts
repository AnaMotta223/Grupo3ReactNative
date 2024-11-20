import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"flex-start"
  },

  imagemdeFundo:{
    flex: 1,
    width:"100%"
},

logoContainer:{
  alignItems:"flex-start",
  justifyContent:"flex-start",
  width:"30%"
},

  logo:{
    width:40,
    height:40,
  },

  header:{
    width: "100%",
    alignItems:"center",
    backgroundColor: "#B68458",
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection:"row"
  },

  cabecalho:{
    alignSelf:"center",
    justifyContent:"center",
    fontSize: 22,
    color:"#000"
  },

  tituloContainer:{
    alignItems:"center",
    paddingTop: 20

  },

  titulo:{
    fontSize:40,
    color:"black"
  },
  btnContainer:{
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    flexDirection:"row"
  },

  boxAnimais:{
    width: "33%",
    height: 70,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#B89371',
    padding: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  tiposAnimais:{
    fontSize: 22,
    color:"#FFF"
  },

});