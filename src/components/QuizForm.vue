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
  () =>
    questionStates.value.filter(state => state === QuestionState.Correct)
      .length,
)

const totalScore = computed<number>(() => questionStates.value.length)


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
<p class="text-4xl font-bold"></p>
<h2 class="font-bold text-lg">1. Quiz avec des questions à choix multiples, des questions avec de la réponse texte et des questions avec des cases à cocher</h2>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="Q1"
    v-model="questionStates[0]"
    text="Qu’est-ce que la force de récupération dans la mémoire ?"
    :options="[ 
      { value: 'a', text: 'La capacité de stocker des informations à long terme' },
      { value: 'b', text: 'La capacité d’accéder à une information à un moment donné' },
      { value: 'c', text: 'La capacité de créer de nouveaux souvenirs' },
      { value: 'd', text: 'La capacité d’oublier des informations inutiles' },
      { value: 'e', text: 'Aucune des réponses ci-dessus' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="Q2"
    v-model="questionStates[1]"
    text="Quels concepts décrivent les deux forces principales dans la mémoire ?"
    :options="[ 
      { value: 'Force de récupération', text: 'Force de récupération' },
      { value: 'Force de stockage', text: 'Force de stockage' },
      { value: 'Force d’encodage', text: 'Force d’encodage' },
      { value: 'Force de suppression', text: 'Force de suppression' },
      { value: 'Force de consolidation', text: 'Force de consolidation' }
    ]"
    :answer="[ 'Force de récupération', 'Force de stockage' ]"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q3"
    v-model="questionStates[2]"
    text="Quelle région du cerveau est associée à la mémoire épisodique ?"
    answer="hippocampe"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q4"
    v-model="questionStates[3]"
    text="Quelle est la différence principale entre la mémoire épisodique et la mémoire procédurale ?"
    :options="[ 
      { value: 'a', text: 'La mémoire épisodique est consciente, la mémoire procédurale ne l’est pas.' },
      { value: 'b', text: 'La mémoire épisodique concerne le savoir-faire, la mémoire procédurale les souvenirs d’événements.' },
      { value: 'c', text: 'La mémoire procédurale est rapide, la mémoire épisodique est lente.' },
      { value: 'd', text: 'La mémoire procédurale dépend de l’hippocampe, la mémoire épisodique non.' },
      { value: 'e', text: 'Aucune des réponses ci-dessus' }
    ]"
    answer="a"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="Q5"
    v-model="questionStates[4]"
    text="Quelles stratégies sont efficaces pour résister aux distracteurs dans une tâche ?"
    :options="[ 
      { value: 'Répondre non je travaille', text: 'Répondre non je travaille' },
      { value: 'Imaginer un mur entre soi et le distracteur', text: 'Imaginer un mur entre soi et le distracteur' },
      { value: 'Éviter de planifier sa réponse', text: 'Éviter de planifier sa réponse' },
      { value: 'Se dire qu’il vaut mieux finir avant de se distraire', text: 'Se dire qu’il vaut mieux finir avant de se distraire' },
      { value: 'Prendre une pause dès qu’on se sent distrait', text: 'Prendre une pause dès qu’on se sent distrait' }
    ]"
    :answer="[ 
      'Répondre non je travaille', 
      'Imaginer un mur entre soi et le distracteur', 
      'Se dire qu’il vaut mieux finir avant de se distraire' 
    ]"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q6"
    v-model="questionStates[5]"
    text="Quelle mémoire est préservée chez les patients atteints de Parkinson ?"
    answer="mémoire procédurale"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q7"
    v-model="questionStates[6]"
    text="Quelles régions sont altérées dans le cerveau des patients atteints de Parkinson ?"
    :options="[ 
      { value: 'a', text: 'Striatum et substance noire' },
      { value: 'b', text: 'Hippocampe et amygdales' },
      { value: 'c', text: 'Cortex frontal et striatum' },
      { value: 'd', text: 'Lobe pariétal et cortex moteur' },
      { value: 'e', text: 'Cervelet et cortex occipital' }
    ]"
    answer="a"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q8"
    v-model="questionStates[7]"
    text="Quel type de mémoire est affecté dans le cas d’une amnésie antérograde ?"
    :options="[ 
      { value: 'a', text: 'Mémoire épisodique' },
      { value: 'b', text: 'Mémoire procédurale' },
      { value: 'c', text: 'Mémoire à court terme' },
      { value: 'd', text: 'Mémoire sensorielle' },
      { value: 'e', text: 'Mémoire sémantique' }
    ]"
    answer="a"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q9"
    v-model="questionStates[8]"
    text="Quel terme désigne l’apprentissage par la répétition espacée ?"
    answer="effet d’espacement"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionRadio
    id="Q10"
    v-model="questionStates[9]"
    text="Quelles sont les conséquences de l’extinction dans le conditionnement classique ?"
    :options="[ 
      { value: 'a', text: 'La réponse conditionnée disparaît progressivement' },
      { value: 'b', text: 'Le stimulus inconditionnel perd son effet' },
      { value: 'c', text: 'Le stimulus neutre devient conditionné' },
      { value: 'd', text: 'La réponse conditionnée devient plus forte' },
      { value: 'e', text: 'Aucune des réponses ci-dessus' }
    ]"
    answer="a"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q11"
    v-model="questionStates[10]"
    text="Quelle région du cerveau est impliquée dans la mémoire de travail ?"
    answer="cortex préfrontal"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q12"
    v-model="questionStates[11]"
    text="Quel groupe a obtenu de meilleures performances dans l’étude mind map vs récupération ?"
    :options="[ 
      { value: 'a', text: 'Le groupe mind map' },
      { value: 'b', text: 'Le groupe récupération' },
      { value: 'c', text: 'Les deux groupes ont obtenu des performances similaires' },
      { value: 'd', text: 'Aucun des deux groupes n’a réussi' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="Q13"
    v-model="questionStates[12]"
    text="Quels éléments sont associés au conditionnement opérant ?"
    :options="[ 
      { value: 'Renforcement positif', text: 'Renforcement positif' },
      { value: 'Renforcement négatif', text: 'Renforcement négatif' },
      { value: 'Punition positive', text: 'Punition positive' },
      { value: 'Punition négative', text: 'Punition négative' },
      { value: 'Effet d’extinction', text: 'Effet d’extinction' }
    ]"
    :answer="[ 
      'Renforcement positif', 
      'Renforcement négatif', 
      'Punition positive', 
      'Punition négative' 
    ]"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q14"
    v-model="questionStates[13]"
    text="Quelles sont les deux forces principales dans la mémoire ?"
    :options="[ 
      { value: 'a', text: 'Force de récupération et force de stockage' },
      { value: 'b', text: 'Force d’encodage et force de suppression' },
      { value: 'c', text: 'Force de consolidation et force de stockage' },
      { value: 'd', text: 'Force d’inhibition et force de récupération' }
    ]"
    answer="a"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q15"
    v-model="questionStates[14]"
    text="Les régions altérées chez les patients atteints de Parkinson incluent le striatum, le tegmentum et la substance noire. Est-ce correct ?"
    :options="[ 
      { value: 'true', text: 'Vrai' },
      { value: 'false', text: 'Faux' }
    ]"
    answer="true"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q16"
    v-model="questionStates[15]"
    text="Quel effet en mémoire désigne une meilleure rétention pour les éléments inattendus ?"
    answer="effet d’incongruence"
    placeholder="Votre réponse"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionCheckbox
    id="Q17"
    v-model="questionStates[16]"
    text="Quels éléments décrivent l’effet de génération ?"
    :options="[ 
      { value: 'a', text: 'Améliore la mémoire en créant une information.' },
      { value: 'b', text: 'Affaiblit les connexions mnésiques.' },
      { value: 'c', text: 'Renforce les connexions mnésiques.' },
      { value: 'd', text: 'Permet de mieux lire l’information.' }
    ]"
    :answer="[ 'a', 'c' ]"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q18"
    v-model="questionStates[17]"
    text="Le principe de Premack consiste à :"
    :options="[ 
      { value: 'a', text: 'Utiliser des comportements à faible probabilité comme renforçateurs.' },
      { value: 'b', text: 'Utiliser des comportements à haute probabilité comme renforçateurs pour ceux à faible probabilité.' },
      { value: 'c', text: 'Renforcer tous les comportements de manière équivalente.' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionSelect
    id="Q19"
    v-model="questionStates[18]"
    text="L’effet d’entrelacement en apprentissage consiste à :"
    :options="[ 
      { value: 'a', text: 'Organiser les éléments en blocs pour un apprentissage rapide.' },
      { value: 'b', text: 'Mélanger les éléments à apprendre pour une meilleure rétention à long terme.' },
      { value: 'c', text: 'Isoler les éléments pour une mémorisation rapide.' }
    ]"
    answer="b"
  />
</form>

<div class="mb-4"></div>

<form>
  <QuestionText
    id="Q20"
    v-model="questionStates[19]"
    text="En deux mots qu’est ce que l’égalisation dans le conditionnement."
    answer="adaptation comportementale"
    placeholder="Votre réponse"
  />
</form>





  <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
  
  <button class="btn btn-primary" @click="reset">Réinitialiser</button>
  <!-- <div>Réponses correctes : {{ questionStates }}</div> -->
  <div>Debug états : {{ questionStates }}</div>
  <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
  <!--affiche le score uniquement si toutes les questions ont été soumises et corrigées-->
</template>
