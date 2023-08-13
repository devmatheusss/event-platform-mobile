import { View, Text, Pressable, PressableProps } from 'react-native'
import { Lock, PlusCircle } from 'phosphor-react-native'
import { isPast } from 'date-fns'
import { Link } from 'expo-router'

type LessonProps = PressableProps & {
  slug: string
  title: string
  lessonType: "live" | "class"
  availableAt: Date
}

export function Lesson({ lessonType, title, availableAt, ...rest }: LessonProps) {
  const isAvailable = isPast(availableAt)

  return (
    <Pressable {...rest} className="w-full rounded-md border border-gray-300 p-3 mb-2">
      <View className="mb-2 flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          {
            isAvailable
              ? <PlusCircle size={18} color="#81D8F7" />
              : <Lock size={18} color='#FBA94C' />
          }
          <Text
            className={
              `${isAvailable
                ? 'text-blue-500'
                : 'text-orange-500'
              } text-sm`
            }
          >
            {isAvailable ? "Conteúdo liberado" : "Em breve"}
          </Text>
        </View>

        <View className='border border-green-500 p-1 px-2 rounded'>
          <Text className='text-green-500 uppercase text-xs'>
            {lessonType === 'live' ? "Ao vivo" : "Aula prática"}
          </Text>
        </View>
      </View>
      <Text className="text-zinc-200 text-lg">{title}</Text>
    </Pressable>
  )
}