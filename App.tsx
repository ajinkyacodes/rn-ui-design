import { StyleSheet } from 'react-native';
import PaymentScreen from './src/screens/PaymentScreen';

export default function App() {
  return (
    <PaymentScreen />
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
