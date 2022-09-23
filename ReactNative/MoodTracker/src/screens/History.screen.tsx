import { View } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../App.provider';

export const History: React.FC = () => {
  const { moodList } = useAppContext();

  return (
    <View>
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};
