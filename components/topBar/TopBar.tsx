import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinkProps } from 'expo-router';

interface TopBarProps {
  title: string;
  goBackTo: LinkProps['href'];
}

export const TopBar = ({ title, goBackTo }: TopBarProps) => {
  const router = useRouter();

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => router.push(goBackTo)} style={styles.backButton}>
        <Ionicons name="arrow-back" size={35} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#e03b39',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});