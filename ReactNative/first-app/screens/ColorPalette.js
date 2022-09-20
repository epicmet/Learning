import { StyleSheet, Text, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      renderItem={({ item }) => <ColorBox {...item} />}
      ListHeaderComponent={<Text style={styles.text}>{route.params.paletteName}</Text>}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default ColorPalette;
