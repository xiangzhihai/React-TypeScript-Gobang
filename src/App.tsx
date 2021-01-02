import { useState } from 'react';
import calculateWinner from './wuzi/gameLogic';
import Board from "./wuzi/board";
import { Helmet } from "react-helmet";
import './App.css'
interface WinStepType {
  step: number;
  winner: string;
}

function App() {
  const [history, setHistory] = useState<string[][]>([new Array(15 * 15).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [stepNumber, setStepNumber] = useState(0);
  const [winStep, setWinStep] = useState<WinStepType | null>(null);
  const handleClick = (i: number) => {
      const hisCopy = history.slice(0, stepNumber + 1);
      const squCopy = [...hisCopy[hisCopy.length - 1]];
      if (squCopy[i] || winner) return;
      squCopy[i] = xIsNext ? "X" : "O";
      setHistory([...hisCopy, squCopy]);
      setxIsNext(!xIsNext);
      const winStatus = calculateWinner(squCopy, i);
      setWinner(winStatus);
      setStepNumber(hisCopy.length);
      setWinStep(null);
  };

  const jumpTo = (step: number) => {
      setStepNumber(step);
      setxIsNext(step % 2 === 0);

      if (step !== stepNumber && winner) { // Remember the win step
          setWinStep({ step: stepNumber, winner: winner });
          setWinner(null);
      } else if (winStep && step === winStep.step) {
          setWinner(winStep.winner);
      }
  };

  const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
          <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
      );
  });


  const status = winner ? "Winner: " + winner : "Next Player: " + (!xIsNext ? "X" : "O");

  return (
      <div className="game">
          <Helmet>
              <meta charSet="utf-8" />
              <title>Gobang</title>
          </Helmet>
          <div className="game-board">
              <Board squares={history[stepNumber]}
                  onClick={handleClick} />
          </div>
          <div className="game-info">
              <div>{status}</div>
              <div>{moves}</div>
          </div>
      </div>
  )
}

export default App;
