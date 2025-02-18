import { useState } from "react";
import Xbutton from "./componenets/Button/Xbutton";

function App() {

  const [buttonType, setButtonType] = useState("")


  return (
    <div className="App">

      <div className="TopBoundingBox">
        <div className="BotBoundingBox">
          <p>Custom 1 Button</p>
          <Xbutton variant="primary"  onClick={()=> setButtonType("active")}>Custom Button</Xbutton>
        </div>
        <div className="BotBoundingBox">
          <p>Custom 2 Button</p>
          <Xbutton variant="secondary">Custom Button</Xbutton>
        </div>
      </div>

    </div>
  );
}

export default App;
