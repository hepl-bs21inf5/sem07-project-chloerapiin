<script setup lang="ts">
import { ref, computed } from 'vue';
import { QuestionState } from '@/utils/models';

//comme pour quizform.vue on gère les états des questions
const questionStates = ref<QuestionState[]>([]);

//on stock les réponse récuperer depuis trivia  
const questions = ref<
  {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    options: { value: string; text: string }[];
    selectedAnswer: string | null; // Réponse que l'utilisateur a choisie
  }[]
>([]);

//calcule le score comme dans quizform.vue
const score = computed(() =>
  questionStates.value.filter((state) => state === QuestionState.Correct).length
);

//même chose que quizform.vue on a le nd total de questions
const totalScore = computed(() => questionStates.value.length);

//every retourne true si toutes les valeurs du tableau satisfont la condition
const filled = computed(() =>
  questionStates.value.every((state) => state === QuestionState.Fill)
);

//submitted sera vrai seulement si l'utilisateur répond à toutes les questions
const submitted = computed(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong
  )
);

//fonction pour mélangerles élements d'un tableau dans ce cas il s'agit des différentes options pour la question
function shuffle(array: any[]) {
  return array
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value, text }) => ({ value, text }));
}

interface TriviaQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

//charger les questions depuis l'API
fetch('https://opentdb.com/api.php?amount=10&type=multiple')        //le site nous donne 10 questions à plusieurs choix pour notre quiz
  .then((response) => response.json())                              //le site envoie les données et on les transformeen code lisible grâce à json()
  .then((data) => {
    questions.value = data.results.map((q: TriviaQuestion) => ({    //on parcourt chaque question pour les transformer et l'afficher dans notre quiz 
      question: q.question,                                         //le texte de la question
      correct_answer: q.correct_answer,                             //la bonne réponse 
      incorrect_answers: q.incorrect_answers,                       //les mauvaises réponses
      options: shuffle([                                            // on mélange les réponses comme pour les questions radio
        { value: q.correct_answer, text: q.correct_answer },
        ...q.incorrect_answers.map((answer) => ({
          value: answer,
          text: answer,
        })),
      ]),
      selectedAnswer: null, // ça permet de garder de toutes les réponses que l'utilisateur choisit on l'initialise à vide
    }));

    // Initialise les états des questions comme "Empty"
    questionStates.value = new Array(data.results.length).fill(QuestionState.Empty); //on crée une liste vide avec toutes les questions au début elle sont empty (vide)
  });

// Vérifie si la réponse est correcte
const isCorrectAnswer = (userAnswer: string | null, correctAnswer: string): boolean => {
  return userAnswer?.trim()?.toLowerCase() === correctAnswer.trim().toLowerCase();
};

//on soumet les questions et on vérifie si c'est juste ou faux 
function submit(event: Event): void {
  event.preventDefault();
  questionStates.value = questionStates.value.map((_, index) => //on parcourt chaque question pour mettre à jour son état
    isCorrectAnswer(                                            //fonction qui compare la réponse de l'utilisateur avec la bonne réponse
      questions.value[index]?.selectedAnswer ?? null,           //la réponse choisie par l'utilisateur
      questions.value[index]?.correct_answer ?? ''              //la bonne réponse 
    )
      ? QuestionState.Correct
      : QuestionState.Wrong
  );//si la réponse est juste alors iscorrectanswer retourne true et devient questionstate.Correct et sinon QuestionState.Wrong
}

// Réinitialiser le quiz
function reset(event: Event): void {
  event.preventDefault();
  questionStates.value = new Array(questions.value.length).fill(QuestionState.Empty); //on crée une liste vide avec toutes les élèments du quiz et on les mets é l'état empty (vide)
  questions.value.forEach((q) => {                                                    //on parcourt chaque question pour la remettre à zéro
    q.options = shuffle(q.options);                                                   // Mélange à nouveau les options
    q.selectedAnswer = null;                                                          // Réinitialise la réponse sélectionnée
  });
}
</script>

<template>
<div class="quiz-container">
  <div class="container trivia-container">
    <h1 class="text-center mb-4">Trivia</h1>
    <form @submit.prevent="submit">
      <div v-for="(question, index) in questions" :key="index" class="mb-4">
        <p v-html="question.question"></p>
        <div
          v-for="option in question.options"
          :key="option.value"
          class="form-check"
        >
          <input
            type="radio"
            :id="`trivia-${index}-${option.value}`"
            v-model="question.selectedAnswer"
            :value="option.value"
            :disabled="submitted"
            class="form-check-input"
          />
          <label :for="`trivia-${index}-${option.value}`" class="form-check-label">
            {{ option.text }}
          </label>
        </div>
        <!-- Afficher les messages "Juste" ou "Faux" -->
        <div v-if="submitted" class="mt-2">
          <p v-if="questionStates[index] === QuestionState.Correct" class="text-success">
            Juste ! 🎉
          </p>
          <p v-else class="text-danger">
            Faux ! La bonne réponse était : <strong>{{ question.correct_answer }}</strong>
          </p>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary" :disabled="submitted">Soumettre</button>
        <button type="button" class="btn btn-reset" @click="reset">Réinitialiser</button>
      </div>
    </form>
    <div v-if="submitted" class="text-center mt-4">
      <h3 class="score-display">Score : {{ score }} / {{ totalScore }}</h3>
    </div>
  </div>
</div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.text-center {
  text-align: center;
}
.text-success {
  color: greenyellow !important;
}
.text-danger {
  color: red !important;
}
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: deeppink;
  --bs-btn-border-color: pink;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: pink;
  --bs-btn-hover-border-color: pink;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: deeppink;
  --bs-btn-active-border-color: pink;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: pink;
  --bs-btn-disabled-border-color: pink;
  margin-right: 10px; /* Ajoute un espace entre les boutons */
}
.btn-reset {
  --bs-btn-color: #fff; /* Couleur du texte */
  --bs-btn-bg: deepskyblue; /* Couleur de fond */
  --bs-btn-border-color: lightblue; /* Couleur de la bordure */
  --bs-btn-hover-color: #fff; /* Couleur du texte au survol */
  --bs-btn-hover-bg: lightblue; /* Couleur de fond au survol */
  --bs-btn-hover-border-color: lightblue; /* Bordure au survol */
  --bs-btn-focus-shadow-rgb: 30, 144, 255; /* Ombre de focus */
  --bs-btn-active-color: #fff; /* Couleur du texte en état actif */
  --bs-btn-active-bg: dodgerblue; /* Couleur de fond en état actif */
  --bs-btn-active-border-color: dodgerblue; /* Bordure en état actif */
  --bs-btn-disabled-color: #ddd; /* Couleur du texte désactivé */
  --bs-btn-disabled-bg: lightblue; /* Couleur de fond désactivé */
  --bs-btn-disabled-border-color: lightblue; /* Bordure désactivée */
  margin-right: 0; /* Facultatif : évite un espace supplémentaire pour le dernier bouton */
}
/*la mise en page pour le fond du quiz, mais pas pour toute la page*/
.quiz-container {
  background-color: #F8E1DA; /* Un rose pâle */
  padding: 20px; /* Pour un espacement interne */
  border-radius: 8px; /* Coins arrondis pour un effet esthétique */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optionnel : légère ombre */
  
}
/*Le style de mon titre de mon quiz*/
.quiz-title {
  font-size: 2rem; /* Taille du texte plus grande */
  font-weight: bold; /* Texte en gras */
  color: #000000; /* Une teinte rose framboise élégante */
  text-align: center; /* Centrer le titre */
  margin-bottom: 20px; /* Espacement sous le titre */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Ombre légère pour un effet esthétique */
}
.title-bold {
  font-weight: bold; /* Met le texte en gras */
  font-size: 1.5rem; /* Taille du texte (ajustable selon vos besoins) */
  color: #000; /* Couleur du texte, noir par défaut */
}
.score-display {
  font-weight: bold; /* Met le texte en gras */
  font-size: 1.25rem; /* Augmente légèrement la taille */
  color: #ffffff; /* Texte noir */
  border: 2px solid #000; /* Bordure noire autour */
  padding: 10px; /* Espacement interne */
  border-radius: 8px; /* Coins arrondis pour une apparence plus douce */
  text-align: center; /* Centre le texte */
  margin-top: 20px; /* Ajoute un espacement au-dessus */
  display: inline-block; /* Ajuste la largeur autour du contenu */
  background-color: #000000; /* Fond blanc pour contraste */
}
</style>

