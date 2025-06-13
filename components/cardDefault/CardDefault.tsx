import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type CardProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

export const CardDefault = ({ children, style }: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    width: '90%',
    alignSelf: 'center',
  },
});
