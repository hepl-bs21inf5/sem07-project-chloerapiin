<script setup lang="ts">
import { ref, watch } from 'vue'

import { QuestionState } from '@/utils/models'

//définit le modèle d'état pour la question
const model = defineModel<QuestionState>(QuestionState.Empty)
//définir les props 
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: [String, Array ], required: true }, //la réponse peut être un string ou un tableau si plusieurs réponses
  answerDetail: { type: String, default: "" },
  placeholder: {
    type: String,
    required: false, //si il y a une valeur par défaut, la props est optionnelle  
    default: 'Veuillez saisir une réponse'}, //phrase mise par défaut pour chaque question posée
})

const value = ref<string | null>(null)

//vérifie si la réponse est correct
const isCorrectAnswer = (): boolean => {
  //si prop.answer est un tableau 
  if (Array.isArray(props.answer)) {
    //alors vérifie si la réponse est dans le tableau 
    return props.answer.includes(value.value?.trim()?.toLowerCase() || ''); //on utilise includes pour vérifier plusieurs réponses dans le tableau
  }// on met la réponse en minuscule(toLowerCase()) et on enlvève les espcaces inutiles (trim()) 

  //sinon prop.answet est juste un string
  return value.value?.trim()?.toLowerCase() === props.answer.trim().toLowerCase();
};// on compare si la réponse de l'utilisateur est juste avec prop.answer et comme avant on mets tous en minuscule et on enlève les espaces inutiles  


//la fonction watch permet de d'éxecuter une fonction à chaque fosi que 'value' change */
// elle va comparer la réponse de l'utilisateur avec notre answer(réponse correcte) et mettre à jour le 'model'
watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

//IF: si newModele est égale a questionstate.submit ca veut dire que la réponse à été rentrée
//--> on vérifier alors si isCorrectAnswer est égale à model.value (la valeur entrée par l'utilisateur)est égale à props.answer(la bonne réponse)
//--> si oui alors on met à jour model.value à questionstate.correct (la bonne réponse)
//--> sinon on met à jour sous questionstate.wrong (mauvaise réponse)

//ELSE IF : sinon si newModel est égale à questionstate.empty (pas de réponse)alors cela réinitialise la valeur a null
// sa permet de répondre à une seule question si l'on veut sans être dérangé par les questions auxquelles on n'a pas répondu
watch(
  model,
  (newModel) => {
    if (newModel === QuestionState.Submit) {
      model.value = isCorrectAnswer() ? QuestionState.Correct : QuestionState.Wrong;
    } else if (newModel === QuestionState.Empty) {
      value.value = null;
    }
  }
);



</script>
<template>
  <!--Attention on doit utiliser les props pour définir chaque variable-->
  <label :for="props.id" class="form-label">{{ props.text }}</label>
  <div>
    <input
      :id="props.id"
      v-model="value"
      type="text"
      class="form-control"
      :placeholder="props.placeholder"
      :disabled="
        model === QuestionState.Submit ||
        model === QuestionState.Correct ||
        model === QuestionState.Wrong
      "
    />

  </div>

    <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
      <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
      <p v-else class="text-danger">
        Faux ! La réponse était : {{ props.answer }}
    </p>
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>

<style scoped>
  .text-danger {
    color: red !important;
  }
  .text-success {
    color: greenyellow !important;
  }
</style>