import { AppBar } from "../components/AppBar";
import { CodingQuestionCard } from "../components/CodingQuestionCard";
import MachineCodingQuestions from "../utils/machineCodingQuestions";
export const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Home
      </h1>
      <div className="flex justify-center items-center flex-col bg-gray-900  mt-10">
        {MachineCodingQuestions.map((item,index) => {
          return (
            <div className="w-80 md:w-1/2 my-3 hover:scale-105">
              <CodingQuestionCard key={index} question={item.question} path={item.path}/>
            </div>

          )
           
        })}
      </div>
    </div>
  );
};
