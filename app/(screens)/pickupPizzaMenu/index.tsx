import { StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import { useRouter } from 'expo-router';
import { TopBar } from '../../../components/topBar/TopBar';
import CustomButton from '../../../components/customButton/CustomButton';
import { CardDefault } from '../../../components/cardDefault/CardDefault';

export default function pickupPizzaMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
        <TopBar title="Cardápio de Pizzas" goBackTo="/(screens)/pickupMenu"/>
        <View style={styles.content}>
            <CardDefault style={{ width: '95%', flexDirection: "row", alignItems: 'flex-start', elevation: 3, padding: 10 }}>
                    <Image style={styles.image}/>
                    <View style={styles.textContent}>
                        <View style={styles.titleRow}>
                            <Text style={styles.title}>Aliche I</Text>
                            <Text style={styles.price}>R$ 54,00</Text>
                        </View>
                        <Text style={styles.description}>Filé de aliche e molho de tomate</Text>
                    </View>
            </CardDefault>
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
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }, 
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#e03b39',
    fontWeight: 'bold',
    fontSize: 18,
    width: 150
  },
  price: {
    color: '#e03b39',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30,
  },
  description: {
    color: '#6a4e36',
    fontSize: 13,
    marginTop: 4,
    width: 150
  },
});