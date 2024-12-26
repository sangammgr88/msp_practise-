import React, { useEffect, useState } from "react";
import { getRandomItem } from "./getRandomItem";
import rock from "./assets/rock.jpg";
import paper from "./assets/paper.jpg";
import scissor from "./assets/scissor.jpg";
import { CiStar } from "react-icons/ci";

const App = () => {
  const choices = ["scissor", "paper", "rock"];
  const [userChoice, setUserChoice] = useState("userChoice");
  const [randomChoice, setRandomChoice] = useState("randomChoice");
  const [result, setResult] = useState("setResult");
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [draw, setDraw] = useState(0);
  const [round, setRound] = useState(0);

  // Handle random choice for the CPU
  const handleRandomChoice = () => {
    const random = getRandomItem(choices);
    setRandomChoice(random);
  };

  // Handle the user's move and calculate the result
  const handleClick = () => {
    handleRandomChoice();
    if (userChoice === randomChoice) {
      setResult("Tie");
      setDraw((prev) => prev + 1);
    } else if (userChoice === "rock") {
      if (randomChoice === "paper") {
        setResult("CPU wins");
        setLoss((prev) => prev + 1);
      } else {
        setResult("We win");
        setWin((prev) => prev + 1);
      }
    } else if (userChoice === "scissor") {
      if (randomChoice === "rock") {
        setResult("CPU wins");
        setLoss((prev) => prev + 1);
      } else {
        setResult("We win");
        setWin((prev) => prev + 1);
      }
    } else if (userChoice === "paper") {
      if (randomChoice === "scissor") {
        setResult("CPU wins");
        setLoss((prev) => prev + 1);
      } else {
        setResult("We win");
        setWin((prev) => prev + 1);
      }
    }
    setRound((prev) => prev + 1);
  };

  // Use effect to show winner after 3 rounds
  useEffect(() => {
    if (round === 3) {
      if (win > loss) {
        alert("You win the game!");
      } else if (win < loss) {
        alert("Better luck next time!");
      } else {
        alert("Draw");
      }
    }
  }, [win, loss, round]);

  const handleMouseEnter = (choice) => {
    setUserChoice(choice);
  };

  return (
    <div className="bg-sky-300 p-52">
      <h1 className="font-extrabold text-5xl text-center">Rock Paper Scissor</h1>
      <div className="text-center flex justify-center gap-16">
        <div className="mt-7 grid grid-rows-2 gap-5 justify-center">
          <div>
            <h1 className="text-2xl mt-5 italic">Make your move </h1>
          </div>
          <div className="text-2xl flex justify-center gap-10 border border-black  mx-auto mt-6 bg-red-300 rounded-lg animate-bounce">
            <h1 className="flex ">
              {[...Array(win)].map((_, index) => (
                <CiStar key={index} className="text-black" />
              ))}
            </h1>
          </div>
          <div className="flex gap-6">
            <button
              onMouseEnter={() => handleMouseEnter("rock")}
              className={`h-12 w-12 rounded-xl border-4 cursor-pointer active:bg-red-600 ${
                userChoice === "rock" ? "border-red-700" : "border-transparent"
              }`}
            >
              <img className="h-full w-full rounded-xl" src={rock} alt=""/>
            </button>
            <button
              onMouseEnter={() => handleMouseEnter("paper")}
              className={`h-12 w-12 rounded-xl ${
                userChoice === "paper" ? "bg-green-400 border-4 border-red-700 " : ""
              }`}
            >
              <img className="h-full w-full rounded-xl" src={paper} alt="" />
            </button>
            <button
              onMouseEnter={() => handleMouseEnter("scissor")}
              className={`h-12 w-12 rounded-xl ${
                userChoice === "scissor" ? "bg-green-400 border-4 border-red-700" : ""
              }`}
            >
              <img className="h-full w-full rounded-xl" src={scissor} alt="" />
            </button>
          </div>
        </div>

        <div className="mt-7 grid grid-rows-2 gap-5 justify-center">
          <div>
            <h1 className="text-2xl mt-5 italic">Wait for opponent move </h1>
          </div>
          <div className="text-2xl flex justify-center gap-10 border border-black  mx-auto mt-6 bg-red-300 rounded-lg animate-bounce">
          <h1 className="flex ">
              {[...Array(loss)].map((_, index) => (
                <CiStar key={index} className="text-black" />
              ))}
            </h1>
          </div>
          <div className="flex gap-6">
            <button className="h-12 w-12 rounded-xl">
              <img
                className={`h-full w-full rounded-xl ${
                  randomChoice === "rock" ? "bg-green-400 border-4 border-red-700" : ""
                }`}
                src={rock}
                alt=""
              />
            </button>
            <button className="h-12 w-12 rounded-xl">
              <img
                className={`h-full w-full rounded-xl ${
                  randomChoice === "paper" ? "bg-green-400 border-4 border-red-700" : ""
                }`}
                src={paper}
                alt=""
              />
            </button>
            <button className="h-12 w-12 rounded-xl">
              <img
                className={`h-full w-full rounded-xl ${
                  randomChoice === "scissor" ? "bg-green-400 border-4 border-red-700" : ""
                }`}
                src={scissor}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-7 text-center">
        <button className="bg-red-600 rounded-lg text-2xl font-bold" onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default App;
