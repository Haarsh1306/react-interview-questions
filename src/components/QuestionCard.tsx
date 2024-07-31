interface questions{
    question: string;
    options: {
        text: string;
        isCorrect: boolean;
    }[];
}
interface QuestionCardProps{
    question: questions;
    onAnswerClick: (isCorrect: boolean) => void;
}
export const QuestionCard = ({question, onAnswerClick} : QuestionCardProps) =>{
    return (
        <div className="flex flex-col justify-center items-center border p-10">
      <h2 className="text-3xl font-semibold text-white">Q. {question.question}</h2>
      <ul className="grid grid-cols-2 gap-6 mt-8 w-full">
        {question.options.map((option) => {
          return (
            <li key={option.text}>
              <button className="text-white text-xl bg-blue-500 p-2 w-full rounded-md hover:bg-blue-700" onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    )
}