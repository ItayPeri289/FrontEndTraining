import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MenuBar from "./components/Menu/MenuBar";
import Tabs from "./components/Menu/Tabs";

function App() {
  return (
    <div style={{ margin: "-0.5rem" }}>
      <MenuBar />
      <div>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
