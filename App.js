import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoallItem";

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) =>
    setcourseGoals((currentGoals) => [...currentGoals, goalTitle]);

  const onDeleteHandler = (goalId) => {
    setcourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal != goalId)
    );
  };

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text>Flu Application</Text>
      <StatusBar style="auto" />
=======
      <GoalInput addGoalHandler={addGoalHandler} />
      <ScrollView>
        {courseGoals.map((goal) => (
          <GoalItem goal={goal} onDeleteHandler={onDeleteHandler} />
        ))}
      </ScrollView>
>>>>>>> 2df9ef96214a08cffcc28319d5a5c010ea80c9cc
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 100,
  },
});
