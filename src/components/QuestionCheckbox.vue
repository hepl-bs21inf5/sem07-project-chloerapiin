<!-- A presque les même propriétés que QuestionRadio.vue -->
<script setup lang="ts">
import { ref, watch, defineModel, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()

const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: Array as PropType<string[]>, required: true }, // on doit initier que la réponse est une liste
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
  answerDetail: { type: String, default: "" }, // Détail sur la réponse (facultatif)
})


const value = ref<string[]>([])

watch(
  value,
  (newValues) => {
    if (model.value !== QuestionState.Submit) {           // si l'utilisateur sélectionne une/des réponses 
      model.value = QuestionState.Fill                    //l'état de la question est fill = remplie
    }
    else if (newValues.length === null) {                  //si aucune réponse n'est selectionné alors le tableau avec les réponses est vide
      model.value = QuestionState.Empty                    //l'état de la question est empty = vide
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {                                      //si l'utilisateur soumet la question 
    const isCorrect =                                                           // vérification de si les réponses sont correcte 
      props.answer.length === value.value.length &&                             // vérifie si le nombre de réponse soumises égale au nombre de réponses justes
      props.answer.every((val) => value.value.includes(val))                    // Vérifie que chaque réponse juste là
    model.value = isCorrect ? QuestionState.Correct : QuestionState.Wrong       //si les réponse sont justes alors on définit l'état correct
                                                                                //si les réponses sont fausses alors on définit l'état incorrect
  } else if (newModel === QuestionState.Empty) {                                //sinon si l'utilisateur ne rentre pas de réponse alors on mets l'état empty = vide              
    value.value = []
  }
})
</script>

<template>
  <p>{{ props.text }}</p>
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <input
      :id="`${props.id}-${option.value}`"
      v-model="value"
      class="form-check-input"
      type="checkbox"
      :value="option.value"
      :disabled="
        model === QuestionState.Submit ||
        model === QuestionState.Correct ||
        model === QuestionState.Wrong
      "
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      {{ option.text }}
    </label>
  </div>

  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
      <p v-if="model === QuestionState.Correct" class="text-success">Juste ! 🎉</p>
      <p v-else class="text-danger">
        Faux ! Les réponses étaient : {{ props.answer.join(", ") }}
      </p>
      <p v-if="props.answerDetail" class="answer-detail">{{ props.answerDetail }}</p>
      
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