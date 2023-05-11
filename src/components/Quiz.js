import { useReducer } from "react";
import Question from "./Question";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

const Quiz = () => {
  // not using useState to maintain business logic outside the component and to reduce the number of useStates used
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question questions={state.questions} />
        <div
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next Question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
