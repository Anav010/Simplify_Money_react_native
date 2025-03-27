# Simplify_Money_react_native
This is an app frontend made in react native.



Installation:

Prerequisites


Node.js and npm installed

Expo CLI installed globally

OMDb API key


Setup

Clone the repository and install dependencies:

git clone <https://github.com/Anav010/Simplify_Money_react_native.git>

npm install

npx expo start


Dependencies

react-native

react-navigation/native

react-navigation/stack

react-native-screens

react-native-gesture-handler

react-native-reanimated

react-native-safe-area-context

expo



Folder Structure

MOVIES_FOR_FUN/

│-- assets/        # Static assets

│-- components/    # Reusable UI components

│-- navigation/    # App navigation setup

│-- screens/       # App screens (Home, Details)

│-- utils/         # Helper functions (API calls)

│-- App.js         # Main app entry point

│-- package.json   # Project dependencies


API USAGE

const API_KEY = 'your_omdb_api_key';

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
