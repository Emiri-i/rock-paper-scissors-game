import React from "react";
import "./App.scss";
import StartGame from "./component/StartGame";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PlayGame from "./component/PlayGame";
import Error from "./Error";

const router = createHashRouter([
  { path: "/", element: <StartGame /> },
  { path: "/playGame", element: <PlayGame /> },
  { path: "*", element: <Error /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
