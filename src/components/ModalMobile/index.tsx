import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "./styles";
import RNModal from "react-native-modal";

interface ModalWebProps {
  isModalOpen: boolean;
  cancelRemoveWeb: () => void;
  participantToRemove: string | null;
  confirmRemoveWeb: () => void;
}
export default function ModalMobile({
  isModalOpen,
  cancelRemoveWeb,
  participantToRemove,
  confirmRemoveWeb,
}: ModalWebProps) {
  return (
    <RNModal
      isVisible={isModalOpen}
      onBackdropPress={cancelRemoveWeb}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          Deseja remover o aluno {participantToRemove}?
        </Text>
        <TouchableOpacity onPress={cancelRemoveWeb}>
          <Text style={styles.noButton}>Não</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmRemoveWeb}>
          <Text style={styles.yesButton}>Sim</Text>
        </TouchableOpacity>
      </View>
    </RNModal>
  );
}
