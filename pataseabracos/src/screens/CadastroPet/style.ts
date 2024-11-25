import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  header: {
    backgroundColor: "#B68458",
    flexDirection: "row",
    height: 69,
  },

  headerimg: {
    marginTop: 30,
    marginLeft: 10,
  },

  headerTitle: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 50,
  },

  content: {
    alignItems: "center",
  },
  
  dropDownCard: {
    backgroundColor: "#F7EDD5",
    width: 329.17,
    height: 55,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 17.86,
  },

  dropdownButtonStyle: {
    width: 329.17,
    height: 50,
    backgroundColor: "#F7EDD5",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
  },

  selectedTextStyle: {
    color: "#000000",
  },
  
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  
  dropdownMenuStyle: {
    backgroundColor: "#FFF",
    borderRadius: 8,
  },
  
  contentInput: {
      backgroundColor: "#F7EDD5",
      width: 329.17,
      height: 55,
      marginTop: 20,
      marginBottom: 5,
      borderRadius: 17.86,
    },
  
    footerBottom: {
      alignSelf: "center",
      marginTop: 30,
    },
    
    footer: {
      backgroundColor: "#708D73",
      width: 175,
      height: 55,
      justifyContent: "center",
      marginBottom: 10,
      borderRadius: 20,
    },
    
      footerText: {
        alignSelf: "center",
        color: "#FFF",
      },
});
