import {
  Button,
  Card,
  FormElement,
  Loader,
  TextField,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import React, { useState } from "react";
import { DangerAlert, SuccessAlert } from "./components/alerts";

interface IState {
  loading: boolean;
  message: string;
  loggedin: string;
}
interface IProps {}
let Signup: React.FC<IProps> = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    message: "",
    loggedin: "",
  });
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitDetails = () => {
    let data = {
      email: email,
      password: password,
    };
    console.log(data);
    if (true) {
      setState({
        ...state,
        loading: false,
        loggedin: "done",
      });
    } else {
      setState({
        ...state,
        loading: false,
        loggedin: "error",
      });
    }
  };
  return (
    <div className="form-page">
      <Card>
        <TextStyles
          alignment="left"
          fontweight="normal"
          textcolor="dark"
          type="Heading"
          utility="none"
        >
          Signup
        </TextStyles>
        {state.loggedin === "done" && (
          <SuccessAlert responseMsg={state.message} />
        )}
        {state.loggedin === "error" && (
          <DangerAlert responseMsg={state.message} />
        )}
        <Card cardType="Bordered">
          <FormElement horizontal={false}>
            <TextField
              name="name"
              onChange={(e) => {
                setName(e);
              }}
              placeHolder="Enter name"
              value={name}
            />
            <TextField
              name="email"
              onChange={(e) => {
                setEmail(e);
              }}
              placeHolder="Enter email"
              value={email}
            />
            <TextField
              name="password"
              onChange={(e) => {
                setPassword(e);
              }}
              placeHolder="Enter password"
              value={password}
              type="password"
            />
            <Button
              content="Submit"
              halign="Equal"
              iconAlign="left"
              length="none"
              onAction={function noRefCheck() {
                submitDetails();
              }}
              onClick={function noRefCheck() {
                submitDetails();
              }}
              thickness="thin"
              type="Primary"
            />
          </FormElement>
        </Card>
        {state.loading && <Loader type="Loader2" />}
      </Card>
    </div>
  );
};

export default Signup;
