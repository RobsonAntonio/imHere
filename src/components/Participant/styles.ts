import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#F3F5F8",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    maxWidth: Platform.OS === "web" ? 600 : "100%",
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: "#18181B",
    marginLeft: 16,
    fontWeight: "600",
    fontFamily: "bold",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "500",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23E44",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});
