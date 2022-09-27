import { ScrollView } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../App.provider';

export const History: React.FC = () => {
  const { moodList } = useAppContext();

  return (
    <ScrollView>
      {moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  );
};
