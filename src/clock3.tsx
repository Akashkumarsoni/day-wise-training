import HOC from "./HOC";

interface IProps {
  hours: number,
  minutes : number,
  seconds : number
}
const Clock3 = (props: IProps) => {

  return (
    <div className="w-100">
      <label className="time-label3">{props.hours} : {props.minutes} : {props.seconds}</label>
    </div>
  );
};

export default HOC(Clock3);
