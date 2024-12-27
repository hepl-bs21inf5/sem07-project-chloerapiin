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

const selectedValue = ref<string | null>(null);

const answerText = computed<string>(
  () =>
    props.options.find((option) => option.value === props.answer)?.text ??
    props.answer,
);

watch(
  selectedValue,
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
      model.value = selectedValue.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;
    } else if (newModel === QuestionState.Empty) {
      selectedValue.value = null;
    }
  },
);
</script>

<template>
    <div>
      <label :for="props.id">{{ props.text }}</label>
      <select :id="props.id" v-model="selectedValue" class="form-select">
        <option value="" disabled selected>Choisissez une option</option>
        <option v-for="option in props.options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
  
      <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
        <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
        <p v-else class="text-danger">
          Faux ! La réponse était : {{ answerText }}
        </p>
        <p class="blockquote-footer">{{ props.answerDetail }}</p>
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
</style>