import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // value attribute takes in value that will become accessible to all children of QuizContext.Provider
  // children all the components which are wrapped with QuizProvider Component
  // in our case the QuizProvider has Quiz component as child - see in index.js file
  return <QuizContext.Provider value="fooooo">{children}</QuizContext.Provider>;
};
