import React from "react";
import "./App.css";
import Child from "./Child";
import { TransactinProvider } from "./transContext";
function App() {
  return (
    <TransactinProvider>
      <Child />
    </TransactinProvider>
  );
}

export default App;
