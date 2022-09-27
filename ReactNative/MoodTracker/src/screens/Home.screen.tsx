import { ImageBackground, StyleSheet } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

const imageURL =
  'https://img.freepik.com/free-photo/top-view-background-beautiful-white-grey-brown-cream-blue-background_140725-72219.jpg?w=2000&t=st=1664275287~exp=1664275887~hmac=e51ca9ecdfd6f52fade6b754b98eb39acd2205d4e709b2ab5f523b0a39da1cae';

export const Home: React.FC = () => {
  const { handleSelectMood } = useAppContext();

  return (
    <ImageBackground style={styles.container} source={{ uri: imageURL }}>
      <MoodPicker handleSelectMood={handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
