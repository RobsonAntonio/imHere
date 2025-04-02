import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-modal";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "./styles";

interface ModalWebProps {
  isModalOpen: boolean;
  cancelRemoveWeb: () => void;
  participantToRemove: string | null;
  confirmRemoveWeb: () => void;
}
export default function ModalWeb({
  isModalOpen,
  cancelRemoveWeb,
  participantToRemove,
  confirmRemoveWeb,
}: ModalWebProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={cancelRemoveWeb}
      contentLabel="Remover Aluno"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 0,
        },
        content: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          width: 300,
          height: 150,
          backgroundColor: "#fff",
          position: "relative",
        },
      }}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.modalText}>
            Deseja remover o aluno {participantToRemove}?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={cancelRemoveWeb} style={styles.noButton}>
            <Text>Não</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={confirmRemoveWeb} style={styles.yesButton}>
            <Text>Sim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
