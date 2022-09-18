import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  const COLORS = [
    { key: "1", colorName: 'Base03', hexCode: '#002b36' },
    { key: "2",colorName: 'Base02', hexCode: '#073642' },
    { key: "3",colorName: 'Base01', hexCode: '#586e75' },
    { key: "4",colorName: 'Base00', hexCode: '#657b83' },
    { key: "5",colorName: 'Base0', hexCode: '#839496' },
    { key: "6",colorName: 'Base1', hexCode: '#93a1a1' },
    { key: "7",colorName: 'Base2', hexCode: '#eee8d5' },
    { key: "8",colorName: 'Base3', hexCode: '#fdf6e3' },
    { key: "9",colorName: 'Yellow', hexCode: '#b58900' },
    { key: "10",colorName: 'Orange', hexCode: '#cb4b16' },
    { key: "11",colorName: 'Red', hexCode: '#dc322f' },
    { key: "12", colorName: 'Magenta', hexCode: '#d33682' },
    { key: "13",colorName: 'Violet', hexCode: '#6c71c4' },
    { key: "14", colorName: 'Blue', hexCode: '#268bd2' },
    { key: "15", colorName: 'Cyan', hexCode: '#2aa198' },
    { key: "16", colorName: 'Green', hexCode: '#859900' },
  ];

  return (
    <SafeAreaView>
      <FlatList 
        style={styles.container}
        data={COLORS}
        renderItem={({ item }) => <ColorBox {...item} />} 
        ListHeaderComponent={<Text style={styles.text}>Solorized</Text>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );

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
