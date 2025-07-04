import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { TopBar } from '../../../components/topBar/TopBar';
import { CartPriceBar } from '../../../components/cartPriceBar/cartPriceBar';
import { CardDefault } from '../../../components/cardDefault/CardDefault';

export default function PizzaDetailScreen() {
  const { pizza } = useLocalSearchParams();
  const parsedPizza = pizza ? JSON.parse(pizza as string) : null;

  if (!parsedPizza) return <Text>Pizza não encontrada</Text>;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
      <TopBar title='Detalhes da pizza' goBackTo="/(screens)/pickupPizzaMenu" />

      <View style={styles.content}>
        <Text style={styles.title}>{parsedPizza.title}</Text>
        <View style={styles.imageWrapper}>
            <Image
            source={{
                uri: parsedPizza.imageUrl.trim()
                ? parsedPizza.imageUrl
                : 'https://res.cloudinary.com/dml539lnv/image/upload/v1750055901/ChatGPT_Image_16_de_jun._de_2025_03_38_34_tuz8n0.png',
            }}
            style={styles.image}
            />
            <Text style={styles.description}>{parsedPizza.description}</Text>
            </View>
            <CardDefault>
            <View style={styles.cardRow}>
              <View style={styles.leftColumn}>
                <Text style={styles.label}>Quantidade:</Text>
                <View style={styles.quantityControl}>
                  <Text style={[styles.button, { paddingHorizontal: 13 }]}>-</Text>
                  <Text style={styles.quantity}>1</Text>
                  <Text style={styles.button}>+</Text>
                </View>
                <Text style={styles.label}>Valor:</Text>
                <Text style={styles.price}>R$ {parsedPizza.price}</Text>
              </View>

              <View style={styles.rightColumn}>
                <Text style={styles.partsTitle}>Partes</Text>

                <View style={styles.optionRow}>
                  <View style={styles.radioEmpty} />
                  <Text style={styles.option}>Inteira</Text>
                </View>

                <View style={styles.optionRow}>
                  <View style={styles.radioEmpty} />
                  <Text style={styles.option}>Meio a meio</Text>
                </View>

                <View style={styles.optionRow}>
                  <View style={styles.radioEmpty} />
                  <Text style={styles.option}>3 Terços</Text>
                </View>
              </View>
            </View>
            </CardDefault>
        </View>
        <CartPriceBar cartPrice={`${parsedPizza.price.toUpperCase()}`}/>
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
    gap: 15,
    backgroundColor: '#fae3b3',
    paddingBottom: 85, 
  },
  imageWrapper: {
    width: 320,
    alignItems: 'flex-start',
    gap: 8,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: '#e03b39',
    marginTop: 5,
    fontWeight: 500,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  
  leftColumn: {
    justifyContent: 'flex-start',
  },
  
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 10,
  },
  
  button: {
    fontSize: 24,
    backgroundColor: '#e03b39',
    color: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
    overflow: 'hidden',
  },
  
  quantity: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 6,
  },
  
  rightColumn: {
    justifyContent: 'flex-start',
  },
  
  partsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    gap: 8,
  },
  
  radioEmpty: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  
  option: {
    fontSize: 16,
    color: '#5a3e21',
  },
});
