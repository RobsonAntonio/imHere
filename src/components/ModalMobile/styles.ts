import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 300,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    noButton: {
        color: "red",
        marginTop: 10,
        fontSize: 16,
    },
    yesButton: {
        color: "green",
        marginTop: 10,
        fontSize: 16,
    }
});