import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar'
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="ColorPalette" component={ColorPalette} options={({ route }) => ({ title: route.params.paletteName })} />
    </MainStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ title: "Create a new color palette" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
