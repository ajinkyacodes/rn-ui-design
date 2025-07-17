import { StyleSheet } from 'react-native';
import MeditationScreen from './src/screens/MeditationScreen';

export default function App() {
  return (
    <MeditationScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
