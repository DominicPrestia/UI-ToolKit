import { useState } from "react";
import Xbutton from "./componenets/Button/Xbutton";
import Calendar from "./componenets/Calendar/Calendar";

function App() {

  const [closed, setClosed] = useState(false);

  const handleClosed = () => {
    setClosed(!closed);
  }

  return (
    <div className="App">

      <div className="buttonsContainer">
        <div className={closed ? "notVisible" : "BotBoundingBox"} onClick={handleClosed} >
          <p>Custom 1 Button</p>
          <Xbutton variant="primary" >Custom Button</Xbutton>
        </div>
        <div className="BotBoundingBox">
          <p>Custom 2 Button</p>
          <Xbutton variant="secondary">Custom Button</Xbutton>
        </div>
      </div>

      <div className="calendarContainer">
        <Calendar/>
      </div>

    </div>
  );
}

export default App;
