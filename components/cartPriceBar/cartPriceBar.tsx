import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface CartPriceBarProps {
  cartPrice?: string;
}

export const CartPriceBar = ({ cartPrice }: CartPriceBarProps) => {
  const router = useRouter();

  return (
    <View style={styles.cartPriceBar}>
      <Text style={styles.title}>Total: R$</Text>  
      <Text style={styles.price}>{cartPrice}0,00</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    cartPriceBar: {
    width: '100%',
    position: 'absolute', 
    bottom: 0,      
    backgroundColor: '#e03b39',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});