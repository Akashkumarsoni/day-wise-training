import { ComponentType } from "react";

const HOC = (IProps: ComponentType<any>) => {
  return (props: any) => {
    return <IProps {...props}/>;
  };
};
export default HOC;
