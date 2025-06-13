import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  text: string
  color: string
  textColor: string
  onPress?: () => void
}

export default function CustomButton({ text, color, textColor = '#fff', onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
})
