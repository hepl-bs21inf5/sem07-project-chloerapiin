<script setup lang="ts">
import {
  ref,
  watch,
  type PropType,
} from 'vue' //defineModel et defineProps pour définir le modèle (v-model) et les propriétés (text, name, options) du composant. 

import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>() //on transforme le model pour qu'il contienne un état
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },//on ajoute une nouvelle propriété qui va contenir la reponse correcte 
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})

const value = ref<string | null>(null) ///ajouter la const (ref,value) pour la valeur de réponse de l'utilisateur 

//la fonction watch permet de d'éxecuter une fonction à chaque fosi que 'value' change 
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
);

//on rajoute le empty pour si jamais la personne ne coche pas de réponse on puisse quand même soumettre à la correction nos réponses 
watch(
  model,
  (newModel)=> {
    if (newModel === QuestionState.Submit){
      model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
    } else if (newModel=== QuestionState.Empty){
      value.value = null
    }
  },
);

</script>

<template>
  {{ props.text }}
  <!--On affiche le texte de la question-->
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <!--On affiche les options de réponse en utilisant une boucle v-for sur props.options : le <div> sera répété pour chaque option.-->
    <!--si commence par : alors il s'agit d'expression javascript (interprétées) si pas de : alors il s'agit de chaîne de caractères (non interprétées)-->
    <!-- on change aussi v-model pour qu'il soit lié à la valeur donc on lui assigne value  -->
    <input
      :id="`${props.id}-${option.value}`"
      v-model="value"
      class="form-check-input"
      type="radio"
      :name="props.id"
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
</template>
