import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const operatingHours = {
  0: { start: 18, end: 23.5 },
  1: { start: 18, end: 23.5 },
  2: { start: 18, end: 23.5 },
  3: { start: 18, end: 23.5 },
  4: { start: 18, end: 23.5 },
  5: { start: 18, end: 23.983 },
  6: { start: 18, end: 23.983 },
} as const

type Weekday = keyof typeof operatingHours

export default function ClosedBanner() {
  const now = new Date()
  const day = now.getDay() as Weekday
  const hour = now.getHours()
  const minute = now.getMinutes()
  const currentTime = hour + minute / 60

  const { start, end } = operatingHours[day]
  const isOpen = currentTime >= start && currentTime <= end

  return (
    <View style={styles.banner}>
      <Text style={styles.text}>
        {isOpen
          ? 'A cozinha já tá pronta! Pode fazer seu pedido'
          : 'A cozinha tá aquecendo! Volte às 18h!'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 48,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: -20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e03b39',
  },
})
