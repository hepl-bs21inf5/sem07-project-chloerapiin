<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  type PropType,
} from 'vue';
import { QuestionState } from '@/utils/models';

const model = defineModel<QuestionState>();
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  answerDetail: { type: String, default: "" },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
});

const value = ref<string | null>(null);

const answerText = computed<string>(
  () =>
    props.options.find((option) => option.value === props.answer)?.text ??
    props.answer,
);

watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty;
    } else {
      model.value = QuestionState.Fill;
    }
  },
  { immediate: true },
);

watch(
  model,
  (newModel) => {
    if (newModel === QuestionState.Submit) {
      model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;
    } else if (newModel === QuestionState.Empty) {
      value.value = null;
    }
  },
);
</script>


<template>
<!--Affiche la question-->
    {{ props.text }}
    <div>
        <!--création de la liste déroulante avec les choix de réponses-->
      <select :id="props.id" v-model="value" class="form-select">
        <!--affiche choisissez une réponse-->
        <option value="" disabled selected>Choisissez une réponse</option>
      <!-- crée les options de la liste à partir des réponses données, chaque option a un texte et une valeur -->
        <option v-for="option in props.options" 
        :key="option.value" 
        :value="option.value">
        <!--affiche le texte des différentes réponses possibles -->
          {{ option.text }}
        </option>
      </select>
  <!-- comme dans questionradio, cette partie permet de dire à l'utilisateur si il y a bien répondu et sinon de lui donner la bonne réponse ainsi qu'ajouter des commentaire en plus avec answerDetail-->
      <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
        <p v-if="model === QuestionState.Correct" class="text-success">Juste ! 🎉</p>
        <p v-else class="text-danger">
          Faux ! La réponse était : {{ answerText }}
        </p>
        <p v-if="props.answerDetail" class="answer-detail">{{ props.answerDetail }}</p>
        </div>
    </div>

    
  </template>

<style scoped>
.text-danger {
  color: red !important;
}
.text-success {
  color: greenyellow !important;
}
.answer-detail {
  font-style: italic; /* Pour le texte en italique */
  color: #6c757d; /* Une couleur grise pour un ton neutre */
  font-size: 0.9rem; /* Une taille légèrement plus petite que le texte principal */
  margin-top: 0.5rem; /* Un espacement au-dessus pour séparer du contenu principal */
  border-left: 3px solid #e0e0e0; /* Une bordure fine pour accentuer le côté "commentaire" */
  padding-left: 0.5rem; /* Un espace entre la bordure et le texte */
}
</style>