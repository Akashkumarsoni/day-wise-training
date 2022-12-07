import { Alert } from "@cedcommerce/ounce-ui";

interface IProps {
  responseMsg: string;
}
export const DangerAlert = (props: IProps) => {
  return (
    <Alert
      desciption="Lorem Ipsum is simply dummy text of the printing."
      type="danger"
    >
      {props.responseMsg}
    </Alert>
  );
};

export const SuccessAlert = (props: IProps) => {
  return (
    <Alert
      desciption="Lorem Ipsum is simply dummy text of the printing."
      type="success"
    >
      {props.responseMsg}
    </Alert>
  );
};
