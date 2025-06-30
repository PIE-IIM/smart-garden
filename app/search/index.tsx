import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

type Vegetable = {
  name: string;
  description: string;
  specifications: string[];
  sowing: string;
  plantation: string;
  harvest: string;
  affinity: string[];
  bad_neighbors: string[];
};

export default function Search() {
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/vegetables")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setVegetables(data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to fetch vegetables data.");
      });
  }, []);

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  const renderItem = ({ item }: { item: Vegetable }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://picsum.photos/140/140?random=${Math.floor(Math.random() * 100)}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mon Jardin</Text>
      <FlatList
        data={vegetables}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#333",
    textAlign: "center",
  },
  list: {
    paddingHorizontal: 5,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'transparent',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
