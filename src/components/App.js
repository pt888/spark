import React from "react";
import Input from "./Input";
import View from "./View";
import "../index.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Input />
        <View />
      </div>
    </div>
  );
}

export default App;
