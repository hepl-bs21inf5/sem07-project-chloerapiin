<script setup lang="ts">
import {
  defineModel,
  defineProps,
  type PropType,
} from 'vue' /*defineModel et defineProps pour définir le modèle (v-model) et les propriétés (text, name, options) du composant. */

const model = defineModel<string | null>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})
</script>

<template>
  {{ props.text }}
  <!--On affiche le texte de la question-->
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <!--On affiche les options de réponse en utilisant une boucle v-for sur props.options : le <div> sera répété pour chaque option.-->
    <!--si commence par : alors il s'agit d'expression javascript (interprétées) si pas de : alors il s'agit de chaîne de caractères (non interprétées)-->
    <input
      :id="`${props.id}-${option.value}`"
      v-model="model"
      class="form-check-input"
      type="radio"
      :name="props.id"
      :value="option.value"
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      {{ option.text }}
    </label>
  </div>
</template>
