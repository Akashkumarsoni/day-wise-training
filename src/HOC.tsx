import { ComponentType, useState } from "react";

const HOC = (IProps: ComponentType<any>) => {

  // var currentSeconds: number, currentMinute: number, currentHour: number;
  // var d = new Date();
  // function time() {
  //   currentSeconds = d.getSeconds();
  //   currentMinute = d.getMinutes();
  //   currentHour = d.getHours();
  // }

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
  return (props: any) => {
    return <IProps 
    {...props} 
    hours={"currentHour"} 
    minutes={"currentMinute"} 
    seconds={"currentSeconds"} 
    />;
  };
};
export default HOC;
