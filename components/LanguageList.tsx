import { Image, Text, View, StyleSheet } from "react-native";

export type ListProps = {
  language: string;
  experience: number;
  logo: {
    uri: string;
  };
};

export default function LanguageList({
  language,
  experience,
  logo,
}: ListProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{language}</Text>
      <Text>Experience (years): {experience}</Text>
      <Image style={styles.logo} source={{ uri: logo.uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 50,
    height: 50,
  },
});
