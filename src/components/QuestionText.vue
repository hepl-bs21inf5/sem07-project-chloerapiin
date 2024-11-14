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
  placeholder: {type: String, required: true}
  },

</script>
<template>
<label for="exampleFormControlInput" class="form-label">
    Combien de pattes a un chat ?
  </label>
  <input
    id="exampleFormControlInput"
    v-model="reponse"
    class="form-control"
    placeholder="Veuillez saisir un nombre"
    />

<template>
