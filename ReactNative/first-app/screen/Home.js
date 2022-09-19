import { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from "react-native"
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }) => {
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

  const handleRefresh = async () => {
    console.log('here')
    setIsRefreshing(true);
    await getColorPalettes();
    setTimeout(() => setIsRefreshing(false), 100);
  }

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (<PalettePreview item={item} handlePress={() => navigation.navigate("ColorPalette", { ...item })} />)}
      refreshing={isRefreshing}
      onRefresh={() => handleRefresh()}
    />
  )
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  }
})


export default Home;
