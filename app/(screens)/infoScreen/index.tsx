import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LogoImage from '../../../components/logoImage/LogoImage';
import { CardDefault } from '../../../components/cardDefault/CardDefault';
import { TopBar } from '../../../components/topBar/TopBar';

export default function InfoScreen() {
  const router = useRouter();

  const openInstagram = () => {
    const instagramUrl = 'https://www.instagram.com/alonzagomess/';
    Linking.openURL(instagramUrl).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e03b39" barStyle="dark-content" />
      <TopBar title="Sobre nós" goBackTo="/(screens)/mainScreen" />
      <ScrollView>
        <View style={styles.content}>
        <LogoImage url="https://res.cloudinary.com/dml539lnv/image/upload/v1744442209/AlonzaLogo-vetor_mf8sdf.png" />
        <CardDefault>
          <Text style={styles.cardTitle}>Pizzaria Alonza</Text>
          <Text style={styles.cardText}>
            Sabor de verdade com o melhor da pizza e esfiha. Qualidade, preço justo e aquele gostinho que conquista!
          </Text>
        </CardDefault>
        <CardDefault>
          <Text style={styles.cardTitle}>Horário de funcionamento</Text>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>domingo</Text>
            <Text style={styles.scheduleTime}>18:00–23:30</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>segunda-feira</Text>
            <Text style={styles.scheduleTime}>18:00–23:30</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>terça-feira</Text>
            <Text style={styles.scheduleTime}>18:00–23:30</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>quarta-feira</Text>
            <Text style={styles.scheduleTime}>18:00–23:30</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>quinta-feira</Text>
            <Text style={styles.scheduleTime}>18:00–23:30</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>sexta-feira</Text>
            <Text style={styles.scheduleTime}>18:00–23:59</Text>
          </View>
          <View style={styles.scheduleRow}>
            <Text style={styles.scheduleDay}>sábado</Text>
            <Text style={styles.scheduleTime}>18:00–23:59</Text>
          </View>
        </CardDefault>
        <CardDefault>
          <Text style={styles.cardTitle}>Contato</Text>
          <Text style={styles.cardText}>
          ☎️ (11)2302-3638
          </Text>
          <Text style={[styles.cardText, {paddingTop: 10}]}>
          📲 (11)96615-0946
          </Text>
        </CardDefault>
        <CardDefault>
          <Text style={styles.cardTitle}>Que tal uma olhadinha no nosso instagram?</Text>
          <TouchableOpacity onPress={openInstagram}>
            <Text style={styles.cardTextInstagram}>
              Clique em mim para abrir nosso instagram
            </Text>
          </TouchableOpacity>
        </CardDefault>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae3b3'
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#fae3b3',
    paddingTop: 23,
    paddingBottom: 32, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#e03b39',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  cardTextInstagram: {
    fontSize: 16,
    color: '#65995b',
    lineHeight: 22,
  },
  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  scheduleDay: {
    fontSize: 16,
    color: '#333',
  },
  scheduleTime: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});