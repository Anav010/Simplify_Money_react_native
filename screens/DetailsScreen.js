import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.details}>Year: {movie.Year}</Text>
      <Text style={styles.details}>Type: {movie.Type}</Text>
      <Text style={styles.details}>IMDB ID: {movie.imdbID}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: 16,
    color: "#ccc",
    marginTop: 5,
  },
});

export default DetailsScreen;
