<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { QuestionState } from '@/utils/models';

const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder: { type: String, default: 'Veuillez écrire votre réponse ici' },
  answer: { type: String, required: false }, // Facultatif pour les réponses libres
  answerDetail: { type: String, default: '' }, // Explication affichée après soumission
  siCorrectAnswer: { type: String, default: false }, // Définit si une réponse correcte existe
});

const model = defineModel<QuestionState>(QuestionState.Empty);
const userAnswer = ref<string>('');

const disabled = computed(() => {
  return model.value === QuestionState.Submit ||
         model.value === QuestionState.Correct ||
         model.value === QuestionState.Wrong;
});

const showFeedback = computed(() => {
  return model.value === QuestionState.Correct || model.value === QuestionState.Wrong;
});

const feedbackMessage = computed(() => {
  if (model.value === QuestionState.Correct) {
    return 'Juste !';
  } else if (model.value === QuestionState.Wrong) {
    return `Faux ! La réponse était : ${props.answer}`;
  }
  return '';
});

watch(userAnswer, (newValue) => {
  if (!newValue.trim()) {
    model.value = QuestionState.Empty;
  } else {
    model.value = QuestionState.Fill;
  }
});

function submit(): void {
  if (props.siCorrectAnswer && props.answer) {
    model.value = userAnswer.value.trim().toLowerCase() === props.answer.trim().toLowerCase()
      ? QuestionState.Correct
      : QuestionState.Wrong;
  } else {
    model.value = QuestionState.Fill;
  }
}

function reset(): void {
  userAnswer.value = '';
  model.value = QuestionState.Empty;
}

</script>
<template>
    <div class="question-text-libre">
      <label :for="id" class="form-label">{{ text }}</label>
      <textarea
        :id="id"
        v-model="userAnswer"
        class="form-control"
        :placeholder="placeholder"
        :disabled="disabled"
      ></textarea>
      <p v-if="showFeedback" class="feedback">
        {{ answerDetail }}
      </p>
    </div>
</template>

<style scoped>
.feedback {
  margin-top: 0.5rem;
  font-style: italic;
  color: var(--bs-secondary);
}
.form-control {
  margin-bottom: 1rem;
}
  .text-danger {
    color: red !important;
  }
  .text-success {
    color: greenyellow !important;
  }
</style>

 