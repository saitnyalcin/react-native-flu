import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const FlueView = () => {
  const [first, setfirst] = useState(100000);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        How many people are flu now on the earth?
        <span> 🌎 </span>
      </Text>
      <Text style={styles.counter}>
        {first.toLocaleString()} <span>🤧</span>
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://www.who.int/images/default-source/big-stories/influenza-spotlight/sick1.tmb-1920v.png?Culture=en&sfvrsn=51d2c36_10",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    color: "coral",
    fontSize: 44,
  },
  headerText: {
    color: "#000",
    fontSize: 44,
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
});
export default FlueView;
