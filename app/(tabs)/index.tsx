import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>My name is Pavel Alloyarov</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    marginVertical: 20,
  },
});
