import React from "react";
import { GestureResponderEvent, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: (event: GestureResponderEvent) => void;
}

export const CustomAlert: React.FC<CustomAlertProps> = ({ visible, title, message, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
