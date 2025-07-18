import { StyleSheet } from 'react-native';
import StylishLogoScreen from './src/screens/StylishLogoScreen';

export default function App() {
  return (
    <StylishLogoScreen />
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
