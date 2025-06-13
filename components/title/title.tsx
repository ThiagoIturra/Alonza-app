import { Text, TextStyle } from 'react-native'

type TitleProps = {
  children: string
  color?: string
  size?: number
  style?: TextStyle
}

export default function Title({ children, color = '#000', size = 20, style }: TitleProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color: color,
          fontWeight: 'bold',
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}
