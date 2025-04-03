import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from './Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title titulo='CORINTHIANS CAMPEÃO PAULISTA 2025' corTexto='white' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
