import HOC from "./HOC";

interface IProps {
  hours: number,
  minutes : number,
  seconds : number
}
const Clock1 = (props: IProps) => {
  return (
    <div className="w-100">
      <label className="time-label">{props.hours} : {props.minutes} : {props.seconds}</label>
    </div>
  );
};

export default HOC(Clock1);
