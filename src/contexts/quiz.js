/** APP BUSINESS LOGIC */

import { createContext, useReducer } from "react";
import { normalizeQuestions, shuffleAnswers } from "../helper";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  answers: [],
  currentAnswer: "",
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }

    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }

    case "LOADED_QUESTIONS": {
      const normalizedQuestions = normalizeQuestions(action.payload);
      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };
    }

    default: {
      return state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // not using useState to maintain business logic outside the component and to reduce the number of useStates used
  const value = useReducer(reducer, initialState);

  // value attribute takes in value that will become accessible to all children of QuizContext.Provider
  // children all the components which are wrapped with QuizProvider Component
  // in our case the QuizProvider has Quiz component as child - see in index.js file
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
