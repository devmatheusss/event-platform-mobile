import { View, Text, Pressable, PressableProps } from 'react-native'
import { Lock, PlusCircle } from 'phosphor-react-native'
import { isPast } from 'date-fns'
import { Link } from 'expo-router'

type LessonProps = PressableProps & {
  slug: string
  title: string
  lessonType: "live" | "class"
  availableAt: Date
  activeLessonSlug: string
}

export function Lesson({ slug, lessonType, title, availableAt, activeLessonSlug, ...rest }: LessonProps) {
  const isAvailable = isPast(availableAt)
  const isActiveLesson = activeLessonSlug === slug

  return (
    <Pressable
      {...rest}
      className={`${isActiveLesson ? "bg-green-500 border-green-500" : "bg-transparent border-gray-300"} w-full rounded-md border p-3 mb-2`}
    >
      <View className="mb-2 flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          {
            isAvailable
              ? <PlusCircle size={18} color={isActiveLesson ? "white" : "#81D8F7"} />
              : <Lock size={18} color='#FBA94C' />
          }
          <Text
            className={
              `${isAvailable ? 'text-blue-500' : 'text-orange-500'} ${isActiveLesson && "text-white"} text-sm`
            }
          >
            {isAvailable ? "Conteúdo liberado" : "Em breve"}
          </Text>
        </View>

        <View
          className={`${isActiveLesson ? "border-white" : "border-green-500"} border p-1 px-2 rounded`}
        >
          <Text
            className={`${isActiveLesson ? "text-white" : "text-green-500"} uppercase text-xs`}
          >
            {lessonType === 'live' ? "Ao vivo" : "Aula prática"}
          </Text>
        </View>
      </View>
      <Text
        className={`${isActiveLesson ? "text-white" : "text-zinc-200"} text-lg`}
      >
        {title}
      </Text>
    </Pressable>
  )
}