import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={styles.heading}>Here is some fancy colors:</Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text> 
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text> 
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta #d33682</Text> 
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text> 
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  box: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    width: '98%',
    borderRadius: 5,
    marginVertical: 4,
  },
  text: {
    color: "#fff"
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2"
  },
  magenta: {
    backgroundColor: "#d33682"
  },
  orange: {
    backgroundColor: "#cb4b16"
  }
});
