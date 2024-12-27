<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import { QuestionState } from '@/utils/models'
import { computed, ref } from 'vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import QuestionTextlibre from './QuestionTextlibre.vue'
import QuestionSelect from './QuestionSelect.vue'

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

<div class="mb-4"></div>

<form>
  <QuestionTextlibre
    id="TADQ1"
    v-model="questionStates[0]"
    text="Quels sont les quatre stades du développement selon Piaget ?"$
    answer-detail="sensorimoteur, préopératoire, concret et formel."
    placeholder="Votre réponse"
    :siCorrectAnswer="false" 
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="TADQ2"
    v-model="questionStates[1]"
    text="Quel est le rôle principal de la Zone Proximale de Développement (ZPD) selon Vygotsky ?"
    :options="[
      { value: 'a', text: 'Favoriser l\'apprentissage autonome' },
      { value: 'b', text: 'Encourager l\'imitation' },
      { value: 'c', text: 'Permettre à un enfant d\'apprendre avec l\'aide d\'autrui' },
      { value: 'd', text: 'Augmenter la répétition des tâches' }
    ]"
    answer="c"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="TADQ3"
    v-model="questionStates[2]"
    text="Quels éléments font partie des stratégies d'apprentissage actif ? (Choisissez tout ce qui s'applique)"
    :options="[
      { value: 'a', text: 'Observation' },
      { value: 'b', text: 'Interaction sociale' },
      { value: 'c', text: 'Passivité' },
      { value: 'd', text: 'Jeux éducatifs' }
    ]"
    :answer="['Observation', 'Interaction sociale', 'Jeux éducatifs']"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionTextlibre
    id="TADQ4"
    v-model="questionStates[3]"
    text="Expliquez brièvement le concept de renforcement positif."
    answerDetail="Le renforcement positif consiste à ajouter un stimulus agréable après un comportement pour augmenter la probabilité qu’il se reproduise."
    placeholder="Votre réponse"
    :siCorrectAnswer="false"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="TADQ5"
    v-model="questionStates[4]"
    text="Quel est un exemple de conditionnement opérant ?"
    :options="[
      { value: 'a', text: 'Un chien salive en entendant une cloche.' },
      { value: 'b', text: 'Un enfant reçoit une étoile dorée après avoir fait ses devoirs.' },
      { value: 'c', text: 'Un étudiant mémorise une liste de vocabulaire.' },
      { value: 'd', text: 'Un bébé sourit en voyant sa mère.' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="TADQ6"
    v-model="questionStates[5]"
    text="Dans le conditionnement classique, quel type de stimulus provoque une réponse après conditionnement ?"
    :options="[
      { value: 'a', text: 'Stimulus neutre' },
      { value: 'b', text: 'Stimulus inconditionnel' },
      { value: 'c', text: 'Stimulus conditionné' },
      { value: 'd', text: 'Stimulus aversif' }
    ]"
    answer="c"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="TADQ7"
    v-model="questionStates[6]"
    text="Quelles sont les implications principales du modèle de Vygotsky pour l'éducation ?"
    :options="[
      { value: 'a', text: 'L\'importance de l\'enseignement direct' },
      { value: 'b', text: 'L\'utilisation d\'outils culturels' },
      { value: 'c', text: 'Le rôle des pairs dans l\'apprentissage' },
      { value: 'd', text: 'La mémorisation répétée' }
    ]"
    :answer="['L\'utilisation d\'outils culturels', 'Le rôle des pairs dans l\'apprentissage']"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="TADQ8"
    v-model="questionStates[7]"
    text="Qui a développé la théorie de l'apprentissage par observation ?"
    :options="[ 
      { value: 'a', text: 'Lev Vygotsky' },
      { value: 'b', text: 'Albert Bandura' },
      { value: 'c', text: 'Jean Piaget' },
      { value: 'd', text: 'B.F. Skinner' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="TADQ9"
    v-model="questionStates[8]"
    text="Quels sont des exemples de renforcements négatifs ? (Choisissez tout ce qui s'applique)"
    :options="[ 
      { value: 'a', text: 'Si tu finis tes devoirs tu n\'a pas besoin de ranger ta chambre.' },
      { value: 'b', text: 'Recevoir une récompense pour une bonne action.' },
      { value: 'c', text: 'Supprimer des devoirs si un élève travaille bien.' },
      { value: 'd', text: 'Recevoir une punition pour une mauvaise action.' }
    ]"
    :answer="['Si tu finis tes devoirs tu n\'a pas besoin de ranger ta chambre.', 'Supprimer des devoirs si un élève travaille bien.']"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionTextlibre
    id="TAD10"
    v-model="questionStates[9]"
    text="Expliquez les phases de l’encodage, de la consolidation et de la récupération."
    answer-detail="Encodage : Entrée des informations dans le cerveau.
Consolidation : Renforcement des souvenirs dans la mémoire.
Récupération : Accès et utilisation des informations stockées."
    placeholder="Votre réponse"
    :siCorrectAnswer="false"
  />
</form>

  <div class="mb-4"></div>

<form>
  <QuestionTextlibre
    id="TADQ11"
    v-model="questionStates[10]"
    text="Expliquez le rôle de l'accommodation dans le développement cognitif selon Piaget."
    answer-detail="L'accommodation est le processus par lequel une personne modifie ses schémas existants pour s'adapter à de nouvelles informations."
    placeholder="Votre réponse"
    :siCorrectAnswer="false"
  />
</form>
  
<div class="mb-4"></div>

<form>
  <QuestionText
    id="TADQ12"
    v-model="questionStates[11]"
    text="Comment appelle-t-on un stimulus qui déclenche une réponse sans apprentissage préalable ?"
    :answer="['stimulus inconditionnel', 'si']"
    placeholder="Veuillez saisir votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="TADQ13"
    v-model="questionStates[12]"
    text="À quel âge débute le stade des opérations formelles selon Piaget ?"
    answer="['11', 'onze']"
    placeholder="Veuillez saisir un âge"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="TADQ14"
    v-model="questionStates[13]"
    text="Quelles sont des stratégies d’apprentissage actif ? (Choisissez tout ce qui s’applique)"
    :options="[ 
      { value: 'a', text: 'Prise de notes' },
      { value: 'b', text: 'Observation' },
      { value: 'c', text: 'Passivité devant une vidéo éducative' },
      { value: 'd', text: 'Résolution de problèmes' }
    ]"
    :answer="['Prise de notes', 'Observation', 'Résolution de problèmes']"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionTextlibre
    id="TADQ15"
    v-model="questionStates[14]"
    text="Décrivez le concept d’échafaudage dans l’apprentissage selon Vygotsky."
    answer-detail="L’échafaudage est une assistance temporaire apportée à un apprenant pour l’aider à maîtriser une tâche, qui est ensuite retirée au fur et à mesure de son autonomie."
    placeholder="Votre réponse"
    :siCorrectAnswer="false"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="TADQ16"
    v-model="questionStates[15]"
    text="Dans quel type d’apprentissage un stimulus neutre devient associé à une réponse ?"
    :options="[ 
      { value: 'a', text: 'Conditionnement opérant' },
      { value: 'b', text: 'Conditionnement classique' },
      { value: 'c', text: 'Apprentissage social' },
      { value: 'd', text: 'Théorie cognitive' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="TADQ17"
    v-model="questionStates[16]"
    text="Quels sont des exemples de renforcements positifs ? (Choisissez tout ce qui s’applique)"
    :options="[ 
      { value: 'a', text: 'Donner un bonbon après une bonne action.' },
      { value: 'b', text: 'Supprimer une tâche désagréable après un bon comportement.' },
      { value: 'c', text: 'Féliciter un élève après une participation en classe.' },
      { value: 'd', text: 'Recevoir une punition pour une mauvaise action.' }
    ]"
    :answer="['a', 'c']"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="TADQ18"
    v-model="questionStates[17]"
    text="Quel concept Piaget utilise-t-il pour décrire l’incorporation de nouvelles informations dans un schéma existant ?"
    answer="['assimilation']"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="TADQ19"
    v-model="questionStates[18]"
    text="Qui est l’auteur principalement associé au conditionnement opérant ?"
    :options="[ 
      { value: 'a', text: 'Jean Piaget' },
      { value: 'b', text: 'Ivan Pavlov' },
      { value: 'c', text: 'B.F. Skinner' },
      { value: 'd', text: 'Albert Bandura' }
    ]"
    answer="c"
  />
</form>






  <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
  <!-- pour mettre un bouton reset qui englobe tous le quiz je dois mettre en secondaire et utiliser la méthode resetForm elle remet à zéro le formulaire  -->
  <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">Recommencer</button>-->
  <!--<button class="btn btn-primary" :class="{ disabled: !filled }" type="reset">recommencer</button>-->
  <!--<button class="btn btn-secondary" type="button" @click="reset">Recommencer</button>-->

  <button class="btn btn-primary" @click="reset">Réinitialiser</button>
  <!-- <div>Réponses correctes : {{ questionStates }}</div> -->
  <!--permet de voir mes réponses(true ou false) et de savoir si mon code marche bien, on voit bien que avec la conditon immédiate on voit tout de suite mes réponse et elles s'initialise pas au fur et à mesure que je répond au quiz-->
  <!-- <div>Debug états : {{ questionStates }}</div> -->
  <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
  <!--affiche le score uniquement si toutes les questions ont été soumises et corrigées-->
</template>
