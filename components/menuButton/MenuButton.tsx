import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native'

type Props = {
  text: string
  color: string
  textColor?: string
  icon?: ImageSourcePropType
  iconSize?: number
  onPress?: () => void
}

export default function MenuButton({
  text,
  color,
  textColor = '#fff',
  icon,
  iconSize = 35,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.side}>
          {icon && (
            <Image
              source={icon}
              style={[styles.icon, { width: iconSize, height: iconSize }]}
            />
          )}
        </View>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
        <View style={styles.side}>
          <Text style={[styles.arrow, { color: 'red' }]}>{'>'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  side: {
    width: 35,
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrow: {
    fontSize: 20,
    fontWeight: '900',
  },
})
