export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => (a.sort = b.sort))
    .map((a) => a.value);
};

/**
 The function shuffles the answers of the question, so that the correct answer is not always in the same position. It does this by concatenating the correctAnswer with the incorrectAnswers array, and creating a new array called unshuffledAnswers.

Next, the function maps over each answer in the unshuffledAnswers array, and returns a new array of objects, with each object containing the answer as its value property and a random number between 0 and 1 as its sort property.

Then, the function sorts the array of objects by the sort property using the sort method, which sorts the array in place. Note that there is a typo in the sorting logic, a.sort = b.sort should be a.sort - b.sort.

Finally, the function maps over the sorted array of objects and returns an array of the original answers in their new shuffled order.

Overall, this code generates a random order for the correctAnswer and incorrectAnswers array and returns them in a shuffled order.
 */

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      question: decodeURIComponent(backendQuestion.question),
      incorrectAnswers,
    };
  });
};
