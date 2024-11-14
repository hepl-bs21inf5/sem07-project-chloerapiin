<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import { computed, ref } from 'vue'
import QuestionText from './QuestionText.vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null) /*Création de mes différentes valeurs pour mes quiz */
const filled = computed<boolean>(
  () => cheval.value !== null && pattes.value !== null && capitale.value !== null,
)

function submit(event: Event): void {
  event.preventDefault()
  if (filled.value) {
    /*alert(`Vous avez choisi la couleur ${cheval.value} !`)
    alert(`Vous avez dit qu'il avait ${pattes.value} pattes !`)
    alert(`Vous avez choisi comme capitale ${capitale.value} !`)*/
  }

  let score = 0

  if (cheval.value === 'blanc') {
    score++
  }

  if (pattes.value === 'pattes4') {
    score++
  }

  if (capitale.value === 'berne') {
    score++
  }
  if (score === 3) {
    alert('Félicitations, votre score est parfait !')
  } else {
    alert(`Votre score final est de ${score} sur 3.`)
  }
}

function reset(event: Event): void {
  event.preventDefault()

  cheval.value = null
  pattes.value = null
  capitale.value = null
}
</script>

<template>
  <form @submit="submit">
    <!-- De quelle couleur est le cheval blanc de Napoléon ?
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
    <div class="form-check">
      <input
        id="chevalrose"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="rose"
      />
      <label class="form-check-label" for="chevalrose">Rose</label>
    </div>
  
  </form>
   -->

    <!-- <QuestionRadio
      id="cheval"
      v-model="cheval"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'rose', text: 'Rose' },
      ]"
    />

  </form> -->

    <QuestionText
      id="cheval"
      v-model="cheval"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      placeholder="Veuillez saisir une couleur"
    />
  </form>

  <form @submit="submit">
    <!-- Combien de pattes a un chat ?
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
    <div class="form-check">
      <input
        id="pattes3"
        v-model="pattes"
        class="form-check-input"
        type="radio"
        name="pattes"
        value="3"
      />
      <label class="form-check-label" for="pattes3">3</label>
    </div>
  </form> -->

    <QuestionRadio
      id="pattes"
      v-model="pattes"
      text="Combien de pattes a un chat ?"
      :options="[
        { value: 'pattes2', text: '2' },
        { value: 'pattes3', text: '3' },
        { value: 'pattes8', text: '8' },
        { value: 'pattes4', text: '4' },
      ]"
    />
  </form>

  <form @submit="submit">
    <!-- Quelle est la capitale de la suisse ?
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
        value="Berne"
      />
      <label class="form-check-label" for="capitaleberne">Berne</label>
    </div>

    <div class="form-check">
      <input
        id="capitalezurich"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="zurich"
      />
      <label class="form-check-label" for="capitalezurich">Zurich</label>
    </div> -->
    <QuestionRadio
      id="capitale"
      v-model="capitale"
      text="Quelle est la capitale de la suisse ?"
      :options="[
        { value: 'zurich', text: 'Zurich' },
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'geneve', text: 'Geneve' },
      ]"
    />

    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
    <!-- pour mettre un bouton reset qui englobe tous le quiz je dois mettre en secondaire et utiliser la méthode resetForm elle remet à zéro le formulaire  -->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">Recommencer</button>-->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">recommencer</button>-->
    <!--<button class="btn btn-secondary" type="button" @click="reset">Recommencer</button>-->

    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="reset">
      Réinitialiser
    </button>
  </form>
</template>
