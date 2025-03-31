import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    title: {
        display: 'flex',
        width: '100%',
        maxWidth: 600
    },
    eventName: {
        color: "#FFF",
        fontSize: Platform.OS === "web" ? 36 : 28,
        fontFamily: "bold",
        fontWeight: "700",
        marginTop: 48,
    },
    eventDate: {
        color: "#FFF",
        fontSize: Platform.OS === "web" ? 18 : 16,
        marginTop: 8,
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        color: "#18181B",
        padding: 16,
        fontSize: Platform.OS === "web" ? 18 : 16,
        marginRight: 12,
        maxWidth: "100%",
    },
    buttonText: {
        color: "#FFF",
        fontSize: Platform.OS === "web" ? 36 : 28,
        fontWeight: "500",
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: Platform.OS === "web" ? 16 : 0,
    },
    buttonDisabled: {
        backgroundColor: "#D3D3D3",
    },
    buttonEnabled: {
        backgroundColor: "#31CF67",
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42,
        backgroundColor: "#F3F5F8",
        borderRadius: 5,
        maxWidth: Platform.OS === "web" ? 600 : "100%",
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: Platform.OS === "web" ? 18 : 14,
        textAlign: "center",
        paddingHorizontal: 15,
    },

    flatList: {
        width: "100%",
        maxWidth: Platform.OS === "web" ? 600 : "100%",
    }
});
