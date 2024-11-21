<script setup lang="ts">
import { ref, watch } from 'vue'

const model = defineModel<booleanl>()
/*définir les props */
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  placeholder: {
    type: String,
    default: 'Veuillez saisir une réponse',
  } /*phrase mise par défaut pour chaque question posée*/,
})

const value = ref<string | null>(null)

/*la fonction watch permet de d'éxecuter une fonction à chaque fosi que 'value' change */
// elle va comparer la réponse de l'utilisateur avec notre answer(réponse correcte) et mettre à jour le 'model'
watch(
  value,
  (newValue) => {
    model.value = newValue?.toLowerCase() === props.answer.toLowerCase();
  },
  { immediate: true },
)
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
    />
  </div>
</template>
