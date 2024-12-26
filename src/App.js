import React, { use, useEffect, useState } from "react";
import { getRandomItem } from "./getRandomItem";
import { FaHandRock } from "react-icons/fa";
import { RiFilePaperLine } from "react-icons/ri";
import { FaScissors } from "react-icons/fa6";

const App = () => {
  const choices = ["scissor", "paper", "rock"];
  const [userChoice, setUserChoice] = useState("userChoice");
  const [randomChoice, setRandomChoice] = useState("randomChoice");
  const [result, setResult] = useState("setResult");

  // random
  const handleRandomChoice = () => {
    const random = getRandomItem(choices);
    // alert(`1 2 3: ${randomChoice}`);
    setRandomChoice(random);
  };

  // user seleccts, user enters, random function runs,
  const handleClick = () => {
    handleRandomChoice();
    if (userChoice == randomChoice) {
      setResult("Tie");
    } else if (userChoice == "rock") {
      if (randomChoice == "paper") {
        setResult("CPU wins");
      } else {
        setResult("We win");
      }
    } else if (userChoice == "scissor") {
      if (randomChoice == "rock") {
        setResult("CPU wins");
      } else {
        setResult("We win");
      }
    } else if (userChoice == "paper") {
      if (randomChoice == "scissor") {
        setResult("CPU wins");
      } else {
        setResult("We win");
      }
    }
  };

  useEffect(() => {
    console.log("User", userChoice, "random", randomChoice);
  }, [userChoice, randomChoice]);

  return (
    <div className="bg-slate-300 text-center">
      <h1 className="font-extrabold text-3xl ">Rock Paper Scissor</h1>
      {/* <button onClick={handleRandomChoice} className="random-btn">
       3 2 1 
      </button> */}
      <div className="mt-7 flex gap-10 justify-center">
        <button onClick={() => setUserChoice("rock")}>
          <FaHandRock
            className={`h-12 w-12 rounded-xl ${
              userChoice === "rock" ? "bg-green-400 " : ""
            }`}
          />
        </button>
        <button onClick={() => setUserChoice("paper")}>
          <RiFilePaperLine className={`h-12 w-12 rounded-xl ${
              userChoice === "paper" ? "bg-green-400 " : ""
            }`} />
        </button>
        <button onClick={() => setUserChoice("scissor")}>
          <FaScissors className={`h-12 w-12 rounded-xl ${
              userChoice === "scissor" ? "bg-green-400 " : ""
            }`} />
        </button>
      </div>
      <button className="text-2xl font-bold" onClick={handleClick}>
        Submit
      </button>
      <div>
        <p className="text-red-500 "> Opponent:</p>
        <div className="flex justify-center">
          {randomChoice == "scissor" ? (
            <FaScissors />
          ) : randomChoice == "rock" ? (
            <FaHandRock />
          ) : (
            <RiFilePaperLine />
          )}
        </div>
      </div>

      <p>User:</p>
      <div className="flex justify-center">
        {userChoice == "scissor" ? (
          <FaScissors />
        ) : randomChoice == "rock" ? (
          <FaHandRock />
        ) : (
          <RiFilePaperLine />
        )}
      </div>
      <p className="bg-red-400 text-2xl">{result}</p>
    </div>
  );
};

export default App;
