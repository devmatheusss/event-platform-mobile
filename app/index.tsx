import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Lesson } from "../src/components/Lesson";
import { useGetLessonBySlugQuery, useGetLessonsQuery } from "../src/graphql/generated";
import { useState } from "react";

export default function Home() {
  const [lessonSlug, setLessonSlug] = useState<string | null>(null)
  const [isDescExpanded, setIsDescExpanded] = useState(false)

  const { data, loading } = useGetLessonsQuery()
  const { data: lesson, loading: lessonLoading } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  console.log(lesson)

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <View className="w-full bg-black aspect-video" />

      <ScrollView>
        {!lessonSlug || !loading && (
          <>
            <View className="p-4 gap-2">
              <Text className="text-2xl text-gray-100 font-medium">{lesson?.lesson?.title}</Text>
              <Text
                className="text-gray-200"
                numberOfLines={!isDescExpanded ? 2 : 0}
                style={{ lineHeight: 20 }}
              >
                {lesson?.lesson?.description}
              </Text>

              <Pressable onPress={() => setIsDescExpanded(prev => !prev)}>
                <Text className="text-green-300 text-xs">Ver {!isDescExpanded ? "mais" : "menos"}</Text>
              </Pressable>
            </View>

            <View className="p-4 flex-row justify-between items-center">
              <View className="flex-row gap-2 items-center">
                <View className="w-10 h-10 rounded-full border-2 border-blue-500">
                  <Image source={{
                    uri: lesson?.lesson?.teacher?.avatarURL
                  }} className="rounded-full w-full h-full" />
                </View>
                <View className="">
                  <Text className="font-medium text-lg text-gray-100">{lesson?.lesson?.teacher?.name}</Text>
                  <Text className="font-medium text-sm text-gray-300 max-w-[250px]" numberOfLines={1}>{lesson?.lesson?.teacher?.bio}</Text>
                </View>
              </View>

            </View>
          </>
        )}

        <View className="p-4">
          <Text className="mb-4 text-2xl text-gray-100 font-medium">Aulas</Text>

          {loading ? (
            <ActivityIndicator />
          ) : (
            <View className="w-full">
              {data?.lessons.map((lesson) => {
                return (
                  <Lesson
                    key={lesson.id}
                    slug={lesson.slug!}
                    title={lesson.title}
                    lessonType={lesson.lessonType}
                    availableAt={new Date(lesson.availableAt)}
                    onPress={() => setLessonSlug(lesson.slug!)}
                  />
                )
              })}
            </View>
          )}


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
