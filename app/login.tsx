import { View, StyleSheet } from 'react-native'
import { SansText } from '../components/StyledText'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View style={styles.container}>
      <Link href="/">
        <SansText style={styles.title} weight='RobotoBold'>Login</SansText>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
  }
})