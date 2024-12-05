<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import type { QuestionState } from '@/utils/models';
import { reactive, ref } from 'vue'
/*stocker les questions dans la ref questions */
const questions = ref<
  {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
>([])
const answers = reactive<{ [key: number]: string | null }>({})

fetch(
  'https://opentdb.com/api.php?amount=10&type=multiple',
) /*Ce composant va récupérer 10 questions avec l'API(url)   */
  .then((response) => response.json())
  .then((data) => (questions.value = data.results))
</script>

<!--On affiche les questions avec le composant questionRadio(avec la boucle v-for) en utilisant les propriétées des const-->
<template>
  <form>
    <QuestionRadio
      v-for="(question, index) in questions"
      :id="index.toString()"
      :key="index"
      v-model="answers[index]"
      :text="question.question"
      :options="[
        { value: question.correct_answer, text: question.correct_answer },
        ...question.incorrect_answers.map((answer) => ({
          value: answer,
          text: answer,
        })),
      ]"
    />
  </form>
</template>
