import { Text, StyleSheet, StatusBar, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { CardDefault } from '../../../components/cardDefault/CardDefault';
import { TopBar } from '../../../components/topBar/TopBar';
import { ordersMock } from '../../../mocks/ordersMock';

export default function myOrdersScreens() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
      <TopBar title="Pedidos" goBackTo="/(screens)/mainScreen" />
      <ScrollView style={styles.content}>
        <CardDefault style={{ marginTop: 30, width: '80%', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>Seus últimos 10 pedidos</Text>
        </CardDefault>

        {ordersMock.map(({ date, id, status }, index) => (
          <TouchableOpacity
            key={id}
            activeOpacity={0.9}
            onPress={() => {
              // For now, it does nothing
            }}
          >
            <CardDefault style={{ marginTop: index === 0 ? 30 : 15 }}>
              <View style={styles.orderInfoRow}>
                <Text style={styles.orderInfo}>{date}</Text>
                <Text style={styles.orderLabel}>Pedido {id}</Text>
              </View>
              <Text style={status === 'Finalizado' ? styles.orderStatusDone : styles.orderStatus}>
                {status}
              </Text>
            </CardDefault>
          </TouchableOpacity>
        ))}


        <View style={{ height: 16 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae3b3',
  },
  content: {
    paddingBottom: 32
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500'
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  orderInfo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C90028',
  },
  orderLabel: {
    fontWeight: 'bold',
    color: '#C90028',
  },
  orderStatus: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C90028',
  },
  orderStatusDone: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2ecc71',
  },
});
