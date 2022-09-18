import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import ColorPalette from './screen/ColorPalette';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} options={({route}) => ({title: route.params.paletteName})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
