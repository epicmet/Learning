import { Text, View, StyleSheet } from 'react-native';
import { groupBy } from 'lodash';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../App.provider';
import { theme } from '../theme';

export const Analytics: React.FC = () => {
  const { moodList } = useAppContext();

  const data = Object.entries(groupBy(moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );

  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
      <VictoryPie
        labelRadius={80}
        radius={150}
        innerRadius={50}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
        style={{ labels: { fontSize: 30 } }}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
