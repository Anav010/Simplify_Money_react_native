import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { fetchMovies } from "../utils/api";

const { width } = Dimensions.get("window"); // Get screen width

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!searchText.trim()) return; // Prevent empty searches
    const results = await fetchMovies(searchText);
    setMovies(results);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Movies</Text>

        {/* Search Bar & Button */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search Movies..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
            onChangeText={setSearchText}
            onSubmitEditing={searchMovies} // Search when pressing "Enter"
          />
          <TouchableOpacity style={styles.searchButton} onPress={searchMovies}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Movie List */}
        <FlatList
          data={movies}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate("DetailsScreen", { movie: item })}>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
              <Text style={styles.movieTitle} numberOfLines={2}>{item.Title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 15,
    paddingTop: 10, // Space below the notch
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10, // Space between title and search bar
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#ff5733",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    width: width * 0.95, // Ensures the row fits within screen width
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginRight: 10,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 16,
    flexShrink: 1,
    width: width * 0.65,
  },
});

export default HomeScreen;
