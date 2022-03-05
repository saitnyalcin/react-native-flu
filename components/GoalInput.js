import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, showAddMode }) => {
  const [enteredGoal, setenteredGoal] = useState("");

  const goalInputHandler = (enteredGoal) => setenteredGoal(enteredGoal);

  return (
    <Modal visible={showAddMode} animationType="slide">
      <View>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Course goal.."
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="button"
          onPress={() => addGoalHandler(enteredGoal)}
        ></Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderBottomColor: "black",
    borderWidth: "1px",
    backgroundColor: "whitesmoke",
    marginBottom: 10,
    padding: 10,
  },
});

export default GoalInput;
