import { StatusBar, StyleSheet, View} from 'react-native';
import { useRouter } from 'expo-router';
import { TopBar } from '../../../components/topBar/TopBar';

export default function pickupMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
        <TopBar title="Entrega ou retirada" goBackTo="/(screens)/menuScreen"/>
        <View style={styles.content}>
           
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae3b3'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#fae3b3',
    paddingTop: 23,
    paddingBottom: 32, 
  },
});