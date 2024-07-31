import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { Questions } from "../Constants/Constant";
import { QuestionCard } from "../components/QuestionCard";
import { Result } from "../components/Result";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);

  const handleAnswerClick = (isCorrect: boolean) => {
    setCurrentQuestion((prev) => prev + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Quiz App
      </h1>
      <div className="flex justify-center items-center flex-col bg-gray-900  mt-10">    
        {currentQuestion < Questions.length ? (
          <QuestionCard
            question={Questions[currentQuestion]}
            onAnswerClick={handleAnswerClick}
          />
        ) : (
          <Result
            userAnswers={userAnswers}
            questions={Questions}
            resetQuiz={handleResetQuiz}
          />
        )}
      </div>
    </div>
  );
};
