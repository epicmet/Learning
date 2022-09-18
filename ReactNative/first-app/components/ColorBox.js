import { StyleSheet, View, Text } from "react-native"

const ColorBox = ({ colorName, hexCode }) => {
  const textColor ={
    color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? "black" : "white",
  }

  const boxBackgroundColor = {
    backgroundColor: hexCode
  };

  return (
    <View style={[styles.box, boxBackgroundColor]}>
      <Text style={[styles.boxText, textColor]}>{colorName}: {hexCode}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 4,
  },
  boxText: {
    fontWeight: "bold"
  },
})

export default ColorBox;
