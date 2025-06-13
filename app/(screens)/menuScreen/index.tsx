import { StatusBar, StyleSheet, View} from 'react-native';
import { useRouter } from 'expo-router';
import { TopBar } from '../../../components/topBar/TopBar';
import MenuButton from '../../../components/menuButton/MenuButton';

export default function menuScreen() {
  const router = useRouter();

  const navigateToPickupMenu = () => {
    router.push('/(screens)/pickupMenu');
  };

  const navigateToTakeoutMenu = () => {
    router.push('/(screens)/pickupMenu');
  };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
        <TopBar title="Ver Menu" goBackTo="/(screens)/mainScreen"/>
        <View style={styles.content}>
            <MenuButton
              text="Quero que me entregue"
              textColor="#000000" 
              color="#ffffff"
              icon={{ uri: 'https://img.freepik.com/vetores-premium/um-entregador-de-motocicleta-em-um-fundo-branco-com-espaco-de-copia_625455-2101.jpg?w=740' }}
            />
            <MenuButton 
              text="Vou retirar no local"
              textColor="#000000" 
              color="#ffffff"
              icon={{ uri: 'https://img.freepik.com/premium-vector/store-icon_791764-4106.jpg?w=740' }}
              iconSize={45}
              onPress={navigateToPickupMenu}
              />
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