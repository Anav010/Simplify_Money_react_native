import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default MovieCard;
