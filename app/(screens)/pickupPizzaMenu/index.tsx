import { StatusBar, StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import { TopBar } from '../../../components/topBar/TopBar';
import { CardDefault } from '../../../components/cardDefault/CardDefault';
import { pickupPizzaMenuMock } from '../../../mocks/pickupPizzaMenuMock';
import { CartPriceBar } from '../../../components/cartPriceBar/cartPriceBar';

export default function pickupPizzaMenu() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
        <TopBar title="Cardápio de Pizzas" goBackTo="/(screens)/pickupMenu"/>
        <ScrollView>
        <View style={styles.content}>
            {pickupPizzaMenuMock.map((pizza, index) => (
              <CardDefault key={index} style={{ width: '95%', flexDirection: "row", alignItems: 'flex-start', elevation: 3, padding: 10 }}>
                <Image 
                  style={styles.image}
                  source={{
                    uri: pizza.imageUrl?.trim()
                      ? pizza.imageUrl
                      : 'https://res.cloudinary.com/dml539lnv/image/upload/v1750055901/ChatGPT_Image_16_de_jun._de_2025_03_38_34_tuz8n0.png'
                  }}
                />
                <View style={styles.textContent}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title}>{pizza.title}</Text>
                    <Text style={styles.price}>R$ {pizza.price}</Text>
                  </View>
                  <Text style={styles.description}>{pizza.description}</Text>
                </View>
              </CardDefault>
            ))}
        </View>
        </ScrollView>
        <CartPriceBar/>
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
    paddingTop: 25,
    paddingBottom: 85, 
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