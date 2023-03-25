import React from "react";
import "./App.scss";
import StartGame from "./component/StartGame";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayGame from "./component/PlayGame";

const router = createBrowserRouter([
  { path: "/", element: <StartGame /> },
  { path: "/playGame", element: <PlayGame /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
