import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  message: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 10,
    maxWidth: "80%",
  },
  
  yourMessage: {
    backgroundColor: "#D2C2A4",
    alignSelf: "flex-end",
  },
  
  otherMessage: {
    backgroundColor: "#F3E6CE",
    alignSelf: "flex-start",
  },
  
  messageText: {
    fontFamily: "ZillaSlab_400Regular",
    fontSize: 16,
    color: "#333",
  },
  
  optionsContainer: {
    justifyContent: "flex-start",
    marginTop: 20,
  },
  
  optionButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    margin: 5,
    alignItems: "center",
    elevation: 2,
  },
  
  optionButtonText: {
    fontFamily: "ZillaSlab_400Regular",
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },

  imagemdeFundo: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  header: {
    backgroundColor: "#B68458",
    flexDirection: "row",
    height: 90,
    width: "100%",
    textAlign: "center",
  },

  headerimg: {
    marginTop: 40,
    marginLeft: 10,
  },

  headerTitle: {
    marginTop: 20,
    fontSize: 24,
    alignSelf: "center",
    marginLeft: 25,
    fontFamily: "ZillaSlab_700Bold",
  },

  messagesList: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 80,
  },

  card: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: "#F7EDD5",
    padding: 16,
    borderRadius: 8,
  },

  cardTitle: {
    fontFamily: "ZillaSlab_700Bold",
    fontSize: 18,
    marginBottom: 8,
    color: "#555",
    textAlign: "center",
  },

  cardText: {
    fontFamily: "ZillaSlab_400Regular",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },

  cardCloseButton: {
    backgroundColor: "#708D73",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "black",
  },

  cardCloseButtonText: {
    fontFamily: "ZillaSlab_700Bold",
    color: "#ffff",
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
  },

  input: {
    fontFamily: "ZillaSlab_400Regular",
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 8,
    backgroundColor: "#F3E6CE",
  },

  enviarButton: {
    backgroundColor: "#708D73",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },

  enviarButtonText: {
    fontFamily: "ZillaSlab_700Bold",
    color: "white",
    fontSize: 16,
  },
});
