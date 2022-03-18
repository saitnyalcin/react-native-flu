import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-web";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoallItem";

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [showAddMode, setshowAddMode] = useState(false);

  const addGoalHandler = (goalTitle) =>
    setcourseGoals((currentGoals) => [...currentGoals, goalTitle], {
      id: Math.random().toString(),
      value: goalTitle,
    });

  const onDeleteHandler = (goalId) => {
    setcourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal != goalId)
    );
  };

  const showModalHandler = () => setshowAddMode(true);

  return (
    <View style={styles.container}>
      <Button title="Add Goal Input" onPress={showModalHandler} />
      <GoalInput showAddMode={showAddMode} addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDeleteHandler={onDeleteHandler}
          />
        )}
      />
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
