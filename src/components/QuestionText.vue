<script setup lang="ts">
import { ref, watch } from 'vue'

import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
/*définir les props */
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  placeholder: {
    type: String,
    required: false, /*permet de rendre la propriété placeholder optionnelle */
    default: 'Veuillez saisir une réponse',
  } /*phrase mise par défaut pour chaque question posée*/,
})

const value = ref<string | null>(null)

/*la fonction watch permet de d'éxecuter une fonction à chaque fosi que 'value' change */
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

//IF: si newModele est égale a questionstate ca veut dire que la réponse à été rentrée
//--> on vérifier alors si value.value(éa valeur entrée par l'utilisateur)est égale à props.answer(la bonne réponse)
//--> si oui alors on met à jour model.value à questionstate.correct (la bonne réponse)
//--> sinon on met à jour sous questionstate.wrong (mauvaise réponse)

//ELSE IF : sinon si newModel est égale à questionstate.empty (pas de réponse)alors cela réinitialise la valeur a null
// sa permet de répondre à une seule question si l'on veut sans être dérangé par les questions auxquelles on n'a pas répondu
watch(
  model,
  (newModel) => {
    if (newModel === QuestionState.Submit) {
      model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
    } else if (newModel === QuestionState.Empty){
      value.value = null
    }
  },
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
</template>
