import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {

    flex: 1,
  },
  container: {

  },
  header: {
    backgroundColor: "#B68458",
    flexDirection: "row",
    height:69,
    
  },

  headerTitle: {
    marginTop:20,
    fontSize:25,
    fontWeight:'bold',
    alignSelf: "center",
    marginLeft: 50,
  },
  headerimg: {
        marginTop:30,
        marginLeft:10

  },


  contentInput: {
    backgroundColor: "#F7EDD5",
    width: 329.17,
    height: 55,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 17.86,
  },


  content: {
    alignItems: "center",
  },

  footer: {
    backgroundColor: "#708D73",
    width: 175,
    height: 55,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 20,
  },

  footerBottom: {
    alignSelf: "center",
    marginTop: 30,
  },

  footerText: {
    alignSelf: "center",
    color: "#FFF",
  },

  dropdownButtonStyle: {
   
    width: 329.17,
    height: 50,
    backgroundColor: '#F7EDD5',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropDownCard:{
    backgroundColor: "#F7EDD5",
    width: 329.17,
    height: 55,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 17.86,
  },

  selectedTextStyle:{
    color: "#000000", 
  }


});


