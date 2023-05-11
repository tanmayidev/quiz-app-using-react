import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    const showResults =
      state.currentQuestionIndex === state.questions.length - 1;

    const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    return {
      ...state,
      currentQuestionIndex,
      showResults,
    };
  }

  if (action.type === "RESTART") {
    return initialState;
  }

  return state;
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
