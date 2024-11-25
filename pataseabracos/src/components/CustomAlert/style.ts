import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  alertBox: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },

  title: {
    fontFamily: "ZillaSlab_700Bold",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  message: {
    fontFamily: "ZillaSlab_400Regular",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    fontFamily: "ZillaSlab_700Bold",
    color: "white",
    fontSize: 16,
  },
});
