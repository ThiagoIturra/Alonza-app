import { StatusBar, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';
import { TopBar } from '../../../components/topBar/TopBar';
import { CardDefault } from '../../../components/cardDefault/CardDefault';
import { pickupPizzaMenuMock } from '../../../mocks/pickupPizzaMenuMock';
import { CartPriceBar } from '../../../components/cartPriceBar/cartPriceBar';
import SearchInput from '../../../components/searchInput/SearchInput';
import { useState } from 'react';

export default function pickupPizzaMenu() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState(
    [...pickupPizzaMenuMock].sort((a, b) => a.title.localeCompare(b.title))
  );
  const [activeFilter, setActiveFilter] = useState<'title' | 'price'>('title');


  const handleSearch = (text: string) => {
    setSearchText(text);
  
    const filtered = pickupPizzaMenuMock.filter((pizza) => {
      const searchTokens = text.toLowerCase().split(' ');
      const titleTokens = pizza.title.toLowerCase().split(' ');
      return searchTokens.every((token) => 
        titleTokens.some((titleToken) => titleToken.includes(token))
      );
    });
  
    setFilteredPizzas(filtered);
  };

  const handleFilterChange = (filter: 'title' | 'price') => {
    setActiveFilter(filter);

    const sortedPizzas = [...filteredPizzas].sort((a, b) => {
      if (filter === 'title') {
        return a.title.localeCompare(b.title);
      } else if (filter === 'price') {
        const priceA = Number(a.price.replace(',', '.').trim());
        const priceB = Number(b.price.replace(',', '.').trim());
        return priceA - priceB;
      }
      return 0;
    });
  
    setFilteredPizzas(sortedPizzas);
  };

  const handleCardClick = (pizza) => {
    router.push({
      pathname: '/(screens)/pizzaDetailScreen',
      params: {
        pizza: JSON.stringify(pizza),
      },
    });
  };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
        <TopBar title="Cardápio de Pizzas" goBackTo="/(screens)/pickupMenu"/>

        <SearchInput placeholder='Pesquisar...' onSearch={handleSearch} onFilterChange={handleFilterChange}/>

        <ScrollView>
        <View style={styles.content}>
        {filteredPizzas.map((pizza, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardClick(pizza)}>
            <CardDefault
              key={index}
              style={{
                width: '95%',
                flexDirection: 'row',
                alignItems: 'flex-start',
                elevation: 3,
                padding: 10,
                marginTop: index === 0 ? 15 : 0,
              }}
            >
              <Image
                style={styles.image}
                source={{
                  uri: pizza.imageUrl?.trim()
                    ? pizza.imageUrl
                    : 'https://res.cloudinary.com/dml539lnv/image/upload/v1750055901/ChatGPT_Image_16_de_jun._de_2025_03_38_34_tuz8n0.png',
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
            </TouchableOpacity>
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
    gap: 15,
    backgroundColor: '#fae3b3',
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