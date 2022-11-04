import React from "react";
import "../styles/globals.css";
import { AppState } from "../Context";
import StartPage from "./StartPage";
import GamePage from "./GamePage";
import MainPage from "./MainPage";

export default function App() {
  return (
    <AppState>
      <MainPage />
    </AppState>
  );
}
