import { Image, StyleSheet } from 'react-native'

type Props = {
  url: string
}

export default function LogoImage({ url }: Props) {
  return <Image source={{ uri: url }} style={styles.logo} />
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
})
