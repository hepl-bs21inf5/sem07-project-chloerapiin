<script setup lang="ts">
import {
  defineModel,
  defineProps,
  type PropType,
} from 'vue' /*defineModel et defineProps pour définir le modèle (v-model) et les propriétés (text, name, options) du composant. */

const model = defineModel<string | null>()
/*définir les props */
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder: { type: String, required: true },
})
</script>
<template>
  <!--Attention on doit utiliser les props pour définir chaque variable-->
  <label :for="props.id" class="form-label">{{ props.text }}</label>
  <div>
    <input
      :id="props.id"
      v-model="model"
      type="text"
      class="form-control"
      :placeholder="props.placeholder"
    />
  </div>
</template>
