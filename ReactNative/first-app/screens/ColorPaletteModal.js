import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Switch, Button, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../constants';

const ItemDivider = () => {
  return (
    <View style={styles.divider} />
  )
}

const ColorOption = ({ colorName, hexCode, onItemChange }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleValueChange = (val) => {
    setIsSelected(val);

    onItemChange(val, { colorName, hexCode });
  }

  return (
    <View style={styles.colorOptionContainer}>
      <Text>{colorName}</Text>
      <Switch value={isSelected} onValueChange={handleValueChange} />
    </View>
  );
};

const ColorPaletteModal = ({ navigation }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [paletteName, setPaletteName] = useState('');

  const onItemChange = (isAdded, color) => {
    if (isAdded) {
      setSelectedColors(prev => ([...prev, color]));
    } else {
      setSelectedColors(prev => prev.filter(c => c.colorName !== color.colorName));
    }
  };

  const handleSubmit = () => {
    if(!paletteName) {
      return Alert.alert("Please enter a palette name")
    }

    if(selectedColors.length < 3) {
        return Alert.alert("Please choose at least 3 colors")
    }

    const newColorPalette = {
      paletteName,
      colors: selectedColors,
    };

    navigation.navigate("Home", { newColorPalette }) 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.lable}>Enter the name of your color palette:</Text>
      <TextInput style={[styles.input]} onChangeText={setPaletteName} placeholder="Palette Name"/>
      <FlatList
        data={COLORS}
        keyExtractor={item => item.colorName + 'pickColor'}
        renderItem={({ item }) => <ColorOption {...item} onItemChange={onItemChange} />}
        ItemSeparatorComponent={ItemDivider}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  lable: {
    marginBottom: 10,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: "solid",
  },
  colorOptionContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#607D8B"
  },
});

export default ColorPaletteModal;
