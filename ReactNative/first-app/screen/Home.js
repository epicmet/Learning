import { FlatList, StyleSheet } from "react-native"
import { FRONTEND_MASTERS,RAINBOW,SOLORIZED } from '../constants'
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }) => {
  const ColorPalettes = [
    {name: "Solorized", colors: SOLORIZED},
    {name: "Rainbow", colors: RAINBOW},
    {name: "Frontend Masters", colors: FRONTEND_MASTERS},
  ]

  return (
    <FlatList
      style={styles.list}
      data={ColorPalettes}
      keyExtractor={item => item.name}
      renderItem={({ item }) => (<PalettePreview item={item} handlePress={() => navigation.navigate("ColorPalette", { paletteName: item.name, colors: item.colors })}/> )} 
    />
  )
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  }
})


export default Home;
