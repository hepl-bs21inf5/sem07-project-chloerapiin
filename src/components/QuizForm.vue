<script setup lang="ts">
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null) /*Création de mes différentes valeurs pour mes quiz */
const filled = computed<boolean>(
  () => cheval.value !== null && pattes.value !== null && capitale.value !== null,
)

function submit(event: Event): void {
  event.preventDefault()
  if (filled.value) {
    alert(`Vous avez choisi la couleur ${cheval.value} !`)
    alert(`Vous avez dit qu'il avait ${pattes.value} pattes !`)
    alert(`Vous avez choisi comme capitale ${capitale.value} !`)
  }
}
</script>

<template>
  <form @submit="submit">
    De quelle couleur est le cheval blanc de Napoléon ?
    <div class="form-check">
      <input
        id="chevalBlanc"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="blanc"
      />
      <label class="form-check-label" for="chevalBlanc">Blanc</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBrun"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="brun"
      />
      <label class="form-check-label" for="chevalBrun">Brun</label>
    </div>
    <div class="form-check">
      <input
        id="chevalNoir"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="noir"
      />
      <label class="form-check-label" for="chevalNoir">Noir</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
  </form>

  <form @submit="submit">
    Combien de pattes a un chat ?
    <div class="form-check">
      <input
        id="pattes2"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="2"
      />
      <label class="form-check-label" for="pattes2">2</label>
    </div>
    <div class="form-check">
      <input
        id="pattes4"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="4"
      />
      <label class="form-check-label" for="pattes4">4</label>
    </div>
    <div class="form-check">
      <input
        id="pattes8"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="8"
      />
      <label class="form-check-label" for="pattes8">8</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
  </form>

  <form @submit="submit">
    Quelle est la capitale de la suisse ?
    <div class="form-check">
      <input
        id="capitalelausanne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="lausanne"
      />
      <label class="form-check-label" for="capitalelausanne">Lausanne</label>
    </div>
    <div class="form-check">
      <input
        id="capitalegeneve"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="geneve"
      />
      <label class="form-check-label" for="capitalegeneve">Genève</label>
    </div>
    <div class="form-check">
      <input
        id="capitaleberne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="berne"
      />
      <label class="form-check-label" for="capitaleberne">Berne</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
  </form>
</template>
