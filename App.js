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
      <GoalInput addGoalHandler={addGoalHandler} />
      <ScrollView>
        {courseGoals.map((goal) => (
          <GoalItem goal={goal} onDeleteHandler={onDeleteHandler} />
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
});
