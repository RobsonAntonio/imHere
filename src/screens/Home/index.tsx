import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

type CustomDateFormatOptions = {
  weekday: "long" | "short" | "narrow";
  day: "2-digit" | "numeric";
  month: "long" | "short" | "narrow";
  year: "numeric";
};

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Platform.OS === "web"
        ? alert("Aluno já existe!")
        : Alert.alert(
            "Aluno existe",
            "Já existe um aluno na lista com esse nome"
          );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    if (Platform.OS === "web") {
      const shouldRemove = window.confirm(`Deseja remover o aluno ${name}?`);
      if (shouldRemove) {
        setParticipants((prevState) =>
          prevState.filter((participant) => participant !== name)
        );
      }
    } else {
      Alert.alert("Remover", `Remover o aluno ${name}?`, [
        {
          text: "Sim",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== name)
            ),
        },
        { text: "Não", style: "cancel" },
      ]);
    }
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
    </LinearGradient>
  );
}
