import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Link href="/">
        <Text className="text-white text-3xl">Login</Text>
      </Link>
    </View>
  )
}