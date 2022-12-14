import { useState } from "react";

const HOC = (Children: any) => {
  const DummyComp = (props: any) => {
    const [currentHour, setCurrentHour] = useState(0);
    const [currentMinute, setCurrentMinute] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0);
    function time() {
      var d = new Date();
      setCurrentSeconds(d.getSeconds());
      setCurrentMinute(d.getMinutes());
      setCurrentHour(d.getHours());
    }
    setInterval(time, 1000);

    return (
      <>
        <Children
          hours={currentHour}
          minutes={currentMinute}
          seconds={currentSeconds}
        />
      </>
    );
  };
  return DummyComp;
};
export default HOC;
