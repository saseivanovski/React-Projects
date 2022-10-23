import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Calculator from "./features/Calculator/Calculator";
import XO from "./features/TicTacToe";
import RockPaperScissors from "./features/RockPaperScissors";

function App() {
  const [activeTab, setActiveTab] = useState([
    { id: 1, label: "Calculator", isActive: true, component: <Calculator /> },
    {
      id: 2,
      label: "Rock-Paper-Scissors",
      isActive: false,
      component: <RockPaperScissors />,
    },
    { id: 3, label: "Tic-Tac-Toe", isActive: false, component: <XO /> },
  ]);

  const handleActiveTab = (id) => {
    let copy = [...activeTab];
    copy[activeTab.findIndex((item) => item.isActive)].isActive = false;
    copy[activeTab.findIndex((item) => item.id === id)].isActive = true;
    setActiveTab(copy);
  };

  return (
    <div>
      <Navigation activeTab={activeTab} handleActiveTab={handleActiveTab} />
      <div>{activeTab.find((item) => item.isActive).component}</div>
      <Footer />
    </div>
  );
}

export default App;
