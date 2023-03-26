import React from "react";
import { useState } from "react";

type Count = {
  winCount: number;
  addWinCount: () => void;
  drawCount: number;
  addDrawCount: () => void;
  loseCount: number;
  addLoseCount: () => void;
  resetCount: () => void;
};
const ResultCountContext = React.createContext<Count>({
  winCount: 0,
  addWinCount: () => {},
  drawCount: 0,
  addDrawCount: () => {},
  loseCount: 0,
  addLoseCount: () => {},
  resetCount: () => {},
});
export { ResultCountContext };

const ResultCountContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [winCount, setWinCount] = useState<number>(0);
  const [drawCount, setDrawCount] = useState<number>(0);
  const [loseCount, setLoseCount] = useState<number>(0);
  const addWinCount = () => {
    setWinCount(winCount + 1);
  };
  const addDrawCount = () => {
    setDrawCount(drawCount + 1);
  };
  const addLoseCount = () => {
    setLoseCount(loseCount + 1);
  };
  const resetCount = () => {
    setWinCount(0);
    setDrawCount(0);
    setLoseCount(0);
  };

  const contextValue: Count = {
    winCount,
    addWinCount,
    drawCount,
    addDrawCount,
    loseCount,
    addLoseCount,
    resetCount,
  };
  return (
    <ResultCountContext.Provider value={contextValue}>
      {children}
    </ResultCountContext.Provider>
  );
};

export default ResultCountContextProvider;
