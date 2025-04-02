import { StatusBar } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <ToastProvider>
        <Home />
      </ToastProvider>
    </>
  );
}
