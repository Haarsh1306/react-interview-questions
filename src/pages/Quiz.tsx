import { AppBar } from "../components/AppBar"

export const Quiz = () =>{
    return (
        <div className="bg-gray-900 min-h-screen">
        <AppBar />
        <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
          Quiz App
        </h1>
        <div className="flex justify-center items-center flex-col bg-gray-900  mt-10"></div>
      </div>
    )
}