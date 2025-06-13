import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import MainScreen from './(screens)/mainScreen';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fae3b3" barStyle="dark-content" />
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});