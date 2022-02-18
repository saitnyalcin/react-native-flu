import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlueView from "./components/FlueView";

export default function App() {
  const date = new Date().toLocaleString();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <FlueView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    fontSize: 22,
  },
});
