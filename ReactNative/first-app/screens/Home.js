import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColorPalettes = async () => {
    const response = await fetch("https://color-palette-api.kadikraman.vercel.app/palettes");

    if (response.ok) {
      const data = await response.json();

      setColorPalettes(data);
    }
  }

  useEffect(() => {
    getColorPalettes();
  }, []);

  useEffect(() => {
    if(newColorPalette) {
      setColorPalettes(prev => [{id: Math.random().toString(16).slice(2), ...newColorPalette}, ...prev]);
    }
  }, [newColorPalette])

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await getColorPalettes();
    setTimeout(() => setIsRefreshing(false), 100);
  }

  return (
    <>
      <FlatList
        style={styles.list}
        data={colorPalettes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<PalettePreview item={item} handlePress={() => navigation.navigate("ColorPalette", { ...item })} />)}
        refreshing={isRefreshing}
        onRefresh={() => handleRefresh()}
        ListHeaderComponent={
          <TouchableOpacity onPress={() => navigation.navigate("ColorPaletteModal")}>
            <Text style={styles.buttonText}>Add new palette</Text>
          </TouchableOpacity>
        }
      />
    </>
  )
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  }
})

export default Home;
