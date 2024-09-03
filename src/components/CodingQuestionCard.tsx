import { Link } from "react-router-dom";

interface Prop{
    question: string;
    path: string;
    description?: string;
}
export const CodingQuestionCard = ({question, path}: Prop) =>{
    return <>
        <div className="flex items-center justify-between w-full bg-gray-600 p-5 ">
            <h1 className="text-white font-semibold">{question}</h1>
            <Link to={path} className="bg-blue-500 py-1 px-2 text-white whitespace-nowrap">Check Out</Link>
        </div>
    </>
    
}