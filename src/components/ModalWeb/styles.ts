import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        display: 'flex',
        maxWidth: 265,
    },
    modalText: {
        fontSize: 18,
        fontWeight: '600',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30,
        gap: 5
    },
    noButton: {
        backgroundColor: '#D2D4DA',
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 10,
    },
    yesButton: {
        backgroundColor: '#2575FC',
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 10,
    }
});