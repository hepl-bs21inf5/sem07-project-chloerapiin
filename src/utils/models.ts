//type énuméré qui peut prendre une valeur parmi un ensemble de valeurs pré-définies
//on crée un questionstate qui contient les états possibles pour une question
//export permet d'importer cet enum dans un autre fichier

export enum QuestionState {
  Empty = 'Empty',/*la qeustion n'a pas été répondue */
  Fill = 'Fill',/*la question a été répondue */
  Submit = 'Submit',/*la qestion a été soumise pour correction */
  Correct = 'Correct',/*la réponse est juste */
  Wrong = 'Wrong',/*la réponse est fausse */
}
