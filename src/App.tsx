import { useState } from "react";
import "./App.css";
import Clock1 from "./clock1";
import Clock2 from "./clock2";
import Clock3 from "./clock3";

function App() {
  // const [currentHour, setCurrentHour] = useState(0);
  // const [currentMinute, setCurrentMinute] = useState(0);
  // const [currentSeconds, setCurrentSeconds] = useState(0);
  // function time() {
  //   var d = new Date();
  //   setCurrentSeconds(d.getSeconds());
  //   setCurrentMinute(d.getMinutes());
  //   setCurrentHour(d.getHours());
  // }
  // setInterval(time, 1000);

  return (
    <div className="App">
      <Clock1/>
      <Clock2/>
      <Clock3
        // hours={currentHour}
        // minutes={currentMinute}
        // seconds={currentSeconds}
      />
    </div>
  );
}

export default App;
