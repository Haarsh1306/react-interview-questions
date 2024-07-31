interface resultProps {
  userAnswers: boolean[];
  questions: {
    question: string;
    options: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
  resetQuiz: () => void;
}

export const Result = ({ userAnswers, questions, resetQuiz }: resultProps) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;
  
    return (
      <div className="flex flex-col justify-center items-center border p-10">
        <h2 className="text-3xl font-semibold text-white">Results</h2>
        <p className="text-white text-2xl flex justify-center items-center gap-2">
          <span>
            You answered {correctAnswers} out of {questions.length} questions
          </span>
          <button
            className="text-white text-xl inline bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-700"
            onClick={resetQuiz}
          >
            Retry
          </button>
        </p>
        <ul>
          {questions.map((question, index) => {
            const correctOption = question.options.find((ans) => ans.isCorrect);
            return (
              <li
                className={`text-lg mt-2 ${
                  userAnswers[index] ? "text-green-500" : "text-red-500"
                }`}
                key={index}
              >
                Q{index + 1}. {question.question}
                <b>
                  {userAnswers[index]
                    ? ""
                    : correctOption
                    ? `- ${correctOption.text}`
                    : ""}
                </b>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
