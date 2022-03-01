import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredGoal) => setenteredGoal(enteredGoal);

  const addGoalHandler = () =>
    setcourseGoals((currentGoals) => [...currentGoals, enteredGoal]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder="Course goal.."
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="button" onPress={addGoalHandler}></Button>
      <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 100,
  },
  textInputContainer: {
    borderBottomColor: "black",
    borderWidth: "1px",
    backgroundColor: "whitesmoke",
    marginBottom: 10,
    padding: 10,
  },
  listItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
