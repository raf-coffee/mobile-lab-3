import { StyleSheet, FlatList } from "react-native";
import LanguageList from "@/components/LanguageList";
import { useState } from "react";

type Item = {
  id: number;
  language: string;
  experience: number;
  logo: string;
}[];

const data = [
  {
    id: 1,
    language: "JavaScript",
    experience: 5,
    logo: require("../../assets/images/JS_logo.png"),
  },
  {
    id: 2,
    language: "PHP",
    experience: 2,
    logo: require("../../assets/images/PHP_logo.png"),
  },
  {
    id: 3,
    language: "Go",
    experience: 1,
    logo: require("../../assets/images/Go_logo.png"),
  },
  {
    id: 4,
    language: "TypeScript",
    experience: 4,
    logo: require("../../assets/images/TS_logo.png"),
  },
  {
    id: 5,
    language: "Python",
    experience: 5,
    logo: require("../../assets/images/Python_logo.png"),
  },
] satisfies Item;

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    console.log("Refresh");

    setTimeout(() => {
      setRefreshing(false);
      console.log("Refresh end");
    }, 500);
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <LanguageList
          language={item.language}
          experience={item.experience}
          logo={item.logo}
        />
      )}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
