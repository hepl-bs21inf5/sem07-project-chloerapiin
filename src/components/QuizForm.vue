<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import { QuestionState } from '@/utils/models'
import { computed, ref } from 'vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import QuestionTextlibre from './QuestionTextlibre.vue'

const questionStates = ref<QuestionState[]>([])
const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
) //computed score qui calcule le score en fonction des valeurs de questionStates

const totalScore = computed<number>(() => questionStates.value.length)
//calcule le score maximal possible, en prenant seulement les valeurs correctes
//la propriété length retourne retourne la longueur de la liste

//every retourne true si toutes les valeurs du tableau satisfont la condition
const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)
// submitted sera vrai seulement si l'utilisateur répond à toutes les questions
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

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
    <QuestionText
      id="cheval"
      v-model="questionStates[0]"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      answer="blanc"
      answer-detail="Relis la question"
      placeholder="Veuillez saisir une couleur"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="pattes"
      v-model="questionStates[1]"
      text="Combien de pattes a un chat ?"
      answer-detail="Le chat est un mammifère quadrupède."
      :options="[
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '8', text: '8' },
        { value: '4', text: '4' },
      ]"
      answer="4"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionTextlibre
      id="libre1"
      v-model="questionStates[2]"
      text="Expliquez l'effet d'espacement sur l'apprentissage."
      answer-detail="Un apprentissage est plus efficace si on oublie et qu'on réapprend. Des sujets apprennent une paire de mots on varie l'espacement entre les périodes d'études (Tous les 14 jours, 28 jours, 56 jours) en tout il y a 26 périodes.
Le temps baisse la force de récupération, c'est une difficulté désirable. Le fait de réapprendre favorise la rétention à long-terme.
"
      placeholder="Votre réponse..."
      siCorrectAnswer="false"

    />
  </form>

  <form>
    <QuestionRadio
      id="capitale"
      v-model="questionStates[3]"
      text="Quelle est la capitale de la Suisse ?"
      :options="[
        { value: 'Zurich', text: 'Zurich' },
        { value: 'Lausanne', text: 'Lausanne' },
        { value: 'Berne', text: 'Berne' },
        { value: 'Geneve', text: 'Geneve' },
      ]"
      answer="Berne"
    />
  </form>

  <div class="mb-4"></div> 

  <form>
    <QuestionCheckbox
      id="apple-colors"
      v-model="questionStates[4]"
      text="Quelles sont les couleurs des pommes ? (Plusieurs réponses possibles)"
      :options="[
        { value: 'rouge', text: 'Rouge' },
        { value: 'vert', text: 'Vert' },
        { value: 'jaune', text: 'Jaune' },
        { value: 'bleu', text: 'Bleu' }
      ]"
      :answer="['rouge', 'vert', 'jaune']"
    />
  </form>

  <div class="mb-4"></div>

  <!-- <form>
    <QuestionRadio
      id="TAD1"
      v-model="questionStates[3]"
      text="Quelle théorie de l'apprentissage se concentre sur l'observation et l'imitation du comportement des autres ?"
      :options="[
        { value: 'a', text: 'La théorie du conditionnement classique' },
        { value: 'b', text: 'La théorie de l\'apprentissage social' },
        { value: 'c', text: 'La théorie de l\'apprentissage cognitif' },
        { value: 'd', text: ' La théorie de l\'apprentissage par renforcement' },
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD2"
      v-model="questionStates[4]"
      text="Qui est le principal auteur associé à la théorie du conditionnement opérant ?"
      :options="[
        { value: 'a', text: 'Jean Piaget' },
        { value: 'b', text: 'B.F. Skinner' },
        { value: 'c', text: 'Lev Vygotsky' },
        { value: 'd', text: 'Albert Bandura' },
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD3"
      v-model="questionStates[5]"
      text="Quelle est la principale différence entre le conditionnement classique et le conditionnement opérant ?"
      :options="[
        {value: 'a', text: 'Le conditionnement classique implique des conséquences sur le comportement'},
        {value: 'b', text: 'Le conditionnement opérant n\'implique pas de conséquences sur le comportement'},
        {value: 'c', text: 'Le conditionnement classique n\'implique pas de conséquences sur le comportement'},
        { value: 'd', text: 'Les deux types de conditionnement sont identiques' },
      ]"
      answer="c"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD4"
      v-model="questionStates[6]"
      text="Dans le conditionnement classique, le Stimulus Conditionnel (SC) est :"
      :options="[
        { value: 'a', text: 'Un stimulus qui provoque une réponse inconditionnelle'},
        {value: 'b',text: 'Un stimulus qui provoque une réponse conditionnelle après conditionnement'},
        { value: 'c', text: 'Un stimulus qui n\'a aucun effet sur le comportement'},          
        { value: 'd', text: 'Un stimulus qui est toujours aversif'},
       ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD5"
      v-model="questionStates[7]"
      text="Qu'est-ce qui implique l'ajout d'un stimulus appétitif pour augmenter la probsbilité que le comportement se reproduise ?"
      :options="[
        { value: 'a', text: 'Renforcement négatif' },
        { value: 'b', text: 'Punition positive' },
        { value: 'c', text: 'Renforcement positif' },
        { value: 'd', text: 'Punition négative' },
      ]"
      answer="c"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD6"
      v-model="questionStates[8]"
      text="Quel est l'effet de l'effet d'espacement sur l'apprentissage ?"
      :options="[
        { value: 'a', text: 'Il diminue la rétention d\'information' },
        { value: 'b', text: 'Il augmente la rétention d\'information' },
        { value: 'c', text: 'Il n\'a aucun effet sur l\'apprentissage.' },
        { value: 'd', text: 'Il rend l\'apprentissage plus difficile.' },
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD7"
      v-model="questionStates[9]"
      text="Selon Jean Piaget, quel est un des critères qui définit l'intelligence ?"
      :options="[
        { value: 'a', text: 'La capacité à mémoriser des informations' },
        { value: 'b', text: 'La capacité à s\'adapter à de nouvelles situations' },
        { value: 'c', text: 'La capacité à résoudre des problèmes mathématiques' },
        { value: 'd', text: 'La capacité à communiquer efficacement.' },
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>
    
  <form>
    <QuestionRadio
      id="TAD9"
      v-model="questionStates[11]"
      text="Quelle est la différence majeure entre le conditionnement classique et le conditionnement opérant ?"
      :options="[
        { value: 'a', text: 'Le conditionnement classique implique des conséquences sur le comportement' },
        { value: 'b', text: 'Le conditionnement opérant modifie un comportement instinctif' },
        { value: 'c', text: 'Le conditionnement classique ne modifie pas les comportements instinctifs' },
        { value: 'd', text: 'Les deux utilisent uniquement des stimuli neutres' }
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD10"
      v-model="questionStates[12]"
      text="Dans le renforcement négatif, que se passe-t-il ?"
      :options="[
        { value: 'a', text: 'Un stimulus appétitif est ajouté' },
        { value: 'b', text: 'Un stimulus aversif est retiré' },
        { value: 'c', text: 'Un comportement est puni' },
        { value: 'd', text: 'Un comportement est ignoré' }
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="TAD11"
      v-model="questionStates[13]"
      text="Selon Piaget, quelle est une des caractéristiques de l’intelligence humaine ?"
      :options="[
        { value: 'a', text: 'La capacité à mémoriser' },
        { value: 'b', text: 'L’introduction de continuité dans l’activité mentale' },
        { value: 'c', text: 'La capacité à analyser des objets concrets uniquement' },
        { value: 'd', text: 'L’acquisition automatique des langages' }
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionTextlibre
      id="TAD4"
      v-model="questionStates[14]"
      text="Expliquez les phases de l’encodage, de la consolidation et de la récupération."
      answer-detail="Encodage : Entrée des informations dans le cerveau.
Consolidation : Renforcement des souvenirs dans la mémoire.
Récupération : Accès et utilisation des informations stockées."
      placeholder="Votre réponse"
      siCorrectAnswer="false"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionTextlibre
      id="TAD5"
      v-model="questionStates[15]"
      text="Donnez un exemple pratique illustrant le renforcement positif et son effet sur le comportement."
      answer-detail="Le renforcement positif est lorsqu'un comportement est suivi d'une récompense pour encourager sa répétition. Exemple : un professeur félicite un élève (Bravo !) lorsqu'il participe en classe, ce qui motive l'élève à participer davantage."
      placeholder="Votre réponse"
      siCorrectAnswer="false"
    />
  </form>

  <div class="mb-4"></div> -->

  <!-- <div class="form-check">
    <input
      id="checkboxTAD1"
      v-model="questionStates[16]"
      class="form-check-input"
      type="checkbox"
      value="Piaget"
    />
    <label class="form-check-label" for="checkboxPiaget">Piaget</label>
  </div>
  
  <div class="mb-4"></div> -->



  <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
  <!-- pour mettre un bouton reset qui englobe tous le quiz je dois mettre en secondaire et utiliser la méthode resetForm elle remet à zéro le formulaire  -->
  <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">Recommencer</button>-->
  <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">recommencer</button>-->
  <!--<button class="btn btn-secondary" type="button" @click="reset">Recommencer</button>-->

  <button class="btn btn-primary" @click="reset">
    Réinitialiser
  </button>
  <div>Réponses correctes : {{ questionStates }}</div>
  <!--permet de voir mes réponses(true ou false) et de savoir si mon code marche bien, on voit bien que avec la conditon immédiate on voit tout de suite mes réponse et elles s'initialise pas au fur et à mesure que je répond au quiz-->
  <div>Debug états : {{ questionStates }}</div>
  <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
  <!--affiche le score uniquement si toutes les questions ont été soumises et corrigées-->
</template>
