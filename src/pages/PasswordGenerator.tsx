import { useState } from "react";
import { AppBar } from "../components/AppBar";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

export const PasswordGenerator = () => {
  const [characterLength, setCharacterLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);
  const handleCheckboxChange = (i: number) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };
  
  const { password, error, generatePassword } = usePasswordGenerator();
  const handleCopy = () =>{
    navigator.clipboard.writeText(password)
    setCopied(true);

    setTimeout((()=>setCopied(false)),1000)
  }
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Password Generator
      </h1>
      <div className="flex justify-center items-center flex-col gap-8 bg-gray-700 w-4/12 p-5 mt-10">
        {password && (
          <div className="flex justify-between items-center w-full ">
            <div className="text-white font-bold">{password}</div>
            <button onClick={handleCopy} className="bg-blue-600 py-1 px-2 rounded-sm text-white font-normal hover:bg-blue-700 cursor-pointer">
             {copied ? "Copied": "Copy"}
            </button>
          </div>
        )}
        <div className="flex justify-between items-center w-full ">
          <div className="text-white font-bold">Character length</div>
          <div className="text-white font-bold">{characterLength}</div>
        </div>

        <input
          className="w-full"
          type="range"
          min="4"
          max="20"
          value={characterLength}
          onChange={(e) => {
            setCharacterLength(+e.target.value);
          }}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
          {checkboxData.map((value, ind) => {
            return (
              <div key={ind}>
                <input
                  id={value.title}
                  checked={value.state}
                  onChange={() => {
                    handleCheckboxChange(ind);
                  }}
                  className=""
                  type="checkbox"
                />
                <label className="text-white ml-1" htmlFor={value.title}>
                  {value.title}
                </label>
              </div>
            );
          })}
        </div>
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        <button
          className="bg-blue-600 p-2 rounded-sm text-white font-semibold uppercase w-full hover:bg-blue-700 cursor-pointer"
          onClick={() => generatePassword(checkboxData, characterLength)}
        >
          Generate password
        </button>
      </div>
    </div>
  );
};
