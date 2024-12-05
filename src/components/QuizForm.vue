<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import { QuestionState } from '@/utils/models';
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const pattes = ref<string | null>(null)
const capitale = ref<string | null>(null) //Création de mes différentes valeurs pour mes quiz 
const questionStates = ref<QuestionState[]>([])
const score = computed<number>(
  () =>
    questionStates.value.filter(state => state === QuestionState.Correct)
      .length,
) //computed score qui calcule le score en fonction des valeurs de questionStates 

const totalScore = computed<number>(() => questionStates.value.length)
 //calcule le score maximal possible, en prenant seulement les valeurs correctes 
 //la propriété length retourne retourne la longueur de la liste

 //every retourne true si toutes les valeurs du tableau satisfont la condition 
 const filled = computed<boolean>(() =>
  questionStates.value.every(state => state === QuestionState.Fill),
)
// submitted sera vrai seulement si l'utilisateur répond à toutes les questions
const submitted = computed<boolean>(() => questionStates.value.every(state => state === QuestionState.Correct || state === QuestionState.Wrong))


function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}

function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}

</script>

<template>
  <form>
    
    <!-- <QuestionRadio
      id="cheval"
      v-model="questionStates
    [0]"
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
      v-model="questionStates
    [0]"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      answer="blanc"
      placeholder="Veuillez saisir une couleur"
    />
  </form>

  <form>
    <QuestionRadio
      id="pattes"
      v-model="questionStates
    [1]"
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
      v-model="questionStates
    [2]"
      text="Quelle est la capitale de la Suisse ?"
      :options="[
        { value: 'zurich', text: 'Zurich' },
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'geneve', text: 'Geneve' },
      ]"
      answer="Berne"
    />

    <!-- <QuestionText
      id="capitale"
      v-model="questionStates
    []"
      text="Quelle est la capitale de la Suisse ?"
      placeholder="Veuillez saisir une ville"
    /> -->

    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
    <!-- pour mettre un bouton reset qui englobe tous le quiz je dois mettre en secondaire et utiliser la méthode resetForm elle remet à zéro le formulaire  -->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">Recommencer</button>-->
    <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">recommencer</button>-->
    <!--<button class="btn btn-secondary" type="button" @click="reset">Recommencer</button>-->

    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="reset">
      Réinitialiser
    </button>
    <div>Réponses correctes : {{ questionStates
   }}</div> <!--permet de voir mes réponses(true ou false) et de savoir si mon code marche bien, on voit bien que avec la conditon immédiate on voit tout de suite mes réponse et elles s'initialise pas au fur et à mesure que je répond au quiz-->
    <div>Debug états : {{ questionStates }}</div>
    <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div><!--affiche le score uniquement si toutes les questions ont été soumises et corrigées-->

  </form>
</template>
