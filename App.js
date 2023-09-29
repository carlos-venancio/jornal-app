import Header from "./src/components/header/header";
import Home from "./src/pages/home/home";
import Artigos from "./src/artigosContext";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Rotas from "./src/routes/routes";

function App() {

  const [artigos,setArtigos] = useState([])

  return (
    <View style={styles.container}>
      <Header />
      <Artigos.Provider value={[artigos,setArtigos]}>
        <Rotas />
      </Artigos.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
