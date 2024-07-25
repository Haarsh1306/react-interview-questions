import { useState } from "react";

interface option{
    title: string,
    state: boolean
}
 const usePasswordGenerator =()=>{
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const generatePassword = (checkboxData : option[], characterLength :number) => {
        let charset = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setError("Select at least one option.");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < characterLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setError("");
    };

    return {password, error, generatePassword};
 }

 export default usePasswordGenerator;