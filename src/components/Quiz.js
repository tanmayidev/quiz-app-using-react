import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  // quiz context - allows you to access values in QuizContext
  const [quizState, dispatch] = useContext(QuizContext); // subscribing to context

  return (
    <div className="quiz">
      <div>
        <div className="score">
          Question {quizState.currentQuestionIndex + 1}/
          {quizState.questions.length}
        </div>
        <Question />
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
