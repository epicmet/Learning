import { TouchableOpacity, Text, FlatList, StyleSheet, View} from 'react-native';

const PalettePreview = ({ handlePress, item }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{item.name}</Text>
      <FlatList
        style={styles.list}
        data={item.colors.slice(0, 5)}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <View style={[styles.box, { backgroundColor: item.hexCode}]} />}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: "row"
  }
});

export default PalettePreview;
