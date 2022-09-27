import {
  useState,
  useCallback,
  createContext,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};

const DATA_KEY = 'mood-tracker-data-key';

const setAppData = async (appData: AppData) => {
  try {
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(appData));
  } catch (e) {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(DATA_KEY);

    if (result) return JSON.parse(result);
  } catch (e) {}

  return null;
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

type AppProviderProps = {
  children?: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(prev => {
      const newMoodList = [
        ...prev,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  const handleDeleteMood = useCallback((mood: MoodOptionWithTimestamp) => {
    setMoodList(curr => {
      const newMoodList = curr.filter(m => m.timestamp !== mood.timestamp);

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();

      if (data) setMoodList(data.moodList);
    };

    fetchAppData();
  }, []);

  return (
    <AppContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
