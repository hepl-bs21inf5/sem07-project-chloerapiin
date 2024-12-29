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
//fonction pour mélangerles élements d'un tableau dans ce cas il s'agit des différentes options pour la question
function shuffle(array: any[]) {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))    //--> chaque objet du tableau recoit une nouvelle propriété sort, qui contient un numéro chosi au hasard grâce à Math.random()
    .sort((a, b) => a.sort - b.sort)                      //--> les objet sont trié selon leur valeur dans sort (nb aléatoire)     
    .map(({ value, text }) => ({ value, text }));         //-->enfin on garde plus que les valeurs a, b, c, etc. Et les valeurs text des options
}

const shuffledOptions = ref<any[]>([]);


</script>

<template>
<div class="quiz-container">

  <p class="text-4xl font-bold"></p>
  <h2 class="explication">Quiz varié comprenant des questions à choix multiples, des réponses à saisir en texte et des questions avec des cases à cocher.
    Bonne chance!!!🌞</h2>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="Q1"
      v-model="questionStates[0]"
      text="1. Qu’est-ce que la force de récupération dans la mémoire ?"
      answerDetail="La force de récupération fait référence à la capacité d'une personne à accéder et à récupérer une information stockée dans la mémoire à un moment donné. Elle est distincte de la capacité à stocker ou à encoder des informations."
      :options="[ 
        { value: 'a', text: 'La capacité de stocker des informations à long terme' },
        { value: 'b', text: 'La capacité d’accéder à une information à un moment donné' },
        { value: 'c', text: 'La capacité de créer de nouveaux souvenirs' },
        { value: 'd', text: 'La capacité d’oublier des informations inutiles' },
        { value: 'e', text: 'Aucune des réponses' }
      ]"
      answer="b"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionCheckbox
      id="Q2"
      v-model="questionStates[1]"
      text="2. Quels concepts décrivent les deux forces principales dans la mémoire ?"
      answerDetail="Les deux forces principales dans la mémoire sont la force de récupération, qui permet d'accéder à l'information stockée, et la force de stockage, qui détermine la capacité à conserver cette information à long terme."
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
      text="3. Quelle région du cerveau est associée à la mémoire épisodique ?"
      answerDetail="La région clé associée à la mémoire épisodique est l'hippocampe. Cette structure joue un rôle crucial dans l'encodage et le rappel des souvenirs personnels et d'événements."
      answer="hippocampe"
      placeholder="Votre réponse"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionSelect
      id="Q4"
      v-model="questionStates[3]"
      text="4. Quelle est la différence principale entre la mémoire épisodique et la mémoire procédurale ?"
      answerDetail="La mémoire épisodique est consciente et concerne les événements spécifiques de la vie d'une personne. La mémoire procédurale, en revanche, est implicite et liée aux compétences et savoir-faire."
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
      text="5. Quelles stratégies sont efficaces pour résister aux distracteurs dans une tâche ?"
      answerDetail="Les stratégies efficaces incluent : refuser poliment les distractions, visualiser une barrière mentale pour se concentrer, et se motiver en se fixant des objectifs clairs avant de se distraire."
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
      text="6. Quelle mémoire est préservée chez les patients atteints de Parkinson ?"
      answerDetail="La mémoire procédurale, qui est impliquée dans l'apprentissage des compétences et des habitudes, reste généralement intacte chez les patients atteints de Parkinson."
      answer="mémoire procédurale"
      placeholder="Votre réponse"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionSelect
      id="Q7"
      v-model="questionStates[6]"
      text="7. Quelles régions sont altérées dans le cerveau des patients atteints de Parkinson ?"
      answerDetail="Chez les patients atteints de Parkinson, le striatum et la substance noire sont les régions cérébrales les plus touchées, affectant la production de dopamine."
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
      text="8. Quel type de mémoire est affecté dans le cas d’une amnésie antérograde ?"
      answerDetail="Dans l’amnésie antérograde, la mémoire épisodique est principalement affectée, rendant difficile l’encodage de nouveaux souvenirs d’événements."
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
      text="9. Quel terme désigne l’apprentissage par la répétition espacée ?"
      answer="effet d’espacement"
      placeholder="Votre réponse"
      answerDetail="L’effet d’espacement désigne la méthode selon laquelle les informations sont mieux retenues lorsque les révisions sont distribuées sur une période, plutôt que regroupées en une seule session."
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionRadio
      id="Q10"
      v-model="questionStates[9]"
      text="10. Quelles sont les conséquences de l’extinction dans le conditionnement classique ?"
      answerDetail="L'extinction dans le conditionnement classique désigne le processus par lequel la réponse conditionnée disparaît progressivement lorsqu'un stimulus conditionné est présenté à plusieurs reprises sans être suivi du stimulus inconditionné."    :options="[ 
        { value: 'a', text: 'La réponse conditionnée disparaît progressivement' },
        { value: 'b', text: 'Le stimulus inconditionnel perd son effet' },
        { value: 'c', text: 'Le stimulus neutre devient conditionné' },
        { value: 'd', text: 'La réponse conditionnée devient plus forte' },
        { value: 'e', text: 'Aucune des réponses' }
      ]"
      answer="a"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionText
      id="Q11"
      v-model="questionStates[10]"
      text="11. Quelle région du cerveau est impliquée dans la mémoire de travail ?"
      answer="cortex préfrontal"
      placeholder="Votre réponse"
      answerDetail="Le cortex préfrontal est une région clé impliquée dans la mémoire de travail. Il permet de stocker temporairement et de manipuler des informations pour accomplir des tâches cognitives complexes."
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionSelect
      id="Q12"
      v-model="questionStates[11]"
      text="12. Quel groupe a obtenu de meilleures performances dans l’étude mind map vs récupération ?"
      answerDetail="L’étude a montré que le groupe récupération avait de meilleures performances. Le rappel actif renforce la consolidation des souvenirs par rapport à des techniques passives comme les cartes mentales."
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
      text="13. Quels éléments sont associés au conditionnement opérant ?"
      answerDetail="Le conditionnement opérant repose sur le renforcement positif ou négatif, et la punition positive ou négative, pour modifier les comportements."
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
      text="14. Quelles sont les deux forces principales dans la mémoire ?"
      answerDetail="Les deux forces principales sont la force de récupération, qui permet d’accéder à l’information, et la force de stockage, qui détermine la capacité à conserver cette information."
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
      text="15. Les régions altérées chez les patients atteints de Parkinson incluent le striatum, le tegmentum et la substance noire. Est-ce correct ?"
      answerDetail="C’est correct. Ces régions sont affectées chez les patients atteints de Parkinson, en raison de la dégénérescence des neurones dopaminergiques dans la substance noire."
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
      text="16. Quel effet en mémoire désigne une meilleure rétention pour les éléments inattendus ?"
      answer="effet d’incongruence"
      placeholder="Votre réponse"
      answerDetail="L’effet d’incongruence explique que les informations inattendues ou non appariées attirent davantage l’attention, ce qui améliore leur rétention en mémoire."
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionCheckbox
      id="Q17"
      v-model="questionStates[16]"
      text="17. Quels éléments décrivent l’effet de génération ?"
      answerDetail="L’effet de génération renforce la mémoire en obligeant à créer une information, ce qui améliore les connexions mnésiques par rapport à la simple lecture."
      :options="[ 
        { value: 'a', text: 'Améliore la mémoire en créant une information.' },
        { value: 'b', text: 'Affaiblit les connexions mnésiques.' },
        { value: 'c', text: 'Renforce les connexions mnésiques.' },
        { value: 'd', text: 'Permet de mieux lire l’information.' }
      ]"
      :answer="[ 'Améliore la mémoire en créant une information', 'Renforce les connexions mnésiques' ]"
    />
  </form>

  <div class="mb-4"></div>

  <form>
    <QuestionSelect
      id="Q18"
      v-model="questionStates[17]"
      text="18. Le principe de Premack consiste à :"
      answerDetail="Le principe de Premack consiste à utiliser des comportements à haute probabilité d’occurrence comme renforçateurs pour des comportements à faible probabilité d’occurrence."
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
      text="19. L’effet d’entrelacement en apprentissage consiste à :"
      answerDetail="L’effet d’entrelacement consiste à mélanger les éléments à apprendre au lieu de les organiser en blocs. Cela ralentit l’apprentissage initial mais améliore la rétention à long terme."
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
      text="20. En deux mots qu’est ce que l’égalisation dans le conditionnement."
      answer="adaptation comportementale"
      placeholder="Votre réponse"
      answerDetail="L’égalisation dans le conditionnement fait référence à l’adaptation d’un comportement à des conditions répétées ou variables."
    />
  </form>

  <div class="mb-4"></div>

  <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
  
  <button class="btn btn-reset" @click="reset">Réinitialiser</button>
  <!-- <div>Réponses correctes : {{ questionStates }}</div> -->
  <!-- <div>Debug états : {{ questionStates }}</div> -->

  <div class="mb-4"></div>
  <div v-if="submitted" class="score-display">
  Score : {{ score }} / {{ totalScore }}
  </div>

  <!--affiche le score uniquement si toutes les questions ont été soumises et corrigées-->
</div>
</template>
