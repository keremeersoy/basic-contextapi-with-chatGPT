import React from "react";
import "./App.css";
import MyProvider from "./MyProvider";
import FamilyMember from "./components/FamilyMember";

function App() {
  return (
    <MyProvider>
      <div className="App">
        <FamilyMember className="familyMember" />
      </div>
    </MyProvider>
  );
}

export default App;
