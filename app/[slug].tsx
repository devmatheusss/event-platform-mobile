import { View, Text } from 'react-native'
import { useGlobalSearchParams } from 'expo-router'

export default function Page() {
  const { slug } = useGlobalSearchParams()

  return (
    <View>
      <Text>Video {slug}</Text>
    </View>
  )
}