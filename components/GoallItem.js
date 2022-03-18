import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ index, goal, onDeleteHandler }) => {
  return (
    <TouchableOpacity onPress={() => onDeleteHandler(goal)}>
      <View key={index} style={styles.listItem}>
        <Text>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
