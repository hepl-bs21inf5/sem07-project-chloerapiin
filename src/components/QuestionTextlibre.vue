<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { QuestionState } from '@/utils/models';

const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder: { type: String, default: 'Veuillez écrire votre réponse ici' },
  answer: { type: String, required: false }, // Facultatif pour les réponses libres
  answerDetail: { type: String, default: '' }, // Explication affichée après soumission
  siCorrectAnswer: { type: Boolean, default: false }, // Définit si une réponse correcte existe
});

//Etat de la question
const model = defineModel<QuestionState>(QuestionState.Empty);
const userAnswer = ref<string>('');


const disabled = computed(() => {
  return model.value === QuestionState.Submit;
});


//si la question est soumise alors affiche le commentaire
const showFeedback = computed(() => {
  return model.value === QuestionState.Submit;
});

//donne le message de feedback grâce à answerdetail
const feedbackMessage = computed(() => {
  if (model.value === QuestionState.Fill) {
    return props.answerDetail; // Affiche answerDetail
}});

watch(userAnswer, (newValue) => {
  if (!newValue.trim()) {
    model.value = QuestionState.Empty;
  } else {
    model.value = QuestionState.Fill;
  }
});

watch(
  () => model.value,
  (newValue) => {
    if (newValue === QuestionState.Empty) {     //si la valeur entrée est égale à l'état vide
      userAnswer.value = '';                    // Réinitialise le champ texte lorsque qu'on clique sur le bouton réinitialiser 
    }
  }
);

//fonction pour soumettre la question
function submit(): void {
  model.value = QuestionState.Submit;
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
  </div>
  <p class="blockquote-footer">{{ props.answerDetail }}</p>
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

 
