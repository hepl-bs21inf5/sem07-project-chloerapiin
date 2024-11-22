<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null) /*Création de mes différentes valeurs pour mes quiz */
const correctAnswers = ref<boolean[]>([])
const score = computed<number>(
  () => correctAnswers.value.filter((value) => value).length,
) /*computed score qui calcule le score en fonction des valeurs de correctAnswers */
const totalScore = computed<number>(
  () => correctAnswers.value.length,
) /*calcule le score maximal possible, en prenant le tableau seulement des valeurs correctes */
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
  /*j'ai rajouter la méthode toLowerCase() qui permet de mettre la réponse de l'utilisateur en minuscules */
  let score = 0

  if (cheval.value?.toLowerCase() === 'blanc') {
    score++
  }

  if (pattes.value?.toLowerCase() === '4') {
    score++
  }

  if (capitale.value?.toLowerCase() === 'berne') {
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
  <form>
    
  
  <!--</form>
   

    <QuestionRadio
      id="cheval"
      v-model="correctAnswers[0]"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'rose', text: 'Rose' },
      ]"
      answer="blanc"
    />
  </form> -->

    <QuestionText
      id="cheval"
      v-model="correctAnswers[0]"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      answer="blanc"
      placeholder="Veuillez saisir une couleur"
    />
  </form>

  <form>
    

    <QuestionRadio
      id="pattes"
      v-model="correctAnswers[1]"
      text="Combien de pattes a un chat ?"
      :options="[
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '8', text: '8' },
        { value: '4', text: '4' },
      ]"
      answer="4"
    />
  </form>

  <!-- <QuestionText
      id="pattes"
      v-model="pattes"
      text="Combien de pattes a un chat?"
      placeholder="Veuillez saisir un nombre"
    />
  </form> -->

  <form>


    <QuestionRadio
      id="capitale"
      v-model="correctAnswers[2]"
      text="Quelle est la capitale de la suisse ?"
      :options="[
        { value: 'zurich', text: 'Zurich' },
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'geneve', text: 'Geneve' },
      ]"
      answer="berne"
    />

    <!-- <QuestionText
      id="capitale"
      v-model="correctAnswers[]"
      text="Quelle est la capitale de la Suisse ?"
      placeholder="Veuillez saisir une ville"
    /> -->

    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>
    <!-- pour mettre un bouton reset qui englobe tous le quiz je dois mettre en secondaire et utiliser la méthode resetForm elle remet à zéro le formulaire  -->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">Recommencer</button>-->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">recommencer</button>-->
    <!--<button class="btn btn-secondary" type="button" @click="reset">Recommencer</button>-->

    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="reset">
      Réinitialiser
    </button>
    <div>Réponses correctes : {{ correctAnswers }}</div>
    <div>Score : {{ score }} / {{ totalScore }}</div>
  </form>
</template>
