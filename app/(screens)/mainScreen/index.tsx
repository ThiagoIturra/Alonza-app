import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { useRouter } from 'expo-router';
import CustomButton from '../../../components/customButton/CustomButton'
import LogoImage from '../../../components/logoImage/LogoImage'
import ClosedBanner from '../../../components/closedBanner.tsx/ClosedBanner';
import { Share } from 'react-native';
import React from 'react';

export default function MainScreen() {
  const router = useRouter();

  const navigateToMenus = () => {
    router.push('/(screens)/menuScreen');
  };

  const navigateToOrders = () => {
    router.push('/(screens)/myOrdersScreens');
  };

  const navigateToInfo = () => {
    router.push('/(screens)/infoScreen');
  };

  const shareAppWithOthers = async () => {
    try {
      const result = await Share.share({
        message: 'Bateu a fome? 🍕 Pede sua pizza pelo app Alonza 3 Gomes! É rápido, fácil e delicioso 😋 Baixa agora: https://play.google.com/store/apps/details?id=alonza3gomes',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Compartilhado com atividade:', result.activityType);
        } else {
          console.log('Compartilhado com sucesso!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Compartilhamento cancelado');
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fae3b3" barStyle="dark-content" />
      <LogoImage url="https://res.cloudinary.com/dml539lnv/image/upload/v1744442209/AlonzaLogo-vetor_mf8sdf.png" />
      <ClosedBanner/>
      <CustomButton text="Ver Menu" textColor="#ffffff" color="#e03b39" onPress={navigateToMenus} />
      <CustomButton text="Meus Pedidos" textColor="#ffffff" color="#e03b39" onPress={navigateToOrders} />
      <CustomButton text="Informações" textColor="#ffffff" color="#e03b39" onPress={navigateToInfo} />
      <CustomButton text="Compartilhe" textColor="#ffffff" color="#e03b39" onPress={shareAppWithOthers} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: '#fae3b3'
  },
})
