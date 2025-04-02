import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Toast from "react-native-toast-message";
import ModalWeb from "../../components/ModalWeb";
import ModalMobile from "../../components/ModalMobile";

type CustomDateFormatOptions = {
  weekday: "long" | "short" | "narrow";
  day: "2-digit" | "numeric";
  month: "long" | "short" | "narrow";
  year: "numeric";
};

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [participantToRemove, setParticipantToRemove] = useState<string | null>(
    null
  );

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      if (Platform.OS === "web") {
        toast.error("Aluno já existe!");
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Aluno já existe!",
          text2: "Já existe um aluno na lista com esse nome.",
        });
      }
      return;
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    if (Platform.OS === "web") {
      setParticipantToRemove(name);
      setIsModalOpen(true);
    } else {
      Alert.alert("Remover aluno", `Deseja remover o aluno ${name}?`, [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            );
            Toast.show({
              type: "success",
              position: "top",
              text1: `Aluno ${name} removido com sucesso!`,
            });
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
    }
  }

  function confirmRemoveWeb() {
    if (participantToRemove) {
      setParticipants((prevState) =>
        prevState.filter((participant) => participant !== participantToRemove)
      );
      setIsModalOpen(false);
      toast.success(`Aluno ${participantToRemove} removido com sucesso!`);
    }
  }

  function cancelRemoveWeb() {
    setIsModalOpen(false);
  }

  function formatDate(date: Date, options: CustomDateFormatOptions): string {
    let formattedDate = date.toLocaleDateString("pt-BR", options);

    const parts = formattedDate.split(", ");
    parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

    return parts.join(", ");
  }

  const date = new Date();
  const options: CustomDateFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const dateFormatted = formatDate(date, options);

  const emptyField = participantName.length === 0;

  return (
    <LinearGradient
      colors={["#6A11CB", "#2575FC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.title}>
        <Text style={styles.eventName}>Lista de presença</Text>
        <Text style={styles.eventDate}>{dateFormatted}</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do aluno"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={[styles.button, emptyField && styles.buttonDisabled]}
          disabled={emptyField}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou na aula ainda? Adicione alunos à sua lista de
            presença.
          </Text>
        )}
      />

      {Platform.OS === "web" && (
        // Exibir o Toast Container no Web
        <ToastContainer />
      )}

      {Platform.OS !== "web" && (
        // Mostrar Toast Message no App
        <Toast />
      )}

      {Platform.OS === "web" ? (
        <ModalWeb
          isModalOpen={isModalOpen}
          cancelRemoveWeb={cancelRemoveWeb}
          participantToRemove={participantToRemove}
          confirmRemoveWeb={confirmRemoveWeb}
        />
      ) : (
        <ModalMobile
          isModalOpen={isModalOpen}
          cancelRemoveWeb={cancelRemoveWeb}
          participantToRemove={participantToRemove}
          confirmRemoveWeb={confirmRemoveWeb}
        />
      )}
    </LinearGradient>
  );
}
