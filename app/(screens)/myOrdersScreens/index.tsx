import { Text, StyleSheet, StatusBar, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { CardDefault } from '../../../components/cardDefault/CardDefault';
import { TopBar } from '../../../components/topBar/TopBar';

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

        <CardDefault style={{ marginTop: 30 }}>
          <Text style={styles.orderInfo}>
            16/03/2025 22:26 <Text style={styles.orderLabel}>- Pedido 394751</Text>
          </Text>
          <Text style={styles.orderStatus}>Em andamento</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            15/03/2025 20:02 <Text style={styles.orderLabel}>- Pedido 394632</Text>
          </Text>
          <Text style={styles.orderStatus}>Em andamento</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            15/03/2025 11:40 <Text style={styles.orderLabel}>- Pedido 394600</Text>
          </Text>
          <Text style={styles.orderStatus}>Em andamento</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            14/03/2025 19:10 <Text style={styles.orderLabel}>- Pedido 394102</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            13/03/2025 13:45 <Text style={styles.orderLabel}>- Pedido 393980</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            12/03/2025 21:33 <Text style={styles.orderLabel}>- Pedido 393875</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            11/03/2025 10:15 <Text style={styles.orderLabel}>- Pedido 393760</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            10/03/2025 17:55 <Text style={styles.orderLabel}>- Pedido 393645</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>

        <CardDefault style={{ marginTop: 15 }}>
          <Text style={styles.orderInfo}>
            09/03/2025 09:10 <Text style={styles.orderLabel}>- Pedido 393500</Text>
          </Text>
          <Text style={styles.orderStatusDone}>Finalizado</Text>
        </CardDefault>
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
